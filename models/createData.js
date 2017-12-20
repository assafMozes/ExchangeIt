var Create = (function () {
    var allUsers = require('./../data/first.json');
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
    var createData = function () {

        var objects = [];
        var object = {};
        var cat = {
            'furniture': ['bed', 'chair', 'closet'],
            'electronics': ['celolar', 'computers', 'kitchen'],
            'tools': ['hammer', 'axe', 'scrowdriver'],
            'music': ['gittare', 'piano', 'drums']
        }
        var state = ['brand new', 'like new', 'used']
        var wasExchanged = [true, false]
        

        for (var i = 1; i <= 100; i++) {
            object.cat = Object.keys(cat)[Math.floor(Math.random() * Object.keys(cat).length)];
            object.subCat = cat[object.cat][parseInt(Math.random() * 3)]
            object.state = state[parseInt(Math.random() * 3)]
            object.id = i;
            object.userId = parseInt(Math.random() * 21) + 1
            console.log(object)
            // objects.push(object)
            var sql = "insert into objects (id, userId, cat, subCat, state) values (" + object.id + "," + object.userId + ",'" + object.cat + "','" + object.subCat + "','" + object.state + "');";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result)
            })
        }

    }






    return {
        createData: createData,
    };
})();

module.exports = Create;