/**
 * Created by massimomoro on 05/06/17.
 */



// Initialize Firebase
var config = {
    apiKey: "AIzaSyAYaY7wpPSsfbSgH9__0jWLTwN7YTWgjuI",
    authDomain: "cmv-gioco.firebaseapp.com",
    databaseURL: "https://cmv-gioco.firebaseio.com",
    projectId: "cmv-gioco",
    storageBucket: "cmv-gioco.appspot.com",
    messagingSenderId: "250228474323"
};
var database = firebase.initializeApp(config);
var fff = firebase.database().ref();
fff.child("Text").set("Savedd");

