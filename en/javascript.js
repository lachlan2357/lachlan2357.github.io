function OnScroll() {
	var bodyHeight = document.getElementById("test").offsetHeight;
	var viewportHeight = window.innerHeight;

	var percent = viewportHeight / bodyHeight;

	document.getElementById("scrollbar").style.height = "calc((100vh - 40px) * " + String(percent) + ")";

	var scrolledHeight = window.pageYOffset;

	var scrolledPercent = scrolledHeight / bodyHeight;

	console.log(String(scrolledPercent));

	document.getElementById("scrollbar").style.top = "calc(((100vh) * " + String(scrolledPercent) + ") + 10px)";
	document.getElementById("scrollbar").style.opacity = "1";
}

function ScrollToTop() {
	window.scrollTo({top: 0, behavior: 'smooth'});
}