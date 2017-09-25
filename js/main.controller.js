angular.module("TashleyApp").controller('mainController', function($location, $window, $firebaseObject){
    var vm = this;
    var ref = firebase.database().ref();
    this.nameTest = $firebaseObject(ref);
    //console.log(this.nameTest);
    vm.year = new Date().getFullYear();
});