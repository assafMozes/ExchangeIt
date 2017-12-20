
angular.module('ts')
    .factory('proposalsFetcher', ['$http', '$rootScope', function ($http, $rootScope) {
        var proposalsIMake;

        function getMyProposals() {
            if (proposalsIMake) {
                return proposalsIMake.proposals
            }
            else {
                return $http.get("/proposals/iMake")
                    .then(function (response) {
                        proposalsIMake = response.data
                        return proposalsIMake.proposals
                    });
            }
        }

        function addProposal(proposal) {
            $http.post("/proposals", proposal)
                .then(function (response) {
                    console.log(response.data)
                });
        }

        function isProposalExist(myObjectsId, hisObjectsId, UserId) {
            console.log(myObjectsId)
            console.log(hisObjectsId)
            console.log(UserId)
            for (var proposal of proposalsIMake) {
                if (UserId == proposal.proposedId &&
                    (myObjectsId[0] == proposal.itemProposerId || myObjectsId[0] == proposal.itemProposer2Id) &&
                    (myObjectsId[1] == proposal.itemProposerId || myObjectsId[1] == proposal.itemProposer2Id) &&
                    (hisObjectsId[0] == proposal.itemProposedId || hisObjectsId[0] == proposal.itemProposed2Id) &&
                    (hisObjectsId[1] == proposal.itemProposedId || hisObjectsId[1] == proposal.itemProposed2Id)) {
                    return true
                }
            }
            return false
        }


        return {
            getMyProposals: getMyProposals,
            addProposal: addProposal,
            isProposalExist: isProposalExist,
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




