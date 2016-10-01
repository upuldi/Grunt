/**
 * @ngdoc directive
 * @name testAngularProject.directive:demoDirective
 * @element ELEMENT
 * @description Just a basic transclusion directive!
 * @example
 * <demo-directive>Hello World!</demo-directive>
 */
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