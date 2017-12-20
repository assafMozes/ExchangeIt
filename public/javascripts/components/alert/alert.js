angular.module('ts')
    .component('alert', {
        templateUrl: '../javascripts/components/alert/alert.html',
        bindings: {
            proposalDeal: '<',
        },
        controller: function ($scope, $rootScope, $http, usersFetcher ) {
            var ctrl = this
       
         

        }
    });

