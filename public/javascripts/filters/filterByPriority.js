(function () {
    angular.module('todo')
        .filter('filterByPriority', function () {
            return function (data) {
                return data.sort(function (a, b) {
                    if (a.priority > b.priority) return -1;
                    return 1;
                })
                
            }
        })

}())