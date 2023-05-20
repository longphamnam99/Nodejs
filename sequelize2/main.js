var express = require('express')
var bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var path = require('path')

var router =  require('./src/routes')
var port = 1234
app.set('views', path.join('./src', 'views'))
app.set('view engine', 'ejs')
app.use('/', router)

app.use('/static', express.static(path.join('./src', 'public')))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})