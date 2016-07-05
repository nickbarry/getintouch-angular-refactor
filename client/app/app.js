angular.module('getintouch', [])
.controller('RemindersController', function($scope){
  $scope.reminders = [
    {
      name: 'Elyse Green',
      lastContacted: 'today',
      contactFrequency: 1
    },
    {
      name: 'Chris Brenton',
      lastContacted: 'last week',
      contactFrequency: 14
    },
    {
      name: 'Rob Hines',
      lastContacted: 'February, 2016',
      contactFrequency: 180
    },
    {
      name: 'Nick Winter',
      lastContacted: 'October, 2015',
      contactFrequency: 365
    }
  ];
})