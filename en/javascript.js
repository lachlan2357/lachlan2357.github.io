var darkmode = false;

function OnScroll() {
	/* scrollbar */
	var bodyHeight = document.getElementById("test").offsetHeight;
	var viewportHeight = window.innerHeight;

	var percent = viewportHeight / bodyHeight;

	document.getElementById("scrollbar").style.height = "calc((100vh - 40px) * " + String(percent) + ")";

	var scrolledHeight = window.pageYOffset;

	var scrolledPercent = scrolledHeight / bodyHeight;

	console.log(String(scrolledPercent));

	document.getElementById("scrollbar").style.top = "calc(((100vh) * " + String(scrolledPercent) + ") + 10px)";
	document.getElementById("scrollbar").style.opacity = "1";

	/* hero border-radius */

	if (scrolledHeight == 0) {
		document.getElementById("hero").style.borderRadius = "0px";
	} else {
		document.getElementById("hero").style.borderRadius = "0px 0px 10px 10px";
	}
}

function ScrollToTop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}

function DarkLightMode() {
	if (darkmode) {
		document.documentElement.style.setProperty("--background", "#DDDDDD")
		document.documentElement.style.setProperty("--foreground", "#EEEEEE")
		document.documentElement.style.setProperty("--boxShadow", "#000000")
	
		darkmode = false;
	} else {
		document.documentElement.style.setProperty("--background", "#222222")
		document.documentElement.style.setProperty("--foreground", "#111111")
		document.documentElement.style.setProperty("--boxShadow", "#FFFFFF")

		darkmode = true;
	}
}