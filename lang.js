var langs = ['en', 'it'];
var currentLang = '';

var translate = function (jsdata)
{	
	$("[tkey]").each (function (index)
	{
		var strTr = jsdata [$(this).attr ('tkey')];
	    $(this).html (strTr);
	});
}

function toggleLang() {
	if(currentLang == "en") {
		$.getJSON('lang/es.json', translate);
		currentLang = "es";
		$("#langIcon").attr("src", "img/uk-icon.png");
	}
	else {
		$.getJSON('lang/en.json', translate);
		currentLang = "en";
		$("#langIcon").attr("src", "img/es-icon.png");
	}
}

langCode = navigator.language.substr (0, 2);

if (langCode in langs) {
	$.getJSON('lang/' + langCode + '.json', translate);
	currentLang = langCode;
}
else {
	$.getJSON('lang/en.json', translate);
	currentLang = "en";
	$("#langIcon").attr("src", "img/es-icon.png");
}


