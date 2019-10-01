

var takeninput = document.querySelector('#task');
var display = document.querySelector('tbody');


function add(inp,author){

	var row = '<tr><td> '+inp+' </td> <td><button class="delbtn">del</button></td></tr>'
	display.insertAdjacentHTML('beforeend',row);

}

document.querySelector('#submit').addEventListener('click',function(){
	var x = takeninput.value;

	add(x);
	takeninput.value =null;
	takeninput.focus();

})

document.addEventListener('click', function(e){
	if(e.target && e.target.className == 'delbtn'){
		e.target.parentNode.parentNode.remove();
	}
})

