angular.module('ts')
    .component('proposalDealApproval', {
        templateUrl: '../javascripts/components/proposalDealApproval/proposalDealApproval.html',
        bindings: {
            myObjects: '<',
            hisObjects: '<',
            hisDetails: '<',
            proposalDeal: '<',
            approval: '=',
        },

        controller: function ($rootScope, $location, objectsFetcher, proposalsFetcher, $timeout) {
            var ctrl = this;
            ctrl.sent = 'hideApproval'
            ctrl.cancel = function(){
                ctrl.approval = 'hideApproval'
            }
            ctrl.makeAction = function(){
                ctrl.sent = 'showApproval'
                $timeout(function(){$location.path('/home'); }, 3000);
                
                var proposal = {
                    itemProposerId: ctrl.myObjects[0].id,
                    proposedId: ctrl.hisDetails.id,
                    itemProposedId: ctrl.hisObjects[0].id,
                    state: 'new',
                    }
                    proposal.itemProposed2Id = ctrl.hisObjects[1]? ctrl.hisObjects[1].id : null;
                    proposal.itemProposer2Id = ctrl.myObjects[1]? ctrl.myObjects[1].id : null;
                    proposalsFetcher.addProposal(proposal)
                    // $location.path('/home')
                    
            }
        }
    });

