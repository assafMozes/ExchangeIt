angular.module('ts')
    .component('oneObject', {
        templateUrl: '../javascripts/components/oneObject/oneObject.html',
        bindings: {
            object: '<',
            isMyObj: '<',
            addRemove: '<',
            choosenObjNum: '<',
        },
        controller: function ($scope, $rootScope, $http, usersFetcher ) {
            var ctrl = this
            ctrl.makeProposal = function(){
                console.log(ctrl.object)
            }
            
            ctrl.addRemoveObject = function(){
                ctrl.object.choosen = ctrl.object.choosen? false: true
            }

            ctrl.addRemoveObjectAtCreateProposal = function(){
                for (var i=0; i< ctrl.myList.length; i++){
                    if (ctrl.myList[i].id == ctrl.object.id){
                        ctrl.moveToList.push(ctrl.myList.splice(i,1)[0])
                    }
                }
            }
            // ctrl.image = "https://cdn.pixabay.com/photo/2017/11/25/07/34/dog-2976311_150.jpg";
            // var API_KEY = '7225037-dbb2a1907e7ff5f2c1acadc88';
            // var URL = "https://pixabay.com/api/?key="+API_KEY+"&id=2876311";
            // $http.get(URL)
            // .then(function (response) {
            //     // console.log(response.data)
            //     ctrl.image = response.data.hits[0].previewURL;
                
            // });

        }
    });

