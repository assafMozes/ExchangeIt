angular.module('ts')
    .component('oneProposal', {
        templateUrl: '../javascripts/components/oneProposal/oneProposal.html',
        bindings: {
            proposal: '<',
           
        },
        controller: function (proposalsFetcher ) {
            var ctrl = this
            this.$onInit = function(){
                var objectsIds = _.compact([ctrl.proposal.itemProposerId,
                    ctrl.proposal.itemProposer2Id,
                    ctrl.proposal.itemProposedId,
                    ctrl.proposal.itemProposed2Id]) 
                ctrl.objects =  proposalsFetcher.ojectsFromProposalsIMake(objectsIds)
            }
        }
    });

