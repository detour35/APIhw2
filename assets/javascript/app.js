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


// create a variable to reference the database
var database = firebase.database();

// creates variables for our data
var trainName;
var destination;
var firstTrain;
var frequency;

// Click function for the form

$(".btn").on("click", function (event) {
  event.preventDefault();

  console.log("Submit was clicked");
  var trainName = $(".trainName").val().trim();
  var destination = $(".destination").val().trim();
  var firstTrain = $(".firstTrain").val().trim();
  var frequency = $(".frequency").val().trim();

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
    firstTrain: firstTrain,

  }

  // push the user values to the database
  database.ref().push(newTrain);
  trainName: $("trainName").val("");
  destination: $("destination").val("");
  firstTrain: $("firstTrain").val("");
  frequency: $("frequency").val("");

})

// sends user input in the forms to the database

database.ref().on("child_added", function (childSnap) {
  // Appends new table data into the HTML
  var newRow = $("<tr>");
  newRow.append("<td>" + childSnap.val().trainName + "</td>");
  newRow.append("<td>" + childSnap.val().destination + "</td>");
  newRow.append("<td>" + childSnap.val().frequency + "</td>");
  newRow.append("<td>" + childSnap.val().nextArrival + "</td>");
  $("tbody").append(newRow);
})



























