//your JS code here. If required.
let button1= document.getElementById("enterBtn");
let s = document.getElementById("status");

button1.addEventListener("click",handleClick);

function handleClick(e) {
	e.preventDefault();
	let h1 = document.createElement("h1");
	s.innerText=null;
	h1.innerText="Entered Metaverse";
	s.append(h1);
	
}