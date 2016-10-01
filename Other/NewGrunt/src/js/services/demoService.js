/**
 * @ngdoc service
 * @name testAngularProject.service:demoService
 * @description Just a demo service
 */
angular.module("testAngularProject")
    .factory('demoService',[
        function(){
            var publicMembers = {},
                privateMembers = {};
            publicMembers.hello = function(){
                return "world";
            };

            return publicMembers;
    }]);