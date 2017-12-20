angular.module('ts')
    .controller('main', function controller($scope, usersFetcher, objectsFetcher,proposalsFetcher) {
        // console.log(111)
            usersFetcher.getUser();
            // objectsFetcher.getMyObjects();
            // objectsFetcher.getAllCats();
            // proposalsFetcher.getMyProposals();

    })