angular.module("TashleyApp").controller("postCtrl", function(postFactory) {
    vm = this;

    vm.test = postFactory.test();
});