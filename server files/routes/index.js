const express = require('express')
const router = express.Router()
const task = require('./Task_routes');


router.use('/task', task);


module.exports = router;