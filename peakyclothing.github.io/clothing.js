

///////////////HAMBURGER MENU/////////////////

const navMenu = document.querySelector('.nav-menu')
const burger = document.querySelector('.hamburger')


burger.addEventListener("click", () => {
				navMenu.classList.toggle("active");
				burger.classList.toggle("active");
})


document.querySelectorAll(".nav-items").forEach(n => n.addEventListener("click", () => {
				navMenu.classList.remove("active");
				burger.classList.remove("active");
}))



////////////////Change Bgcolor Menu///////////




function changeBg(){

var container = document.getElementById("container");


var scrollValue = window.scrollY;

if(scrollValue < 500) {
				container.classList.remove("bgcolor")
			 
}
else {
				container.classList.add("bgcolor")
				
}
}

 window.addEventListener( 'scroll', changeBg);


