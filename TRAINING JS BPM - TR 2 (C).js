window.onPreInit = function(){
	var d = new Date();
	console.warn("onPreInit: " + d.getTime());
};

window.onInit = function(){
	var d = new Date();
	console.warn("onInit: " + d.getTime());
};

window.onLoadComplete = function(){
	var d = new Date();
	console.warn("onLoadComplete: " + d.getTime());
};

neocase.form.event.bind("preinit", onPreInit);
neocase.form.event.bind("init", onInit);
neocase.form.event.bind("loadcomplete", onLoadComplete);
