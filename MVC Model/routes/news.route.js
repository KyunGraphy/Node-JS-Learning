const express = require('express')
const router = express.Router()

const newscontroller = require('../controllers/NewsController')

router.use('/:slug', newscontroller.show)
router.use('/', newscontroller.index)

module.exports = router;
