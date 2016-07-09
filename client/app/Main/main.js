angular.module('getintouch.main', [])
  .controller('MainController', function($scope, Contacts, Stories){
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
    $scope.cancelNewContact = function(){
      $scope.adding = false;
      Object.assign($scope.newContact,newContactDefaults);
    };
    $scope.createNewContact = function(){
      Contacts.newContact($scope.newContact);
      $scope.cancelNewContact();
    };

    // Stories ------------------
    $scope.stories = Stories.getStories();

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


/*
 function myCtrl($scope) {

 $scope.showSelectedText = function() {
 $scope.selectedText =  $scope.getSelectionText();
 };

 $scope.getSelectionText = function() {
 var text = "";
 if (window.getSelection) {
 text = window.getSelection().toString();
 } else if (document.selection && document.selection.type != "Control") {
 text = document.selection.createRange().text;
 }
 return text;
 };
 }
 </script>
 <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
 </body>
 </html>

 */