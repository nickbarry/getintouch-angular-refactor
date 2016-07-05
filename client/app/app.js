//var moment = require('moment');

angular.module('getintouch', [])
.controller('ContactsController', function($scope){
  $scope.contacts = [
    {
      name: 'Elyse Green',
      lastContacted: new moment(),
      lastContactedLabel: new moment().format('MMM D, YYYY'),
      contactFrequency: 1,
      contactNext: new moment("2016-07-06")
    },
    {
      name: 'Chris Brenton',
      lastContacted: new moment("2016-06-30"),
      lastContactedLabel: new moment("2016-06-30").format('MMM D, YYYY'),
      contactFrequency: 14,
      contactNext: new moment("2016-07-13")
    },
    {
      name: 'Catrina Fuentes',
      lastContacted: new moment("2015-02-20"),
      lastContactedLabel: new moment("2015-02-20").format('MMM D, YYYY'),
      contactFrequency: 180,
      contactNext: new moment("2015-08-20")
    },
    {
      name: 'Nick Winter',
      lastContacted: new moment("2015-01-30"),
      lastContactedLabel: new moment("2015-01-30").format('MMM D, YYYY'),
      contactFrequency: 365,
      contactNext: new moment("2016-01-30")
    }
  ];

  $scope.markAsContacted = function(contact){
    contact.lastContacted = new moment().hours(0).minutes(0).seconds(0).milliseconds(0); // Record today's contact
    contact.lastContactedLabel = contact.lastContacted.format('MMM D, YYYY');
    contact.contactNext = moment(contact.lastContacted).add(contact.contactFrequency, 'days'); // update .contactNext property
  };

  $scope.isOverdue = function(contact){
    var today = new moment().hours(0).minutes(0).seconds(0).milliseconds(0);
    return contact.contactNext.isSameOrBefore(today);
  };
})