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
    it('should be an object on the $scope with properties today, week, and mode', function () {
      expect($scope.dateCutoff).to.be.an('object');
      expect($scope.dateCutoff.today).not.to.be.an('undefined');
      expect($scope.dateCutoff.week).not.to.be.an('undefined');
      expect($scope.dateCutoff.mode).not.to.be.an('undefined');
    });
  });

  describe('$scope.contacts', function() {
    it('should be an array', function(){
      expect($scope.contacts).to.be.an('array');
    })
  });

  describe('$scope.markAsContacted', function(){
    it('should have a markAsContacted method on the $scope', function () {
      expect($scope.markAsContacted).to.be.a('function');
    });
  });

  describe('$scope.isOverdue', function(){
    it('should be a function', function(){
      expect($scope.isOverdue).to.be.a('function');
    });

    it('should return a boolean representing whether the provided contact is overdue for contact', function(){
      const overdueContact = {
        contactNext: moment(new Date()).subtract(2,'days')
      };
      const notOverdueContact = {
        contactNext: moment(new Date()).add(2,'days')
      };

      expect($scope.isOverdue(overdueContact)).to.be.true;
      expect($scope.isOverdue(notOverdueContact)).to.be.false;
    });
  });

  //describe('TEMPLATE_TEMPLATE_TEMPLATE', function(){
  //  it('TEMPLATE_TEMPLATE_TEMPLATE', function(){
  //
  //  })
  //});
});
