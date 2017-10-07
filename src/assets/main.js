var answer = document.getElementById('answer');
var attempt = document.getElementById('attempt');

function guess() {
    var input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here

function setHiddenFields(){
	var random = Math.random();
	answer = Math.floor(random * 9999);
}