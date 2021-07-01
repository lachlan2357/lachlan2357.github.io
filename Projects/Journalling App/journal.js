var summer = [12, 1, 2];
var autumn = [3, 4, 5];
var winter = [6, 7, 8];
var spring = [9, 10, 12];

var months = ["january", "feburary", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
var seasons = ["summer", "summer", "autumn", "autumn", "autumn", "winter", "winter", "winter", "spring", "spring", "spring", "summer"];

function setSplashScreen() {
	d = new Date();	

	date = d.getDate();
	month = months[d.getMonth()];
	seasonName = seasons[d.getMonth()];

	document.getElementById("splashscreen").style.background = "linear-gradient(to bottom right, var(--" + seasonName + "-one), var(--" + seasonName + "-two))";
	document.getElementById("date").innerHTML = String(date);
	document.getElementById("month").innerHTML = String(month);
}

function onLoad() {
	document.getElementById("splashscreen").style.opacity = "0";
}