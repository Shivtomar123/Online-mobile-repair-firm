alert("connected");
var h1= document.querySelector("h1")
var input = document.querySelectorAll(".About")
var text = document.querySelector("textarea")
var submit1 = document.querySelector(".submit1")
var submit2 = document.querySelector(".submit2")
var page = document.querySelector(".page2")
var link = document.querySelectorAll("a");
var h3= document.querySelector("h3")


h1.addEventListener("click",function()
{
	h1.style.color="red";
});

text.addEventListener("click",function()
{
	text.style.background="white";
})

h3.addEventListener("click",function()
{
	h3.classList.toggle("orange");
});





