function testfunction() {
	var bodyHeight = document.getElementById("test").offsetHeight;
	var viewportHeight = window.innerHeight;

	var percent = viewportHeight / bodyHeight;

	document.getElementById("scrollbar").style.height = "calc(100vh * " + String(percent) + ")";

	var scrolledHeight = window.pageYOffset;

	var scrolledPercent = scrolledHeight / bodyHeight;

	document.getElementById("scrollbar").style.top = "calc(100vh * " + String(scrolledPercent) + ")";
}