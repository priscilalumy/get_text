let vInputText = "";

//get text from id="input_text"
document.getElementById('bt_submit').addEventListener('click', (e) => {
	vInputText = document.getElementById('input_text').value;
	showInput();
})

//list items user inputs
function showInput(){
	document.getElementById("list_text").innerHTML = '<p>'+'Your wrote: '+vInputText+'</p>'
}