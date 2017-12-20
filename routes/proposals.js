var express = require('express');
var router = express.Router();

var Proposals = require('./../models/proposals');

router.get('/iMake', function (req, res, next) {
  Proposals.getProposals(req.session.logged, function(ans){
    res.send(ans)
  })
})

router.post('/', function (req, res, next) {
  var proposal = req.body;
  proposal.proposerId = req.session.logged;
  Proposals.addNewProposal(proposal, function(ans){
    res.send(ans)
  })
})



module.exports = router;