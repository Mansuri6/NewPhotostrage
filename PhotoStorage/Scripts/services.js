
(function () {
    angular.module("PG")
        .factory("UserAuthorizationFactory", ["$http", "$q", "$window", UserAuthorizationFactory]);

    function UserAuthorizationFactory($http, $q, $window) {
        var StorageData = {};
        var url = "http://photostorageam-001-site1.gtempurl.com/";
        var c = {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        };

        StorageData.geturl = function () {
            return url;
        }

        return StorageData;
    }
})();
