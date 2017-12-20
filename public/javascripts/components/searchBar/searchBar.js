angular.module('ts')
    .component('searchBar', {
        templateUrl: '../javascripts/components/searchBar/searchBar.html',
        // bindings: {
        //     cats: '<',
        // },
        controller: function ($rootScope, objectsFetcher) {
            var ctrl = this;
            ctrl.objects = [];
            ctrl.choosen = { myStates: {}, cat: 'choose category', sub: 'choose object' }
            objectsFetcher.getAllCats(function (cats) {
                ctrl.cats = cats;
            });
            objectsFetcher.getAllStates(function (states) {
                ctrl.states = states;
            });
            ctrl.search = function () {
                
                objectsFetcher.searchObjects(ctrl.choosen, function (res) {
                    console.log(ctrl.choosen)
                    ctrl.objects = res
                })
            }
            // var id; 
            // $rootScope.$on('logon', function (event, user) {
            //     ctrl.name = user.name;
            //     id = user.id;
            // })
            // ctrl.logOut = function(){
            //     window.location = 'index.html'
            // }

            // ctrl.proposalsNumber =  proposalsFetcher.myProposalsNumber()
        }
    });

