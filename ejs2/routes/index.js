var express = require('express');
var router = express.Router();
var fs = require("fs");

var result = []
fs.readFile("data.json", 'utf8', function (err, data) {
    data = JSON.parse( data );
    result = data;
 });

router.get('/', function(req, res) {
    res.render('index', { title: 'Danh sách sản phẩm', list: result });
});

router.get('/list', function(req, res) {
    res.send(
        {
            code: 200,
            message: "ok",
            data: result,
        }
    )
});

router.post('/add', function(req, res) {
    if (req.body.name == "" || req.body.name == null)
        return res.send(
            {
                code: 400,
                message: "Vui lòng nhập tên sản phẩm"
            }
        )
    var id = result.length + 1;
    var obj = {
        id: id,
        name: req.body.name
    }
    result.push(obj);
    return res.send({
        code: 200,
        message: "ok",
        data: obj
    });
});

module.exports = router;