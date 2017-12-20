var Users = (function () {
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

    var checkUserLogin = function (data, session,cb) {
        var sql = 'SELECT id FROM users WHERE email ="' + data.email + '"AND password ="' + data.password + '";'
        con.query(sql, function (err, result) {
            if (err) throw err;
            var ans;
            if (result[0]){
                session.logged = result[0].id
                ans =  { login: true, url: '/home.html' }
            }
            else
                ans =  { login: false }
            cb(ans)

        })


        // for (var user of allUsers) {
        //     if (user.email === data.email && user.password === data.password) {
        //         session.logged = data.email;
        //         return { login: true, url: '/home.html' }
        //     }
        // }
        // return { login: false }
    };

    var sendUser = function (id, cb) {
        // console.log(session.id)
        // for (var user of allUsers) {
        //     if (user.email === session.logged) {
        //         return user
        //     }
        // }
        var sql = 'SELECT id, name, email, isAdmin FROM users WHERE id =' + id + ';'
        con.query(sql, function (err, result) {
            if (err) throw err;
            cb(result[0])
        })
    }


    return {
        checkUserLogin: checkUserLogin,
        sendUser: sendUser,
    };
})();

module.exports = Users;