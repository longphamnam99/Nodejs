var express = require('express')
var app = express()
var path = require('path')

var router =  require('./routes')
var port = 1234

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/learn', function(req, res) {
    res.send("hello")
});

app.use('/', router)

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`localhost:${port}`)
})