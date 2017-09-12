  var config = {
    apiKey: "AIzaSyDe27JaRxwKau9DdMBa0wLQXaD7ivPqOPs",
    authDomain: "positive-portfolio-factor.firebaseapp.com",
    databaseURL: "https://positive-portfolio-factor.firebaseio.com",
    projectId: "positive-portfolio-factor",
    storageBucket: "positive-portfolio-factor.appspot.com",
    messagingSenderId: "223064031382"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
   database.ref().on('child_added', function(childSnapshot) {

  var userName = childSnapshot.val().userName;
  var projectName = childSnapshot.val().projectName;
  var projectLink = childSnapshot.val().projectLink;

  console.log("firebase data is loading");

  $('#projectTable').append("<tr><td><a href='./project-details.html'>" + userName + "</td><td>"  + projectName + "</a></td><td>"
    + projectLink+ "</td></tr>");


// var urlTwo = "./project-details.html";
//  window.location = urlTwo;

});

///project-details
// "#projectDetails"
