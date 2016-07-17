angular.module('getintouch.inbox', [])
  .controller('InboxController', function($scope, Contacts, Stories){
    $scope.dateCutoffMode = 'today';
    const dateCutoffs = {
      today: new moment().hours(0).minutes(0).seconds(0).milliseconds(0),
      week: new moment().hours(0).minutes(0).seconds(0).milliseconds(0).add(7,'days')
    };

    $scope.contacts = Contacts.getContacts();

    $scope.markAsContacted = function(contact){
      Contacts.markAsContacted(contact);
    };

    $scope.isOverdue = function(contact){
      return contact.contactNext.isSameOrBefore( dateCutoffs[$scope.dateCutoffMode] );
    };

    const newContactDefaults = {
      name: '',
      contactFrequency: '',
      lastContacted: ''
    };
    $scope.newContact = Object.assign({},newContactDefaults);

    $scope.addingContact = false;
    $scope.cancelNewContact = function(){
      $scope.addingContact = false;
      Object.assign($scope.newContact,newContactDefaults);
    };
    $scope.createNewContact = function(){
      if($scope.newContact.name !== ''){
        Contacts.newContact(Object.assign({},$scope.newContact));
      }

      $scope.cancelNewContact();
    };

    // Stories ------------------
    $scope.stories = [];
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