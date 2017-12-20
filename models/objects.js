var Objects = (function () {
    var cats = require('./../data/cats.json');
    var states = require('./../data/states.json');
    var _ = require('lodash');
    
    var mysql = require('mysql');
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

    var getObjects = function (session, cb) {
        var sql = 'SELECT * FROM objects WHERE userId =' + session.logged + ';'
        con.query(sql, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    };



    var getSearchObjects = function(cat, subCat, states, cb){
        var sql = 'SELECT * FROM objects WHERE cat ="' + cat + '" AND subCat ="' + subCat +'" AND state in(' + states + ');'
        con.query(sql, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    };

    var getUsersObjects = function(userId, objectId, cb){
        var sql = 'SELECT * FROM objects WHERE userId =' + userId + ' AND NOT id =' + objectId + ';'
        con.query(sql, function (err, result) {
            if (err) throw err;
            cb(result)
        })
    };

    var getMultipleObjects = function(proposals, cb){
        var allObjs = [], objs=[];
        for(var proposal of proposals){
            objs.push(proposal.itemProposerId)
            objs.push(proposal.itemProposer2Id)
            objs.push(proposal.itemProposedId)
            objs.push(proposal.itemProposed2Id)
            allObjs.push(objs)
            objs=[]
        }
        
        allObjs =_.join(_.compact(_.union(_.flatten(allObjs))), ",")
        var sql = 'SELECT * FROM objects WHERE id in(' + allObjs + ');'
        con.query(sql, function (err, result) {
            if (err) throw err;
            var answer = {
                proposals:proposals,
                objects: result
            };

            cb(answer)
        })
    }


    

    var getCats = function(cb){
        cb(cats)
    }

    var getStates = function(cb){
        cb(states)
    }

      return {
        getObjects: getObjects,
        getSearchObjects: getSearchObjects,
        getCats: getCats,
        getStates:getStates,
        getUsersObjects:getUsersObjects,
        getMultipleObjects:getMultipleObjects, 
    };
})();

module.exports = Objects;