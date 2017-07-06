const angular = require('angular');

// create our application
const app = angular.module('darkcaster-client', []); //setter syntax

app.controller('MainController', MainController);

MainController.$inject = ['$scope']; //magic for us

function MainController($scope){
  $scope.message = 'hello from angular';
}
