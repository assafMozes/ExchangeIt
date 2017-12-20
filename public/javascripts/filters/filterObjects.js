angular.module('ts')
    .filter('choosenObjects', function () {
        return function (objects) {
            var choosenObjects = [];
            for(var object of objects){
                if (object.choosen){
                    choosenObjects.push(object)
                }
            }
            console.log(choosenObjects.length)
            return choosenObjects;
        }
    })
    // .filter('filterPositions', function () {
    //     return function (positions, locations, location) {
    //         function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    //             var R = 6371; // Radius of the earth in km
    //             var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    //             var dLon = deg2rad(lon2 - lon1);
    //             var a =
    //                 Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //                 Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    //                 Math.sin(dLon / 2) * Math.sin(dLon / 2)
    //                 ;
    //             var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //             var d = R * c; // Distance in km
    //             return d;
    //         }
    //         function deg2rad(deg) {
    //             return deg * (Math.PI / 180)
    //         }
    //         var name;
    //         var currentLocations = [];
    //         var currentPositions = [];
    //         for (var i of locations) {
    //             name = i.city.toLowerCase()
    //             if (name.includes(location)) {
    //                 currentLocations.push(i)
    //             }
    //         }
    //         console.log(currentLocations.length)
    //         console.log(positions.length)

    //         for (var k = 0; k < positions.length; k++) {
    //             for (var j of currentLocations) {
    //                 if (getDistanceFromLatLonInKm(j.lat, j.lng, positions[k].lat, positions[k].lng) < 5) {
    //                     currentPositions.push(positions[k])
    //                     break;
    //                 }
    //             //     else
    //             //         console.log(getDistanceFromLatLonInKm(j.lat, j.lng, positions[k].lat, positions[k].lng))
    //             }
    //         }
    //         console.log(currentPositions.length)
    //         return currentPositions;
    //     }
    // })

