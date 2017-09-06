angular.module("TashleyApp").controller('mainController', function($location, $window){
    var vm = this;
    vm.year = new Date().getFullYear();
});