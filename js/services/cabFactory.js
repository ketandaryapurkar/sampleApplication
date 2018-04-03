/**
 * Created by 212612730 on 6/23/2017.
 */

CabApp.factory('cabFactory',['$http', '$q', '$rootScope','ENV','toaster','$rootScope',
    function ($http,$q,$rootScope,ENV,toaster) {
        var factory = {};

        factory.getCab = function(){
            return $q(function(resolve, reject) {
                $http.get(ENV.ApiEndpoint +'getCabSchedule').then(function (data) {
                    resolve(data);
                }, function (error) {
                    reject(error);
                })
            });

        };

        factory.login = function(loginData){
            return $q(function(resolve, reject) {
                var config = {
                    headers: {
                        'Content-Type' : 'application/json;charset=utf-8;',
                        'Access-Control-Allow-Origin': 'https://mtc-cabbooking.run.asv-pr.ice.predix.io/',
                        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'
                    }
                }
                $http.post(ENV.ApiEndpoint +'login', loginData).then(function (data) {
                    resolve(data);
                }, function (error) {
                    reject(error);
                })
            });
        };

        factory.putData = function (userdata) {
            return $q(function(resolve, reject) {

                var config = {
                    headers: {
                        'Content-Type' : 'application/json;charset=utf-8;',
                        'Access-Control-Allow-Origin': 'https://mtc-cabbooking.run.asv-pr.ice.predix.io/',
                        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'
                    }
                }
                $http.post(ENV.ApiEndpoint +'users',userdata).then(function (data) {
                    resolve(data);
                }, function (error) {
                    reject(error);
                })
            });
        }





        factory.getUser = function(sso) {
            return $q(function (resolve, reject) {
                $http.get(ENV.ApiEndpoint + 'getSingleUser/' + sso+"/workshop").then(function (data) {
                    resolve(data);
                }, function (error) {
                    reject(error);
                })
            });
        }


        factory.logout = function (sso) {
            return $q(function(resolve, reject) {
                $http.delete(ENV.ApiEndpoint +'logout/'+ sso).then(function (data) {
                    resolve(data);
                }, function (error) {
                    reject(error);
                })
            });
        }


        factory.verifyUser = function(sso,contact){
            return $q(function(resolve, reject) {
                $http.get(ENV.ApiEndpoint +'verifyUser/'+sso+'/'+contact).then(function (data) {
                    resolve(data);
                }, function (error) {
                    reject(error);
                })
            });
        }



        return factory;
    }]);


