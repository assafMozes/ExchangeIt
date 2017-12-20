angular.module('ts')
    .component('proposals', {
        templateUrl: '../javascripts/components/proposals/proposals.html',
        bindings: {
            theProposals: '<',
        },
        controller: function () {
            var ctrl = this
       
        }
    });

