var config = {
    apiKey: "AIzaSyC9BdhtymAv2f8nSwWD7Ex6-oRfxVZQiVg",
    authDomain: "employe-data-managmet.firebaseapp.com",
    databaseURL: "https://employe-data-managmet.firebaseio.com",
    projectId: "employe-data-managmet",
    storageBucket: "",
    messagingSenderId: "912645595720"
  };
  firebase.initializeApp(config);
 var database =firebase.database();

 var theName = ""; 
 var theRole = "";
 var theStartDate = "";
 var theMothlyRate = "";
//---------------------------------------------------------
 $("#submit").on("click", function(){
 	event.preventDefault();
 	console.log("the button works");
 	theName = $("#name").val().trim();
 	theRole = $("#role").val().trim(); 
	theStartDate = $("#startDate").val().trim();
	theMothlyRate = $("#monthlyRate").val().trim();
	console.log(theName);

	database.ref().push({
		name: theName
		,role: theRole
		,startDate: theStartDate
		,monthlyRate: theMothlyRate  
	});
 });
 //---------------------------------------------------------
database.ref().on("value", function(snapshot){

	console.log(snapshot.val());
	console.log(snapshot.val().name);
	console.log(snapshot.val().role);
	console.log(snapshot.val().startDate);
	console.log(snapshot.val().monthlyRate);


	/*$(".name1").append(snapshot.val().name);
	$(".role1").append(snapshot.val().role);
	$(".startDate1").append(snapshot.val().startDate);
	$(".monthlyRate1").append(snapshot.val().mothlyRate);*/

},function(errorObject){
	console.log("Errors Handeled: " + errorObject.code);
});