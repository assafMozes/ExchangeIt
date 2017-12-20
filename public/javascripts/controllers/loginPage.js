angular.module('ts')
    .controller('loginPage', function controller($scope, $location, $rootScope, usersFetcher) {
        $scope.alert = '';
        $scope.sendLogin = function () {
            usersFetcher.checkLogin($scope.email, $scope.password, function  (user) {
                if (user) {
                    $location.path('/home')
                }
                else {
                    $scope.email = '';
                    $scope.password = '';
                    $scope.alert = 'wrong password. please try again';
                    //     setTimeout(function() {
                    //     $scope.alert = 'wrong password. please try again';

                    //     }, 500);
                    // }
                }
            })
        }
    })