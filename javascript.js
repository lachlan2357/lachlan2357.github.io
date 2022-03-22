const pastProjects = {
	"amsi": {
		"gradient": "gradient-amsi-three",
		"icon": "fas fa-film",
		"title": "AMSI ChooseMATHS",
		"description": "Throughout 2017, 2018 and 2019, myself and a group of friends competed in the AMSI ChooseMATHS Competition. While not doing very well early on, our final video submission in 2019 was selected as one of the Top 10 nationally."
	},
	"f1": {
		"gradient": "gradient-f1",
		"icon": "fa fa-car",
		"title": "F1 in Schools",
		"description": "Myself and four friends competed in the 2020 F1 in Schools competition, reaching third place at the State Competition. I was the graphic designer for our team, creating a team brand and website."
	},
	"site": {
		"gradient": "gradient-small-blue",
		"icon": "fas fa-code",
		"title": "This very Website",
		"description": "As a Quarentine Project spanning 2021, I set out to design and code a personal website, employing my skills in HTML, CSS and Javscript. This code behind the website was constructed with code writted purely by me, with the source avaliable via my Github Page."
	},
}

const guides = {
	" windowsupdate": {
		"icon": "fa fa-windows",
		"title": "Updating Windows on Ex-School Laptops",
		"description": "After getting our laptops back from the school, I quickly realised they messed up the install for it. So I created this guide to help the rest of the grade update theirs."
	},
}
const scrollOffset = -100;

window.onload = function() {UpdateCSS()}
window.onscroll = function() {UpdateCSS()}

function DisplayGuides() {
	for(var i = 0; i < Object.keys(guides).length; i++){
		var guide = guides[Object.keys(guides)[i]]
		var parent = document.getElementById("guides-carousel");
		parent.innerHTML += `<div class="guide">
		<h3 class="h5">${guide.title}</h1>
		<p>${guide.description}</p>
		</div>
		`;
	}
}

function DisplayPastProjects() {
	var parent = document.getElementById("projects-carousel");

	for (var i = 0; i < Object.keys(pastProjects).length; i++) {
		var project = pastProjects[Object.keys(pastProjects)[i]];
		parent.innerHTML += `<article class="carousel-item">
		<div class="header ${project.gradient}">
			<i class="${project.icon} icon-header"></i>
		</div>
		<div class="footer">
			<h3 class="h4 no-top-margin left">${project.title}</h3>
			<p>${project.description}</p>
		</div>
		</article>`;
	}

	parent.innerHTML += `<a class="see-all-button" href="#" aria-label="see all past projects"><div class="carousel-see-all-button">
	<h3><i class="fas fa-chevron-right"></i><br>See All</h3>
	</div></a>`
}

function UpdateCSS() {
	var scrolledHeight = window.pageYOffset;

	if (scrolledHeight == 0) {
		document.getElementById("hero").style.borderRadius = "0px";
		document.getElementById("navbar").style.boxShadow = "0px 0px 0px var(--boxShadowMed)";
		document.getElementById("scrollCaretSpan").style.opacity = "1";
	} else {
		document.getElementById("hero").style.borderRadius = "0px 0px 10px 10px";
		document.getElementById("navbar").style.boxShadow = "0px 0px 10px var(--boxShadowMed)";
		document.getElementById("scrollCaretSpan").style.opacity = "0";
	}
}

function ScrollTo(id) {
	var newPos = document.getElementById(id).getBoundingClientRect().top + window.pageYOffset + scrollOffset;
	console.log(newPos);
	window.scrollTo({top: newPos});
}