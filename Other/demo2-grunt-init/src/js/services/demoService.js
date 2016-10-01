/**
 * @ngdoc service
 * @name test.service:demoService
 * @description Just a demo service
 */
angular.module("test")
    .factory('demoService',[
        function(){
            var publicMembers = {},
                privateMembers = {};
            publicMembers.hello = function(){
                return "world";
            };

            return publicMembers;
    }]);