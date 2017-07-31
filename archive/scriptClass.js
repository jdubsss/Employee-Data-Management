// 1. Initialize Firebase

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
 var theMonthlyRate = "";
 var theMonthlyTotal = "";
 var theMonthsWorked = "";
//---------------------------------------------------------
 
// 2. Button for adding Employees
 $("#submit").on("click", function(){
 	event.preventDefault();
 	console.log("the button works");

 	//grabs user input
 	theName = $("#name").val().trim();
 	theRole = $("#role").val().trim(); 
	theStartDate = moment($("#start-input").val(), "DD/MM/YY").format("X");
	theMonthlyRate = $("#monthlyRate").val().trim();
	console.log(theName);

	//new local temp object to hold employee data
	var	newEmp = {
		name: theName,
		role: theRole,
		start: theStartDate,
		rate: theMonthlyRate
	}

	database.ref().push(newEmp);

	console.log(newEmp.name);
	console.log(newEmp.role);
	console.log(newEmp.start);
	console.log(newEmp.rate);

	alert("Emnployee data successfully added!");

	$("#name").val("");
	$("#role").val("");
	$("#startdate").val("");
	$("#monthlyRate").val("");
 });
 // 3. Create firebase event for adding employee data to data base
 		// create new row for each new employee data entered
	
	database.ref().on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());
/*	console.log(childSnapshot.val().monthlyRate);
	console.log(childSnapshot.val().name);
	console.log(childSnapshot.val().role);
	console.log(childSnapshot.val().startDate);*/
	
	//store everything into a variable
	var theName = childSnapshot.val().name;
	var theRole = childSnapshot.val().role;
	var theStartDate = childSnapshot.val().start;
	var theMonthlyRate = childSnapshot.val().rate;

	// Employee Info
	console.log(theName);
	console.log(theRole);
	console.log(theStartDate);
	console.log(theMonthlyRate);

	//update look  of the start date
	var empStartDate = moment.unix(theStartDate).format("MM/DD/YY");

	//calculate months worked using math
	//to calculate the months worked
	var empMonths = moment().diff(moment.unix(theStartDate, "X"), "months");
	console.log(empMonths);

	//calculte totral billed rate
	var empBilled = empMonths * theMonthlyRate;
	console.log(empBilled);

	//add each new employee data to the table

	$("#employee-table > tbody").append("<tr><td>" + theName + "</td><td>" + theRole + "</td><td>" +
		empStartDate + "</td><td>" + empMonths + "</td><td>" + theMonthlyRate + "</td><td>" + empBilled + "</td></tr>");

/*	$("#employee-table").append("<tr><td>" + theName + "</td><td>" + theRole + "</td><td>" + empStartDate + "</td><td>" + empMonths + "</td><td>" + theMonthlyRate + "</td><td>" + empBilled "</td></tr>");*/

	// $(".name1").html(childSnapshot.val().name);
	// $(".role1").html(childSnapshot.val().role);
	// $(".startDate1").html(childSnapshot.val().startDate);
	// $(".monthlyRate1").html(childSnapshot.val().mothlyRate);

// },function(errorObject){
// 	console.log("Errors Handeled: " + errorObject.code);
});































