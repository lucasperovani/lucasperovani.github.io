window.onscroll = function() {stickyMenuBar()};

/* Sticky Menu Bar */
var topMenuBar 		= document.getElementById("topMenuBar");
var topMenuLogo 	= document.getElementById("topMenuBarLogo")

var stickyBar 		= topMenuBar.offsetTop;


function stickyMenuBar() {

	if (window.pageYOffset > stickyBar)
	{
		
		topMenuBar.classList.add("stickyMenuBarIn");
		topMenuBar.classList.remove("stickyMenuBarOut");

		topMenuLogo.classList.add("stickyLogoIn");
		topMenuLogo.classList.remove("stickyLogoOut");

	
	} else {

		if (topMenuBar.classList.contains("stickyMenuBarIn"))
		{
			topMenuBar.classList.add("stickyMenuBarOut");
			topMenuBar.classList.remove("stickyMenuBarIn");
		}

		if (topMenuLogo.classList.contains("stickyLogoIn"))
		{
			topMenuLogo.classList.remove("stickyLogoIn");
			topMenuLogo.classList.add("stickyLogoOut");
		}
	
	}

}


/* XML Request */
/* Como o site no github pages é estático e não devo desenvolver algo para que algum */
/* usuário crie artigos no site, não irei me preocupar com XSS nesse JSON por enquanto.*/
let xmlRequest = new XMLHttpRequest();
let jsonFile;

xmlRequest.onreadystatechange = function() 
{
	if (this.readyState == 4 && this.status == 200)
	{
		/* Parse Articles JSON */
		jsonFile = JSON.parse(this.responseText);
	  
		/* Fill with articles */
		body = document.getElementById("bodyContainer");
		articles = jsonFile.articles.ids.split(';');

		let iterator;
		for (iterator = 0; iterator < articles.length; iterator++)
		{
			body.insertAdjacentHTML('beforeend',`
			<div id="article-${articles[iterator]}" class="articleContainer" onclick="toggleArticle(${articles[iterator]})">

				<h2 class="articleTitle">${jsonFile[articles[iterator]].Title}</h2>
				<p class="articleDescription">${jsonFile[articles[iterator]].Description}</p>

				<div id="article-${articles[iterator]}-Content" class="articleContent articleContentInvisibility">${jsonFile[articles[iterator]].Content}</div>

			</div>
			`);
		}
	}
};
  
xmlRequest.open("GET", "../articles/articles.json", true);
xmlRequest.send();


/* Toogle Articles */
function toggleArticle(articleID)
{
	let article = document.getElementById("article-" + articleID);

	if (article.classList.contains("articleContainerOpened"))
	{
		article.classList.remove("articleContainerOpened");
		document.getElementById("article-" + articleID + "-Content").classList.add("articleContentInvisibility");

	} else {

		article.classList.add("articleContainerOpened");
		document.getElementById("article-" + articleID + "-Content").classList.remove("articleContentInvisibility");
	}
}
