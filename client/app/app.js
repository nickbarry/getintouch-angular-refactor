angular.module('getintouch', [
  'getintouch.services'
])
.controller('ContactsController', function($scope, Contacts){
  $scope.contacts = Contacts.getContacts();

  $scope.markAsContacted = function(contact){
    Contacts.markAsNew(contact);
  };

  $scope.isOverdue = function(contact){
    var today = new moment().hours(0).minutes(0).seconds(0).milliseconds(0);
    return contact.contactNext.isSameOrBefore(today);
  };

  var newContactDefaults = {
    name: '',
    contactFrequency: '',
    lastContacted: ''
  };
  $scope.newContact = Object.assign({},newContactDefaults);
  $scope.adding = false;
  $scope.cancelNew = function(){
    $scope.adding = false;
    Object.assign($scope.newContact,newContactDefaults);
  };
  $scope.createNew = function(){
    Contacts.newContact($scope.newContact);
    $scope.newContact = Object.assign({}, newContactDefaults);
    $scope.adding = false;
  };

  $scope.stories = Contacts.getStories();
  //$scope.
  $scope.contactStoryMatcher = function(contact){
    return function(story){
      return !contact.storiesDone.includes(story.id);
    };
  };
  $scope.pasteStory = function(story){

  };
});
