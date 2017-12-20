angular.module('ts')
    .component('header', {
        templateUrl: '../javascripts/components/header/header.html',
        controller: function ($rootScope, usersFetcher ) {
            var ctrl = this
            var id; 
            $rootScope.$on('logon', function (event, user) {
                ctrl.name = user.name;
                id = user.id;
            })
            ctrl.logOut = function(){
                window.location = 'index.html'
            }

            // ctrl.proposalsNumber =  proposalsFetcher.myProposalsNumber()
        }
    });

