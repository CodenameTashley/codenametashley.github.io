var mainApp = angular.module("TashleyApp", ['ui.router', 'firebase']);

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCUk7AcNP8SecGxE-kugJpKN5VvIwMJjqE",
    authDomain: "codenametashley-a2b9a.firebaseapp.com",
    databaseURL: "https://codenametashley-a2b9a.firebaseio.com",
    projectId: "codenametashley-a2b9a",
    storageBucket: "codenametashley-a2b9a.appspot.com",
    messagingSenderId: "762388539776"
  };
  firebase.initializeApp(config);