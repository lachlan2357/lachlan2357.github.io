const pastProjects = {
	"amsi": ["gradient-amsi-three", "fas fa-film", "AMSI ChooseMATHS Competition", "Throughout 2017, 2018 and 2019, myself and a group of friends competed in the AMSI ChooseMATHS Competition. While not doing very well early on, our final video submission in 2019 was selected as one of the Top 10 nationally.", `
	<div class="container container-large" style="display: flex; justify-contents: space-evenly; width: 100%;">
		<div class="card column col-4">
			<div class="header gradient-amsi-three">
				<h3 style="text-align:center;">2019 Entry</h3>
			</div>
			<div class="footer">
				<iframe width="100%" height="250px" src="https://www.youtube-nocookie.com/embed/3dNwNzrJ9mU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
		<div class="card column col-4">
			<div class="header gradient-amsi-two">
				<h3 style="text-align:center;">2018 Entry</h3>
			</div>
			<div class="footer">
				<iframe width="100%" height="250px" src="https://www.youtube-nocookie.com/embed/-YjJ8DulxRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
		<div class="card column col-4">
			<div class="header gradient-amsi-one">
				<h3 style="text-align:center;">2017 Entry</h3>
			</div>
			<div class="footer">
				<iframe width="100%" height="250px" src="https://www.youtube-nocookie.com/embed/LrK_LoJCrno" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</div>
	</div>`],
	"f1": ["gradient-f1", "fa fa-car", "F1 in Schools", "Myself and four friends competed in the 2020 F1 in Schools competition, reaching third place at the State Competition. I was the graphic designer for our team, creating a team brand and website.", `
	<div class="container container-large" style="display: flex; justify-contents: space-evenly; width: 100%;">
		<div class="card" style="width: 100%;">
			<div class="header gradient-f1">
				<h3 style="text-align:center;">Website</h3>
			</div>
			<div class="footer">
				<iframe width="100%" height="500px" src="https://vitesseracing1.wixsite.com/website" title="Vitesse Racing Website"></iframe>
			</div>
		</div>
	</div>`],
	"site": ["gradient-small-blue", "fas fa-code", "This very Website", "As a Quarentine Project spanning 2021, I set out to design and code a personal website, employing my skills in HTML, CSS and Javscript. This code behind the website was constructed with code writted purely by me, with the source avaliable via my Github Page.", `
	<div class="container container-large" style="display: flex; justify-contents: space-evenly; width: 100%;">
		<div class="card column col-4">
			<div class="header gradient-small">
				<h3 style="text-align:center;">CSS</h3>
			</div>
			<div class="footer">
				<iframe height="250px" style="background: white;" src="https://lachlan2357.github.io/style.css" title="CSS"></iframe>
			</div>
		</div>
		<div class="card column col-4">
			<div class="header gradient-small-purple">
				<h3 style="text-align:center;">Javscript</h3>
			</div>
			<div class="footer">
				<iframe height="250px" style="background: white;" src="https://lachlan2357.github.io/javascript.js" title="Javascript"></iframe>
			</div>
		</div>
	</div>`]
}

function OnLoad() {
	UpdateCSS();
	

	var cover = document.getElementById("cover");
	cover.style.opacity = "0";
	setTimeout(() => {  cover.remove(); }, 3000);
}

function UpdateCSS() {
	/* scrollbar */
	var bodyHeight = document.getElementById("test").offsetHeight;
	var viewportHeight = window.innerHeight;
	var percent = viewportHeight / bodyHeight;

	document.getElementById("scrollbar").style.height = "calc((100vh - 40px) * " + String(percent) + ")";

	var scrolledHeight = window.pageYOffset;
	var scrolledPercent = scrolledHeight / bodyHeight;

	document.getElementById("scrollbar").style.top = "calc(((100vh - 40px) * " + String(scrolledPercent) + ") + 20px)";
	document.getElementById("scrollbar").style.opacity = "1";

	/* hero border-radius */

	if (scrolledHeight == 0) {
		document.getElementById("hero").style.borderRadius = "0px";
		document.getElementById("navbar").style.boxShadow = "0px 0px 0px var(--boxShadowMed)";
		document.getElementById("navbar").style.background = "transparent";
		document.getElementById("scrolltotop").style.opacity = "0"
		document.getElementById("scrollbar").style.opacity = "0"
		document.getElementById("scrolltotop").style.cursor = "default";
		document.getElementById("scrollCaretSpan").style.opacity = "1";
	} else {
		document.getElementById("hero").style.borderRadius = "0px 0px 10px 10px";
		document.getElementById("navbar").style.boxShadow = "0px 0px 10px var(--boxShadowMed)";
		document.getElementById("navbar").style.background = "var(--small-gradient-purple)";
		document.getElementById("scrolltotop").style.opacity = "1"
		document.getElementById("scrollbar").style.opacity = "1"
		document.getElementById("scrolltotop").style.cursor = "pointer";
		document.getElementById("scrollCaretSpan").style.opacity = "0";
	}

	var titleSize = Math.sqrt(3.2 * window.innerWidth);
	document.getElementById("title").style.fontSize = String(titleSize) + "px";

	var pfpSize = Math.pow(2000 * window.innerWidth, 1/3);
	document.getElementById("pfp").style.width = String(pfpSize) + "px";
	document.getElementById("pfp").style.height = String(pfpSize) + "px";
	document.getElementById("pfp").style.marginBottom = String(pfpSize / 6) + "px";
}

function ScrollTo(id) {
	element = document.getElementById()
}

function ScrollToTop() {
	window.scrollTo(0, 0);
}

function DisplayPastProjects() {
	pastProjectsElement = document.getElementById("pastProjects");
	ids = Object.keys(pastProjects);

	for (i = 0; i < Object.keys(pastProjects).length; i++) {
		var content = pastProjects[ids[i]];

		console.log(content);

		pastProjectsElement.innerHTML += `
			<a onmouseover="PopupHover('${ids[i]}')" onclick="Popup('${ids[i]}')" class="column col-4 card card-hover" id="${ids[i]}">
				<div class="header ${content[0]}">
					<i class="${content[1]} fa-9x"></i>
				</div>
				<div class="footer">
					<h3>${content[2]}</h3>
					<p>${content[3]}</p>
				</div>
			</a>`
	}
}

function PopupHover(id) {
	var popupZone = document.getElementById("popup-zone");
	var element = document.getElementById(id);

	var rect = element.getBoundingClientRect();
	var width = rect.right - rect.left;
	var height = rect.bottom - rect.top;
	
	popupZone.innerHTML = `
	<div onclick="ClosePopup()" class="popup-close">
	</div>
	<div class="popupDiv card" style="position: fixed; top: ` + String(rect.top) + `px; left: ` + rect.left + `px; width: ` + width + `px; height: ` + height + `px; opacity: 0; transition: 0.25s ease, opacity 0s ease;" id="newPopup">
	</div>`;
}

function Popup(id) {
	element = document.getElementById(id);
	newPopup = document.getElementById("newPopup");
	popupZone = document.getElementById("popup-zone");

	element.style.opacity = "0";
	
	newPopup.style.top = "10vh";
	newPopup.style.left = "10vw";
	newPopup.style.width = "80vw";
	newPopup.style.height = "80vh";
	newPopup.style.opacity = "1";
	newPopup.style.pointerEvents = "auto";
	newPopup.style.overflow = "auto";

	popupZone.style.pointerEvents = "auto";
	popupZone.style.opacity = "1";

	newPopup.set

	var content = pastProjects[id];

	newPopup.innerHTML = `
		<div class="header ${content[0]}">
			<i class="${content[1]} fa-9x"></i>
			<span style="position: absolute; top: 50px; right: 50px; cursor: pointer;" onclick="ClosePopup()"><i class="fas fa-times fa-2x"></i></span>
		</div>
		<div class="footer" id="popupAdder" style="overflow:auto;">
			<h3>${content[2]}</h3>
			<p>${content[3]}</p>
		</div>`;

	popupAdder = document.getElementById("popupAdder");
	popupAdder.innerHTML += content[4];
}

function ClosePopup() {
	popupZone.style.pointerEvents = "none";
	popupZone.style.opacity = "0";
	popupZone.innerHTML = "";
	element.style.opacity = "1";
}