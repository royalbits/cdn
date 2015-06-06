function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
        script.onreadystatechange = script.onload = null;
        	handler();
        }
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
        //(head || document.body).appendChild( script );
    };
    (function(){
        if(array.length!=0){
        	loader(array.shift(),arguments.callee);
        }else{
        	callback && callback();
        }
    })();
}

loadScripts([
	"http://cdn.royalbits.com/js/jquery-1.11.1.min.js",
	"http://cdn.royalbits.com/js/bootstrap.min.js",
    "//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min.js",
    "http://cdn.royalbits.com/js/jquery.Jcrop.min.js",
    "http://cdn.royalbits.com/js/bootstrap-multiselect.js",
    "http://cdn.royalbits.com/js/remoteNonStopPageScroll.js",
    "http://cdn.royalbits.com/js/bootstrap-maxlength.min.js",
    "http://cdn.royalbits.com/js/jquery.backstretch.min.js",
    "http://cdn.royalbits.com/js/jquery.mCustomScrollbar.concat.min.js",
    "http://cdn.royalbits.com/js/ion.sound.js",
    "http://cdn.royalbits.com/js/attach.web.js",
    "http://cdn.royalbits.com/js/main.web.js"
],function(){
    console.info('LOADED');
});