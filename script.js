//task1
function t1AonchorClick(){
		alert("Anchor CLicked");
	};
//task2
function t2ButtonClick(){
		alert("Button CLicked!");
	};
//task3
function t3GreetMe(){
	var username = prompt("Enter your name");
	alert("Hello, " + username);
};
//task4
function t4GreetMe(){
	var username = prompt("Enter your name");
	var usernameLength = username.length;
	alert("Hello, " + username+"\nUser Input Length Is: " + usernameLength);
};
//task5
function t5(){
	alert("Thanks For Purchasing A Phone From Us.");
}
//task6a
function mouseIn(){
	var image = document.getElementById("thomas");
	if (image.src.match("thomasEdison")){
		image.src = "_images_/bulb.jpg";
	}
	else{
		image.src = "_images_/thomasEdison.jpg";
	}
};
//task6b
function hoverIn(phone){
	// phone.style.height = "600px" 
	phone.className ="mobiles";
	// phone.style.height = "500px"
	// phone.style.width = "400px"
};
function hoverOut(phone){
	// phone.className ="border"
	// phone.style.height = "300px"
	// phone.style.width = "275px"
	phone.className ="border";
};
//task7
var p = document.getElementById("addcontent");
function expand(){
	document.getElementById("hide").style.display = "none"
	var content = "Slow lorises are a group of several" +
                "species of trepsirrhine primates which make up the genus " +
                "Nycticebus. They have a round head, narrow snout, large eyes, " +
                "and a variety of distinctive coloration patterns that are species-dependent. " +
                "The hands and feet of slow lorises have several adaptations that give them " +
                "a pincer-like grip and enable them to grasp branches for long periods of time." +
                " Slow lorises have a toxic bite, a rare trait among mammals.";
                p.innerHTML += content;
}
//task8
var courses = ["MCC - Module A", "MCC - Module B"];
var coursesList = document.getElementById("dropdown");
for (var i = 0; i < courses.length; i++) {
	coursesList.innerHTML += '<option>'+courses[i]+'</option>'
};
var inputs = document.getElementsByClassName("inputField");
var addStudentForm = document.getElementById("addStudent");
var index = 0;
var rowi = 2;
addStudentForm.onsubmit =function(){
	var flag = 0;
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].value === "") {
			flag++;
		}
	}
	if (flag > 0) {
			alert("Please Fill All Information");
		}else{
			var nameOfStudent = document.getElementById("studentName").value;
			var rollNumbers = document.getElementById("rollNumber").value
			var emailadd = document.getElementById("email").value;
			var cou = document.getElementById("dropdown").value;
			var tbody = document.getElementById("tbody");
			var newRow = '<tr>'+
			'<td>'+nameOfStudent+'</td>'+
			'<td>'+rollNumbers+'</td>'+
			'<td>'+emailadd+'</td>'+
			'<td>'+cou+'</td>'+
			'</tr>';
			tbody.innerHTML += newRow;
			for (var i = 0; i < inputs.length; i++) {
				inputs[i].value = "";
			}
		}
		index++;
}