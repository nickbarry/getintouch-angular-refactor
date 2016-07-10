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

  describe('$scope.dateCutoffMode', function () {
    it('should be initially be set to "today"', function () {
      expect($scope.dateCutoffMode).to.equal('today');
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
      const contact = {
        contactNext: moment(new Date()).subtract(2,'days')
      };
      expect($scope.isOverdue(contact)).to.be.true;

      contact.contactNext.add(4,'days');
      expect($scope.isOverdue(contact)).to.be.false;
    });
  });

  //describe('TEMPLATE_TEMPLATE_TEMPLATE', function(){
  //  it('TEMPLATE_TEMPLATE_TEMPLATE', function(){
  //    expect();
  //  })
  //});
});
