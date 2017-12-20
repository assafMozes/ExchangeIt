angular.module('ts')
    .component('objects', {
        templateUrl: '../javascripts/components/objects/objects.html',
        bindings: {
            theObjects: '<',
        },
        controller: function ($rootScope) {
            // var ctrl = this;
            // $rootScope.$on('objects', function (event, objects) {
            //     ctrl.theObjects = objects;
            //     console.log(34343)
            // })
        }
    });

