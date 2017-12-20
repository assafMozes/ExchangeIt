angular.module('ts')
    .component('createProposal', {
        templateUrl: '../javascripts/components/createProposal/createProposal.html',
        bindings: {
            // hisChoosenObjects: '<',
            // hisOtherObjects: '<',
            myObjects: '<',
            objectsUser: '<',
            theProposals: '<',
            hisObjects: '<',
        },

        controller: function ($rootScope, objectsFetcher, proposalsFetcher) {
            var ctrl = this;
            ctrl.approval = 'hideApproval';
            // ctrl.myChoosenObjects = [];
            ctrl.makeProposal = function () {
                var myChoosenObjectsId = [], hisChoosenObjectsId = [];
                for (var i of ctrl.myObjects) {
                    if(i.choosen){
                        myChoosenObjectsId.push(i.id)
                    }
                }
                for (var j of ctrl.hisObjects) {
                    if(j.choosen){
                        hisChoosenObjectsId.push(j.id)
                    }
                }
                if (proposalsFetcher.isProposalExist(myChoosenObjectsId, hisChoosenObjectsId, ctrl.objectsUser.id)) {
                    console.log('you had that one')
                }
                else {
                    ctrl.approval = 'showApproval'
                }
            }

            ctrl.addObjectCreateProposal = function () {
                console.log(43534)
            }

        }
    });

