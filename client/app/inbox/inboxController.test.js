'use strict';

describe('MainController', function(){
  beforeEach(module('getintouch'));

  let $controller, $scope, controller;
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;

    $scope = {};
    controller = $controller('InboxController', { $scope: $scope });
  }));

  describe('$scope.dateCutoffMode', function () {
    it('should be initially be set to "today"', function () {
      expect($scope.dateCutoffMode).to.equal('today');
    });
  });

  describe('$scope.contacts', function() {
    it('should be an array', function(){
      expect($scope.contacts).to.be.an('array');
    });
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

  describe('$scope.newContact', function(){
    it('should be an object with empty strings for its properties', function(){
      for(let key in $scope.newContact){
        if ($scope.newContact.hasOwnProperty(key)) {
          expect($scope.newContact[key]).to.equal('');
        }
      }
    });
  });

  describe('$scope.addingContact', function () {
    it('should be a boolean that is initially set to false', function () {
      expect($scope.addingContact).to.be.false;
    });
  });

  describe('$scope.cancelNewContact', function(){
    it('should set $scope.addingContact to false', function(){
      $scope.cancelNewContact();
      expect($scope.addingContact).to.be.false;
    });

    it('should reset $scope.newContact\'s properties to emtpy strings', function() {
      $scope.newContact.name = 'Harry James Potter-Evans-Verres';
      $scope.newContact.contactFrequency = '7';
      $scope.newContact.lastContacted = '7/16/16';

      $scope.cancelNewContact();

      for(let key in $scope.newContact){
        if ($scope.newContact.hasOwnProperty(key)) {
          expect($scope.newContact[key]).to.equal('');
        }
      }
    });
  });

  describe('$scope.createNewContact', function(){
    it('should add one new contact to $scope.contacts', function(){
      const oldContactsCount = $scope.contacts.length;
      $scope.newContact = { name: 'Testy McTestorson' };
      $scope.createNewContact();
      expect($scope.contacts.length).to.equal(oldContactsCount + 1);
    });

    it('should set all the properties on $scope.newContact back to empty strings after adding the new contact', function(){
      for(let key in $scope.newContact){
        if ($scope.newContact.hasOwnProperty(key)) {
          expect($scope.newContact[key]).to.equal('');
        }
      }
    });
  });

  describe('$scope.cancelNewContact', function(){
    it('should not add any new contacts to $scope.contacts', function(){
      const oldContactsCount = $scope.contacts.length;
      $scope.newContact = { name: 'Testy McTestorson' };
      $scope.cancelNewContact();
      expect($scope.contacts.length).to.equal(oldContactsCount);
    });

    it('should set all the properties on $scope.newContact back to empty strings', function(){
      for(let key in $scope.newContact){
        if ($scope.newContact.hasOwnProperty(key)) {
          expect($scope.newContact[key]).to.equal('');
        }
      }
    });
  });

  describe('$scope.stories', function(){
    it('should be an array', function(){
      expect($scope.stories).to.be.an('array');
    });
  });

  describe('$scope.contactStoryMatcher', function(){
    it('should be a function that returns a function', function(){
      expect($scope.contactStoryMatcher()).to.be.a('function');
    });

    it('should return a function that reports whether a contact hasn\'t already heard a story', function() {
      const story1 = { id: 798 };
      const story2 = { id: 79778 };
      const contact = { storiesDone: [798] };

      expect($scope.contactStoryMatcher(contact)(story1)).to.be.false;
      expect($scope.contactStoryMatcher(contact)(story2)).to.be.true;
    });
  });

  describe('$scope.pasteStory', function(){
    it('should append the story text to the contact message property', function(){
      const story = {
        text: 'I know it is impossible, but what if I succeed?',
        id: 1234
      };
      const contact = {
        message: 'As Nasreddin Hodja says,',
        storiesDone: []
      };

      $scope.pasteStory(contact, story);

      expect(contact.message).to.equal('As Nasreddin Hodja says,\n\nI know it is impossible, but what if I succeed?');
    });

    it('should add the story id to the contact\'s storiesDone array', function() {
      const story = {
        text: 'I know it is impossible, but what if I succeed?',
        id: 1234
      };
      const contact = {
        message: 'As Nasreddin Hodja says,',
        storiesDone: []
      };

      $scope.pasteStory(contact, story);

      expect(contact.storiesDone).to.deep.equal([1234]);
    });
  });

  //describe('TEMPLATE_TEMPLATE_TEMPLATE', function(){
  //  it('TEMPLATE_TEMPLATE_TEMPLATE', function(){
  //    expect();
  //  });
  //});
});
