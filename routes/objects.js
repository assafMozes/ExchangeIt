var express = require('express');
var router = express.Router();

var Objects = require('./../models/objects');

router.get('/', function (req, res, next) {
  Objects.getObjects(req.session, function(ans){
    res.send(ans)
  })
})


router.get('/cats', function (req, res, next) {
  Objects.getCats(function(ans){
    res.send(ans)
  })
})

router.get('/states', function (req, res, next) {
  Objects.getStates(function(ans){
    res.send(ans)
  })
})

router.get('/user/:userId/:objectId', function (req, res, next) {
  Objects.getUsersObjects(req.params.userId, req.params.objectId, function(ans){
    res.send(ans)
  })
})

router.get('/:cat/:subCat/:states', function (req, res, next) {
  Objects.getSearchObjects(req.params.cat, req.params.subCat, req.params.states, function(ans){
    res.send(ans)
  })
})
module.exports = router;