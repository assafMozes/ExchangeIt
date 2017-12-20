var Proposals = (function () {
    var mysql = require('mysql');
    var Objects = require('./objects');
    
    
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "filuka12",
        database: "data1"
    })
    con.connect(function (err) {
        if (err) throw err;
        console.log('connected')
    })

    var getProposals = function (session, cb) {
        var sql = 'SELECT * FROM proposals WHERE proposerId =' + session + ' AND (state = "panding" OR state = "new");'
        con.query(sql, function (err, result) {
            if (err) throw err;
            Objects.getMultipleObjects(result, cb)
            // console.log(allObjs)
            // cb(result)
        })
    };

    var addNewProposal = function(proposal, cb){
        var sql = "insert into proposals (proposerId, itemProposerId, itemProposer2Id, proposedId, itemProposedId, itemProposed2Id, state) values (" +
        proposal.proposerId + "," + proposal.itemProposerId + "," + proposal.itemProposer2Id + "," +
         proposal.proposedId + "," + proposal.itemProposedId + "," + proposal.itemProposed2Id + ",'" + proposal.state + "');"
         con.query(sql, function (err, result) {
            if (err) throw err;
            cb(result)
        })
        }

      return {
        getProposals: getProposals,
        addNewProposal:addNewProposal,
    };
})();

module.exports = Proposals;