angular.module('getintouch', [
  'getintouch.services'
])
.controller('ContactsController', function($scope, Contacts){
  $scope.dateCutoff = {
    today: new moment().hours(0).minutes(0).seconds(0).milliseconds(0),
    week: new moment().hours(0).minutes(0).seconds(0).milliseconds(0).add(7,'days'),
    mode: 'today'
  };

  $scope.contacts = Contacts.getContacts();

  $scope.markAsContacted = function(contact){
    Contacts.markAsNew(contact);
  };

  $scope.isOverdue = function(contact){
    return contact.contactNext.isSameOrBefore( $scope.dateCutoff[$scope.dateCutoff.mode] );
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
  $scope.contactStoryMatcher = function(contact){
    return function(story){
      return !contact.storiesDone.includes(story.id);
    };
  };
  $scope.pasteStory = function(contact, story){
    var padding = contact.message ? '\n\n' : '';
    contact.message += padding + story.text;
    contact.storiesDone.push(story.id);
  };

  // Creating new stories

});
