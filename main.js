$( document ).ready(function() {

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

	var href;
	var comeB;
	
	var result = getUrlVars();

	if(result.href) {
		href = "" + result.href;
	}
	if(!result.href) {
		href = "https://google.com";
	}
	if(result.comebacker) {
		comeB = "" + result.comebacker;
	}
	if(!result.comebacker) {
		comeB = 1;
	}


	$('a').attr('href', '' + href);

	function comebacker(comeB) {
		if(comeB == 1) {
			var script = document.createElement('script');		
			script.src = '../../comebacker.js';
			document.head.appendChild(script);	
		}
		if(comeB == 0) {
		}
	}

	comebacker(comeB)

});