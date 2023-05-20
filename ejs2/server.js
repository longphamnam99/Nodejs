var express = require('express')
const bodyParser = require("body-parser");

var app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var path = require('path')

var router =  require('./routes')
var port = 5564

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', router)

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})