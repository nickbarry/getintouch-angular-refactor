'use strict';

describe('MainController', function(){
  beforeEach(module('getintouch'));

  let $controller, $scope, controller;
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;

    $scope = {};
    controller = $controller('MainController', { $scope: $scope });
  }));

  describe('$scope.dateCutoff', function () {
    it('dateCutoff is a property on the $scope', function () {
      console.log('inside dateCutoff test');
      expect($scope.dateCutoff).to.be.an('object');
    });
  });

  describe('$scope.markAsContacted', function(){
    it('should have a markAsContacted method on the $scope', function () {
      expect($scope.markAsContacted).to.be.a('function');
    });
  });
});
