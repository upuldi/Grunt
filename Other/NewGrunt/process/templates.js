angular.module('testAngularProject').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('directives/demoDirective.html',
    "<div ng-transclude=\"\"></div>"
  );


  $templateCache.put('index.html',
    "<!doctype html><html lang=\"en\" ng-app=\"testAngularProject\"><head><meta charset=\"utf-8\"><title>testAngularProject</title><script src=\"vendor.js\"></script><script src=\"app.js\"></script><link rel=\"stylesheet\" href=\"app.css\"></head><body><div>testAngularProject</div><div ng-controller=\"demoControllerRoot\"><ul><li ng-repeat=\"(key,val) in rows\">List item {{key}}</li></ul></div><div ng-view=\"\"></div></body></html>"
  );


  $templateCache.put('partials/demoPartial.html',
    "<div><demo-directive>testAngularProject demo directive</demo-directive></div>"
  );

}]);
