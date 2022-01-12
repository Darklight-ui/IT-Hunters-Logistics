/** @format */

var isOpen = false;
function openNav() {
	if (!isOpen) {
		document.getElementById("ul").style.top = "0";
		isOpen = true;
		console.log(isOpen);
	} else {
		document.getElementById("ul").style.top = "-1000%";
		isOpen = false;
		console.log(isOpen);
	}
}

// Move to top

window.addEventListener("scroll", (e) => {
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 20) {
		document.getElementById("btn").style.display = "block";
		console.log("working");
	} else {
		document.getElementById("btn").style.display = "none";
		console.log("not working");
	}
});

document.getElementById("btn").addEventListener("click", (e) => {
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
	document.getElementById("btn").style.transition = "all ease-in-out 1s";
});

// sticky top
const navbar = document.querySelector(".top");
let sticky = navbar.offsetTop;
const navbarScroll = () => {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
		navbar.style.backgroundColor = "black";
	}
};

window.onscroll = navbarScroll;

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
		this.classList.toggle("active");

		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
	});
}
