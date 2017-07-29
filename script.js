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
 var theMonthlyTotal = "";
 var theMonthsWorked = "";
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
database.ref().on("child_added", function(childSnapshot){

	console.log(childSnapshot.val());
	console.log(childSnapshot.val().monthlyRate);
	console.log(childSnapshot.val().name);
	console.log(childSnapshot.val().role);
	console.log(childSnapshot.val().startDate);
	


	$(".name1").html(childSnapshot.val().name);
	$(".role1").html(childSnapshot.val().role);
	$(".startDate1").html(childSnapshot.val().startDate);
	$(".monthlyRate1").html(childSnapshot.val().mothlyRate);

},function(errorObject){
	console.log("Errors Handeled: " + errorObject.code);
});