  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPOh-Xr-0WvfaZ4IHnipakvjO0mPQOWB8",
    authDomain: "hw-with-firebase.firebaseapp.com",
    databaseURL: "https://hw-with-firebase.firebaseio.com",
    projectId: "hw-with-firebase",
    storageBucket: "",
    messagingSenderId: "309537837335"
  };
  firebase.initializeApp(config);

var database = firebase.database();

$(".btn").on("click", function(){

// get the input from the form

var trainName= $(".trainName").val()
var destination= $(".destination").val()
var firstTrain= $(".firstTrain").val()
var frequency= $(".frequency").val()

console.log(trainName);
console.log(destination);
console.log(firstTrain);
console.log(frequency);


// push the values to the database
database.ref().push({
trainName: trainName,
destination: destination,
firstTrain: firstTrain,
frequency: frequency

})


// display the children from the database to the html



})























