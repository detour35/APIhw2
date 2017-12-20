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

var trainName =
var destination =
var firstTrain =
var frequency = 

  // get the input from the form

  $(".btn").on("click", function (event) {
    event.preventDefault();

console.log("Submit was clicked")

var trainName = $(".trainName").val().trim()
var destination = $(".destination").val().trim()
var firstTrain = $(".firstTrain").val().trim()
var frequency = $(".frequency").val().trim()




// console log data values for debugging
  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);



  // create the object newTrain and store the variable inside the object

  newTrain = {
    trainName: trainName,
    destination: destination,
    frequency: frequency,
    nextArrival: nextArrival,

  }









  // push the values to the database
  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency

  })


  // display the  children from the database to the html




  // sends user input in the forms to the database

  database.ref().on("child_added"), function (childSnapshot, prevChildKey) {

    console.log(childSnapshot.val().trainName);


  }





  }

})























