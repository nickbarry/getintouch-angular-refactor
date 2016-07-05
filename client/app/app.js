angular.module('getintouch', [])
.controller('RemindersController', function($scope){
  $scope.reminders = [
    {
      name: 'Elyse Green',
      lastContacted: new Date(),
      contactFrequency: 1
    },
    {
      name: 'Chris Brenton',
      lastContacted: new Date("2016-06-30"),
      contactFrequency: 14
    },
    {
      name: 'Rob Hines',
      lastContacted: new Date("2016-02-20"),
      contactFrequency: 180
    },
    {
      name: 'Nick Winter',
      lastContacted: new Date("2015-10-30"),
      contactFrequency: 365
    }
  ];
})