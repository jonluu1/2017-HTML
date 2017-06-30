function functionReset(){
	document.getElementById("calulatorForm").reset();
	document.getElementById("answer").innerHTML = "=";
}
function functionAdvReset(){
	document.getElementById("advanceCalulatorForm").reset();
	document.getElementById("advAnswer").innerHTML = "=";
}
function calulate(){
	var form = document.getElementById("calulatorForm");
	var firstNumber = parseInt(form.elements[0].value);
	var operator = form.elements[1].value;
	var secondNumber = parseInt(form.elements[2].value);
	var answer = 0;
	
	if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
		if (operator == "add"){
			answer = firstNumber + secondNumber;
		} else if (operator === "sub"){
			answer = firstNumber - secondNumber;
		} else if (operator === "mul"){
			answer = firstNumber * secondNumber;
		} else if (operator === "div"){
			answer = firstNumber / secondNumber;
		} else if (operator === "exp"){
			answer = Math.pow(firstNumber, secondNumber);
		}
	} else {
		answer = "Enter Numbers Only Please...";
	}
	document.getElementById("simpleAnswer").innerHTML = answer;
}

function showHide(ID){
	if (document.getElementById){
	var showDiv = document.getElementById(ID);
	var hideDiv = document.getElementsByClassName("calulator");
	for (var i = 0; i < hideDiv.length; i++){
		hideDiv[i].style.display = "none";
	}
	showDiv.style.display = "block";
	}
	return false;
}