/*! testAngularProject - v0.1.1 - 14/07/2016 */angular.module("testAngularProject",[]);
angular.module("testAngularProject")
    .config([
                '$routeProvider',
        function($routeProvider){
            $routeProvider
                .when("/",{
                    templateUrl:"partials/demoPartial.html",
                    controller:"demoController"
                })
                .otherwise({
                    redirectTo:"/"
                });
    }]);
angular.module("testAngularProject")
    .controller('demoController',[
                '$scope',
        function($scope){
            var publicMembers = $scope,
                privateMembers = {};


            publicMembers.hello = function(){
                return 'world';
            };

            return publicMembers;
    }]);
angular.module("testAngularProject")
    .controller('demoControllerRoot',[
        '$scope',
        function($scope){
            var publicMembers = $scope,
                privateMembers = {};


            publicMembers.rows = 10;

            return publicMembers;
        }]);
angular.module("testAngularProject")
    .directive('demoDirective',[
        function(){
            var definition = {};

            definition.restrict = "E";
            definition.transclude = true;
            definition.templateUrl = "directives/demoDirective.html";
            definition.link = function(scope,element,attr){};

            return definition;
    }]);
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