alert("Connected");
var p = document.querySelector("div p")
var button = document.querySelector(".button");

p.addEventListener("click",function()
{
	p.classList.toggle("add");
})

button.addEventListener("click",function(){
	button.style.background="green;"
})