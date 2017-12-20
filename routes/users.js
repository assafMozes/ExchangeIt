var express = require('express');
var router = express.Router();

var Users = require('./../models/users');

router.post('/login', function (req, res, next) {
  Users.checkUserLogin(req.body, req.session, function(ans){
    res.send(ans)
  })
})

router.get('/sendUser', function (req, res, next) {
  Users.sendUser(req.session.logged, function(user){
    res.send(user)
  })
 })

 router.get('/sendUser/:userId', function (req, res, next) {
  Users.sendUser(req.params.userId, function(user){
    res.send(user)
  })
 })

module.exports = router;