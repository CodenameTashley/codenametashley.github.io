angular.module("TashleyApp").factory("postFactory", function($http) {
    
    return {
        test:test
    }

    function test() {
        loadPosts();
        return 2;
    }

    function loadPosts() {
        var reqURL = "https://api.github.com/repos/CodenameTashley/codenametashley.github.io/contents/module/post?ref=master";
        $http.get(reqURL).then(function (response) {
            _.forEach(response.data, function (item) {
                console.log(item.name);
            })
        });
    }

});