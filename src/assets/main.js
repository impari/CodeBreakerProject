var answer = document.getElementById('answer');
var attempt = document.getElementById('attempt');

function guess() {
    var input = document.getElementById('user-guess');
    //add functionality to guess function here
    debugger
    if(answer.value == '' || attempt.value == ''){
    	setHiddenFields();
    }
    if(input.value){
    	validateInput(input.value);
    	attempt.value ++;
    }
}

//implement new functions here

function setHiddenFields(){
	answer.value = Math.floor(Math.random() * 100).toString();
	while(answer.value.length<4){
		answer.value = "0"+ answer.value;
	}
    attempt.value = "0";
}

function setMessage(message){
	document.getElementById('message').innerHTML = message;
}


function validateInput(validate){
	if(validate.length == 4){
		return true;
	} else {
		setMessage("Guesses must be exactly 4 characters long");
		return false;
	}
}