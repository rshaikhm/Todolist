var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("listitem");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
// add button on new line <br>
	li.appendChild(document.createElement("br"));
	//create a done button 
	var donebutton =document.createElement("button");
	donebutton.appendChild(document.createTextNode("Done!"));
	li.appendChild(donebutton);
	donebutton.onclick=underlineParent;
	
	//create a delete button
	var deletebutton =document.createElement("button"); 
	deletebutton.appendChild(document.createTextNode("Delete!"));
	li.appendChild(deletebutton);
	deletebutton.onclick=removeParent;

}
// on click go to donebutton's parent element and toggle 
function underlineParent(event){
event.target.parentNode.classList.toggle("done");
}

//  on click go to deletebutton's parent element and toggle 
function removeParent(event){
event.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);