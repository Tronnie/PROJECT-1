var config = {
    apiKey: "AIzaSyDe27JaRxwKau9DdMBa0wLQXaD7ivPqOPs",
    authDomain: "positive-portfolio-factor.firebaseapp.com",
    databaseURL: "https://positive-portfolio-factor.firebaseio.com",
    projectId: "positive-portfolio-factor",
    storageBucket: "positive-portfolio-factor.appspot.com",
    messagingSenderId: "223064031382"
  };
  firebase.initializeApp(config);


  var datebase = firebase.database();



  $("#addProjectBtn").on("click", function(event){

  event.preventDefault();
  // debugger;
  var userName = $("#NameInput").val().trim();
  var projectName = $("#ProjNameInput").val().trim();
  var projectLink = $("#githubInput").val().trim();
  console.log('work');

  var queryURL = "https://api.github.com/users/"+userName+ "/repos";
  console.log ("queryURL");

   function successCallback(response){
       var results = response;
       console.log("is this working?")

       console.log(queryURL);
       var avatar = response[0].owner.avatar_url;
       console.log(response[0].owner.avatar_url);



       datebase.ref().push({
         userName:userName,
         projectName:projectName,
         projectLink:projectLink,
         avatar:avatar,
       }) //<----.datebase closure

        //1.  switching pages:
        var url = './projectListPage.html';
        window.location = url;

           console.log("successCallback");
   }
     function errorCallback(){
      //  console.log("errorCallback");
      //  alert("check your spelling and capitalization");
     }

      $.ajax({
        url: queryURL,
        success:successCallback,
        error:errorCallback,
        method: "GET"
      })

     



    }); //<----.on ("click") closure





