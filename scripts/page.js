window.onscroll = function() {stickyMenuBar()};


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