const express = require('express')
const router = express.Router()

// const newscontroller = require('../controllers/NewsController')

router.use('/', function(req, res) {
    res.render('home');
})

module.exports = router;
