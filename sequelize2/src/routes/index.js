var express = require('express');
var user = require('#models/user')

var router = express.Router();

router.get('/', async (req, res) => {
    let result;
    if (req.query.search) {
        result = await new user().list(req.query.search);
    } else {
        result = await new user().list();
    }
    res.render('index', { title: 'Demo', list: result });
});

router.post('/add', async (req, res) => {
    await new user().save(req.body);
    let result = await new user().list();
    res.render('index', { title: 'Demo', list: result });
})

router.put('/edit/:id', async (req, res) => {
    const id = req.params.id;
    console.log(req.body)
    await new user().edit(id, req.body);
    let result = await new user().list();
    res.render('index', { title: 'Demo', list: result });
})

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await new user().delete(id);
    let result = await new user().list();
    res.render('index', { title: 'Demo', list: result });
})

module.exports = router;