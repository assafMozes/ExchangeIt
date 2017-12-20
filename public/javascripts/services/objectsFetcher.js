
angular.module('ts')
    .factory('objectsFetcher', ['$http', '$rootScope', function ($http, $rootScope) {
        var objects, cats, states, objectsSearched;

        function getMyObjects() {
            if(objects){
                return objects
            }
            else{
                return $http.get("/objects")
                .then(function (response) {
                    objects = response.data;
                    return response.data
                });
            }
        }

        function getAllCats(cb) {
            if (cats) {
                cb(cats)
            }
            else {

                $http.get("/objects/cats")
                    .then(function (response) {
                        console.log(response.data)
                        cats = response.data;
                        cb(cats)
                        // $rootScope.$emit('cats', cats) 
                    
                });
            }   
        }

        function getAllStates(cb) {
            if (states) {
                cb(states)
            }
            else {

                $http.get("/objects/states")
                    .then(function (response) {
                        console.log(response.data)
                        states = response.data;
                        cb(states)
                        // $rootScope.$emit('cats', cats) 
                    
                });
            }   
        }

function searchObjects(choosen, cb) {
    var stateToStr = '"';
    for(var x in choosen.myStates){
        if(choosen.myStates[x])
        stateToStr+= x + '","';
    }
    stateToStr = stateToStr.slice(0, -2)
    $http.get("/objects/" + choosen.cat + "/" + choosen.sub + "/" + stateToStr)
        .then(function (response) {
            console.log(response.data)
            objectsSearched = response.data;
            cb(response.data)
        });
}




function myObjects() {
    return objects
}

function sendCats() {
    return cats
}

function sendObjectFromSearched(id){
    for(var obj of objectsSearched){
        if (obj.id == id){
            return obj
        }
    }
    return false
}

function getObjectsOfUser(userId, objectId){
    return $http.get("/objects/user/" + userId + "/" + objectId)
    .then(function (response) {
        return response.data;
    });
}

function getAllHisObjects(params){
    return $http.get("/objects/user/" + params.objectsUserId + "/" + params.objectId)
    .then(function (response) {
        var hisObjects = response.data;
        var choosenObj = sendObjectFromSearched(params.objectId);
        choosenObj.choosen = true;
        hisObjects.push(choosenObj)
        return hisObjects

    });
}


return {
    getMyObjects: getMyObjects,
    getAllCats: getAllCats,
    getAllStates:getAllStates,
    searchObjects: searchObjects,
    myObjects: myObjects,
    sendCats: sendCats,
    sendObjectFromSearched:sendObjectFromSearched,
    getObjectsOfUser:getObjectsOfUser,
    getAllHisObjects:getAllHisObjects,
}
    }])






