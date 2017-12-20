
angular.module('ts')
    .factory('usersFetcher', ['$http', '$rootScope', function ($http, $rootScope) {

        var user =false;



        // function checkLogin(email, password, cb) {
        //     var details = { email: email, password: password }
        //     $http.post("/users/login", details)
        //         .then(function (response) {
        //             // console.log(user)
        //             user =  response.data;
        //             cb(response.data);
        //             // $rootScope.$emit('logon', response.data)
        //         });
        // }
        function getUser(){
            $http.get("/users/sendUser")
            .then(function (response) {
                user =  response.data;
                console.log(user)
                $rootScope.$emit('logon', user)
           
            });
        }

        function getUserOfObject(userId){
            return $http.get("/users/sendUser/" + userId)
            .then(function (response) {
                return response.data
            });
        }
        
        function sendUserEmail(){
            return user.email
        }


        



        return {
            getUserOfObject: getUserOfObject,
            sendUserEmail:sendUserEmail,
            getUser:getUser,
        }
    }])




        // function postRegistration(details) {
        //     console.log(details)
        //     $http.post("/users/register", details)
        //         .then(function (response) {
        //             user = [details];
        //             console.log(user)

        //             $rootScope.$emit('logon', user)
        //         });
        //     return
        // }

        // function isUserLoggedIn() {
        //     $http.get("/users/isLoggedIn")
        //         .then(function (response) {
        //             // console.log(response.data)
        //             user = response.data;
        //             $rootScope.$emit('logon', user)
        //             console.log(response.data)
        //             // callback( response.data);
        //             // callback(user);
        //         });

        //     return true;
        // }

        // function logOut() {
        //     $http.put("/users/logOut")
        //         .then(function (response) {
        //             user = []
        //             $rootScope.$emit('logon', user)
        //             console.log(response.data)
        //         });

        // }

        // function getMyPositions() {
        //     if (user.length) {
        //         return user[0].aplliedPositions;
        //     }
        //     else {
        //         return []
        //     }
        // }

        // function sendUserId() {
        //     return user[0].id
        // }




