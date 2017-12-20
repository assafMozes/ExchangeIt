var myApp = angular.module('ts', ['ui.router', 'ang-drag-drop']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('myObjects', {
      url: '/myObjects',
      component: 'objects',
      resolve: {
        theObjects: function (objectsFetcher) {
          return objectsFetcher.getMyObjects();
        }
      }
    })
    .state('myProposals', {
      url: '/myProposals',
      component: 'proposals',
      resolve: {
        theProposals: function (proposalsFetcher) {
          return proposalsFetcher.getMyProposals();
        }
      }
    })
    .state('search', {
      url: '/search',
      component: 'searchBar',
      // resolve: {
      //   cats: function (objectsFetcher) {
      //     return objectsFetcher.sendCats();
      //   },
      // }
    })
    .state('home', {
      url: '/home',
      template: '<h3>home</h3>'
    })
    .state('createProposal', {
      url: '/createProposal/{objectId}/{objectsUserId}',
      component: 'createProposal',
      resolve: {
        hisObjects:function($transition$, objectsFetcher){
          return objectsFetcher.getAllHisObjects($transition$.params());
        },
        myObjects: function(objectsFetcher){
          return objectsFetcher.getMyObjects()
        },
        objectsUser: function($transition$, usersFetcher){
          return usersFetcher.getUserOfObject($transition$.params().objectsUserId)
        },
        theProposals: function (proposalsFetcher) {
          return proposalsFetcher.getMyProposals();
        }
     
      }
    })
});