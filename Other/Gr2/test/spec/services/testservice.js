'use strict';

describe('Service: testService', function () {

  // load the service's module
  beforeEach(module('gr2App'));

  // instantiate service
  var testService;
  beforeEach(inject(function (_testService_) {
    testService = _testService_;
  }));

  it('should do something', function () {
    expect(!!testService).toBe(true);
  });

});
