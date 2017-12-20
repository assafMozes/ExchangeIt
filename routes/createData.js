var express = require('express');
var router = express.Router();

var Create = require('./../models/createData');

router.post('/', function (req, res, next) {
  Create.createData()
    res.send({ans:5})
  
})

module.exports = router;