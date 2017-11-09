(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):c("undefined"!=typeof jQuery?jQuery:window.Zepto)})
(function(c){function b(a){var b=a.data;
a.isDefaultPrevented()||(a.preventDefault(),c(a.target).ajaxSubmit(b))}
function k(a){var b=a.target,d=c(b);
if(!d.is("[type=submit],[type=image]")){b=d.closest("[type=submit]");
if(0===b.length)return;b=b[0]}
var r=this;r.clk=b;
"image"==b.type&&(void 0!==a.offsetX?(r.clk_x=a.offsetX,r.clk_y=a.offsetY):"function"==typeof c.fn.offset?(d=d.offset(),r.clk_x=a.pageX-d.left,r.clk_y=a.pageY-d.top):(r.clk_x=a.pageX-b.offsetLeft,r.clk_y=a.pageY-b.offsetTop));setTimeout(function(){r.clk=r.clk_x=r.clk_y=null},100)}function l(){if(c.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}var p,d;p=void 0!==c("<input type='file'/>").get(0).files;d=void 0!==window.FormData;var e=!!c.fn.prop;c.fn.attr2=function(){if(!e)return this.attr.apply(this,
arguments);var a=this.prop.apply(this,arguments);
return a&&a.jquery||"string"===typeof a?a:this.attr.apply(this,arguments)};
c.fn.ajaxSubmit=function(a){function b(f){f=c.param(f,a.traditional).split("&");var d=f.length,r=[],e,g;
for(e=0;e<d;e++)f[e]=f[e].replace(/\+/g," "),g=f[e].split("="),r.push([decodeURIComponent(g[0]),decodeURIComponent(g[1])]);
return r}
function v(d){
	for(var r=new FormData,e=0;e<d.length;e++)r.append(d[e].name,d[e].value);
	if(a.extraData)
		for(d=b(a.extraData),e=0;
	e<d.length;e++)d[e]&&r.append(d[e][0],d[e][1]);
	a.data=null;
	e=c.extend(!0,{},c.ajaxSettings,a,{contentType:!1,processData:!1,cache:!1,type:f||"POST"});
	a.uploadProgress&&(e.xhr=function(){
		var f=c.ajaxSettings.xhr();
		f.upload&&f.upload.addEventListener("progress",function(c){
			var f=0,b=c.loaded||c.position,e=c.total;
			c.lengthComputable&&(f=Math.ceil(b/e*100));
			a.uploadProgress(c,b,e,f)},!1);
			return f});
			e.data=null;
			var g=e.beforeSend;
			e.beforeSend=function(c,f){
				f.data=a.formData?a.formData:r;
				g&&g.call(this,c,f)};
				return c.ajax(e)}
function r(b){
	function d(a){
		var c=null;
		try{a.contentWindow&&(c=a.contentWindow.document)}
		catch(b){l("cannot get iframe.contentWindow document: "+b)}
		if(c)return c;try{c=a.contentDocument?a.contentDocument:a.document}
		catch(b){l("cannot get iframe.contentDocument: "+b),c=a.document}
		return c}
		function r(){
			function a(){
				try{var c=d(w).readyState;
				l("state = "+c);
				c&&"uninitialized"==c.toLowerCase()&&setTimeout(a,50)}
				catch(b){l("Server abort: ",b," (",b.name,")"),g(C),A&&clearTimeout(A),A=void 0}}
				var b=u.attr2("target"),e=u.attr2("action"),n=u.attr("enctype")||u.attr("encoding")||"multipart/form-data";
				t.setAttribute("target",v);
				f&&!/post/i.test(f)||t.setAttribute("method","POST");
				e!=h.url&&t.setAttribute("action",h.url);
				h.skipEncodingOverride||f&&!/post/i.test(f)||u.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});
				h.timeout&&(A=setTimeout(function(){
					y=!0;g(D)},h.timeout));
					var m=[];
					try{if(h.extraData)
						for(var q in h.extraData)h.extraData.hasOwnProperty(q)&&(c.isPlainObject(h.extraData[q])&&h.extraData[q].hasOwnProperty("name")&&h.extraData[q].hasOwnProperty("value")?m.push(c('<input type="hidden" name="'+h.extraData[q].name+'">').val(h.extraData[q].value).appendTo(t)[0]):m.push(c('<input type="hidden" name="'+q+'">').val(h.extraData[q]).appendTo(t)[0]));
					h.iframeTarget||p.appendTo("body");
					w.attachEvent?w.attachEvent("onload",g):w.addEventListener("load",g,!1);
					setTimeout(a,15);
					try{
						t.submit()}
					catch(k){
						document.createElement("form").submit.apply(t)}}
					finally{t.setAttribute("action",e),t.setAttribute("enctype",n),b?t.setAttribute("target",b):u.removeAttr("target"),c(m).remove()}}
			function g(a){
				if(!m.aborted&&!F)
					if(x=d(w),x||(l("cannot access response document"),a=C),a===D&&m)m.abort("timeout"),z.reject(m,"timeout");
					else if(a==C&&m)m.abort("server abort"),z.reject(m,"error","server abort");
					else if(x&&x.location.href!=h.iframeSrc||y){w.detachEvent?w.detachEvent("onload",g):w.removeEventListener("load",g,!1);
					a="success";
					var b;
					try{
						if(y)throw"timeout";
						var f="xml"==h.dataType||x.XMLDocument||c.isXMLDoc(x);l("isXml="+f);
						if(!f&&window.opera&&(null===x.body||!x.body.innerHTML)&&--G){
							l("requeing onLoad callback, DOM not available");
							setTimeout(g,250);
							return}
						var e=x.body?x.body:x.documentElement;
						m.responseText=e?e.innerHTML:null;
						m.responseXML=x.XMLDocument?x.XMLDocument:x;
						f&&(h.dataType="xml");
						m.getResponseHeader=function(a){
							return{"content-type":h.dataType}[a.toLowerCase()]};
							e&&(m.status=Number(e.getAttribute("status"))||m.status,m.statusText=e.getAttribute("statusText")||m.statusText);
							var r=(h.dataType||"").toLowerCase(),t=/(json|script|text)/.test(r);
						if(t||h.textarea){
							var n=x.getElementsByTagName("textarea")[0];
							if(n)m.responseText=n.value,m.status=Number(n.getAttribute("status"))||m.status,m.statusText=n.getAttribute("statusText")||m.statusText;
							else if(t){
								var v=x.getElementsByTagName("pre")[0],k=x.getElementsByTagName("body")[0];
								v?m.responseText=v.textContent?v.textContent:v.innerText:k&&(m.responseText=k.textContent?k.textContent:k.innerText)}}else"xml"==r&&!m.responseXML&&m.responseText&&(m.responseXML=H(m.responseText));try{B=I(m,r,h)}catch(u){a=
"parsererror",m.error=b=u||a}}catch(u){l("error caught: ",u),a="error",m.error=b=u||a}m.aborted&&(l("upload aborted"),a=null);m.status&&(a=200<=m.status&&300>m.status||304===m.status?"success":"error");"success"===a?(h.success&&h.success.call(h.context,B,"success",m),z.resolve(m.responseText,"success",m),q&&c.event.trigger("ajaxSuccess",[m,h])):a&&(void 0===b&&(b=m.statusText),h.error&&h.error.call(h.context,m,a,b),z.reject(m,"error",b),q&&c.event.trigger("ajaxError",[m,h,b]));q&&c.event.trigger("ajaxComplete",
[m,h]);q&&!--c.active&&c.event.trigger("ajaxStop");h.complete&&h.complete.call(h.context,m,a);F=!0;h.timeout&&clearTimeout(A);setTimeout(function(){h.iframeTarget?p.attr("src",h.iframeSrc):p.remove();m.responseXML=null},100)}}var t=u[0],n,h,q,v,p,w,m,y,A,z=c.Deferred();z.abort=function(a){m.abort(a)};if(b)for(n=0;n<k.length;n++)b=c(k[n]),e?b.prop("disabled",!1):b.removeAttr("disabled");h=c.extend(!0,{},c.ajaxSettings,a);h.context=h.context||h;v="jqFormIO"+(new Date).getTime();h.iframeTarget?(p=c(h.iframeTarget),
(n=p.attr2("name"))?v=n:p.attr2("name",v)):(p=c('<iframe name="'+v+'" src="'+h.iframeSrc+'" />'),p.css({position:"absolute",top:"-1000px",left:"-1000px"}));w=p[0];m={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(a){var b="timeout"===a?"timeout":"aborted";l("aborting upload... "+b);this.aborted=1;try{w.contentWindow.document.execCommand&&w.contentWindow.document.execCommand("Stop")}catch(f){}p.attr("src",
h.iframeSrc);m.error=b;h.error&&h.error.call(h.context,m,b,a);q&&c.event.trigger("ajaxError",[m,h,b]);h.complete&&h.complete.call(h.context,m,b)}};(q=h.global)&&0===c.active++&&c.event.trigger("ajaxStart");q&&c.event.trigger("ajaxSend",[m,h]);if(h.beforeSend&&!1===h.beforeSend.call(h.context,m,h))return h.global&&c.active--,z.reject(),z;if(m.aborted)return z.reject(),z;(b=t.clk)&&(n=b.name)&&!b.disabled&&(h.extraData=h.extraData||{},h.extraData[n]=b.value,"image"==b.type&&(h.extraData[n+".x"]=t.clk_x,
h.extraData[n+".y"]=t.clk_y));var D=1,C=2;b=c("meta[name=csrf-token]").attr("content");(n=c("meta[name=csrf-param]").attr("content"))&&b&&(h.extraData=h.extraData||{},h.extraData[n]=b);h.forceSync?r():setTimeout(r,10);var B,x,G=50,F,H=c.parseXML||function(a,c){window.ActiveXObject?(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(a)):c=(new DOMParser).parseFromString(a,"text/xml");return c&&c.documentElement&&"parsererror"!=c.documentElement.nodeName?c:null},J=c.parseJSON||function(a){return window.eval("("+
a+")")},I=function(a,b,f){var e=a.getResponseHeader("content-type")||"",d="xml"===b||!b&&0<=e.indexOf("xml");a=d?a.responseXML:a.responseText;d&&"parsererror"===a.documentElement.nodeName&&c.error&&c.error("parsererror");f&&f.dataFilter&&(a=f.dataFilter(a,b));"string"===typeof a&&("json"===b||!b&&0<=e.indexOf("json")?a=J(a):("script"===b||!b&&0<=e.indexOf("javascript"))&&c.globalEval(a));return a};return z}if(!this.length)return l("ajaxSubmit: skipping submit process - no element selected"),this;
var f,g,u=this;"function"==typeof a?a={success:a}:void 0===a&&(a={});f=a.type||this.attr2("method");g=a.url||this.attr2("action");(g=(g="string"===typeof g?c.trim(g):"")||window.location.href||"")&&(g=(g.match(/^([^#]+)/)||[])[1]);a=c.extend(!0,{url:g,success:c.ajaxSettings.success,type:f||c.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);g={};this.trigger("form-pre-serialize",[this,a,g]);if(g.veto)return l("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),
this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return l("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var q=a.traditional;void 0===q&&(q=c.ajaxSettings.traditional);var k=[],n,y=this.formToArray(a.semantic,k);a.data&&(a.extraData=a.data,n=c.param(a.data,q));if(a.beforeSubmit&&!1===a.beforeSubmit(y,this,a))return l("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[y,this,a,g]);if(g.veto)return l("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
this;g=c.param(y,q);n&&(g=g?g+"&"+n:n);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+g,a.data=null):a.data=g;var w=[];a.resetForm&&w.push(function(){u.resetForm()});a.clearForm&&w.push(function(){u.clearForm(a.includeHidden)});if(!a.dataType&&a.target){var A=a.success||function(){};w.push(function(b){var f=a.replaceTarget?"replaceWith":"html";c(a.target)[f](b).each(A,arguments)})}else a.success&&w.push(a.success);a.success=function(c,b,f){for(var e=a.context||this,d=0,r=w.length;d<
r;d++)w[d].apply(e,[c,b,f||u,u])};if(a.error){var D=a.error;a.error=function(c,b,f){D.apply(a.context||this,[c,b,f,u])}}if(a.complete){var C=a.complete;a.complete=function(c,b){C.apply(a.context||this,[c,b,u])}}n=0<c("input[type=file]:enabled",this).filter(function(){return""!==c(this).val()}).length;g="multipart/form-data"==u.attr("enctype")||"multipart/form-data"==u.attr("encoding");q=p&&d;l("fileAPI :"+q);var B;!1!==a.iframe&&(a.iframe||(n||g)&&!q)?a.closeKeepAlive?c.get(a.closeKeepAlive,function(){B=
r(y)}):B=r(y):B=(n||g)&&q?v(y):c.ajax(a);u.removeData("jqxhr").data("jqxhr",B);for(n=0;n<k.length;n++)k[n]=null;this.trigger("form-submit-notify",[this,a]);return this};c.fn.ajaxForm=function(a){a=a||{};a.delegation=a.delegation&&c.isFunction(c.fn.on);if(!a.delegation&&0===this.length){var e=this.selector,d=this.context;if(!c.isReady&&e)return l("DOM not ready, queuing ajaxForm"),c(function(){c(e,d).ajaxForm(a)}),this;l("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));
return this}return a.delegation?(c(document).off("submit.form-plugin",this.selector,b).off("click.form-plugin",this.selector,k).on("submit.form-plugin",this.selector,a,b).on("click.form-plugin",this.selector,a,k),this):this.ajaxFormUnbind().bind("submit.form-plugin",a,b).bind("click.form-plugin",a,k)};c.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};c.fn.formToArray=function(a,b){var e=[];if(0===this.length)return e;var d=this[0],f=this.attr("id"),g=a?d.getElementsByTagName("*"):
d.elements;g&&!/MSIE [678]/.test(navigator.userAgent)&&(g=c(g).get());f&&(f=c(":input[form="+f+"]").get(),f.length&&(g=(g||[]).concat(f)));if(!g||!g.length)return e;var k,q,l,n,y;k=0;for(y=g.length;k<y;k++)if(n=g[k],(f=n.name)&&!n.disabled)if(a&&d.clk&&"image"==n.type)d.clk==n&&(e.push({name:f,value:c(n).val(),type:n.type}),e.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y}));else if((l=c.fieldValue(n,!0))&&l.constructor==Array)for(b&&b.push(n),q=0,n=l.length;q<n;q++)e.push({name:f,value:l[q]});
else if(p&&"file"==n.type)if(b&&b.push(n),l=n.files,l.length)for(q=0;q<l.length;q++)e.push({name:f,value:l[q],type:n.type});else e.push({name:f,value:"",type:n.type});else null!==l&&"undefined"!=typeof l&&(b&&b.push(n),e.push({name:f,value:l,type:n.type,required:n.required}));!a&&d.clk&&(g=c(d.clk),k=g[0],(f=k.name)&&!k.disabled&&"image"==k.type&&(e.push({name:f,value:g.val()}),e.push({name:f+".x",value:d.clk_x},{name:f+".y",value:d.clk_y})));return e};c.fn.formSerialize=function(a){return c.param(this.formToArray(a))};
c.fn.fieldSerialize=function(a){var b=[];this.each(function(){var e=this.name;if(e){var d=c.fieldValue(this,a);if(d&&d.constructor==Array)for(var f=0,g=d.length;f<g;f++)b.push({name:e,value:d[f]});else null!==d&&"undefined"!=typeof d&&b.push({name:this.name,value:d})}});return c.param(b)};c.fn.fieldValue=function(a){for(var b=[],e=0,d=this.length;e<d;e++){var f=c.fieldValue(this[e],a);null===f||"undefined"==typeof f||f.constructor==Array&&!f.length||(f.constructor==Array?c.merge(b,f):b.push(f))}return b};
c.fieldValue=function(a,b){var e=a.name,d=a.type,f=a.tagName.toLowerCase();void 0===b&&(b=!0);if(b&&(!e||a.disabled||"reset"==d||"button"==d||("checkbox"==d||"radio"==d)&&!a.checked||("submit"==d||"image"==d)&&a.form&&a.form.clk!=a||"select"==f&&-1==a.selectedIndex))return null;if("select"==f){var g=a.selectedIndex;if(0>g)return null;for(var e=[],f=a.options,k=(d="select-one"==d)?g+1:f.length,g=d?g:0;g<k;g++){var q=f[g];if(q.selected){var p=q.value;p||(p=q.attributes&&q.attributes.value&&!q.attributes.value.specified?
q.text:q.value);if(d)return p;e.push(p)}}return e}return c(a).val()};c.fn.clearForm=function(a){return this.each(function(){c("input,select,textarea",this).clearFields(a)})};c.fn.clearFields=c.fn.clearInputs=function(a){var b=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,d=this.tagName.toLowerCase();b.test(e)||"textarea"==d?this.value="":"checkbox"==e||"radio"==e?this.checked=!1:"select"==d?this.selectedIndex=
-1:"file"==e?/MSIE/.test(navigator.userAgent)?c(this).replaceWith(c(this).clone(!0)):c(this).val(""):a&&(!0===a&&/hidden/.test(e)||"string"==typeof a&&c(this).is(a))&&(this.value="")})};c.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};c.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};c.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var b=
this.type;"checkbox"==b||"radio"==b?this.checked=a:"option"==this.tagName.toLowerCase()&&(b=c(this).parent("select"),a&&b[0]&&"select-one"==b[0].type&&b.find("option").selected(!1),this.selected=a)})};c.fn.ajaxSubmit.debug=!1});
(function(c){if(!c.ionSound){var b={},k,l,p,d,e={},a=!1,t=function(a){var d,g;-1!==a.indexOf(":")?(d=a.split(":")[0],g=a.split(":")[1]):d=a;e[d]=new Audio;l=e[d].canPlayType("audio/mp3");p="probably"===l||"maybe"===l?b.path+d+".mp3":b.path+d+".ogg";c(e[d]).prop("src",p);e[d].load();e[d].preload="auto";e[d].volume=g||b.volume},v=function(c){var d,g,p,q;-1!==c.indexOf(":")?(g=c.split(":")[0],p=c.split(":")[1]):g=c;d=e[g];if("object"===typeof d&&null!==d)if(p&&(d.volume=p),!b.multiPlay&&!a)d.play(),
a=!0,q=setInterval(function(){d.ended&&(clearInterval(q),a=!1)},250);else if(b.multiPlay){if(!d.ended)try{d.currentTime=0}catch(k){}d.play()}};c.ionSound=function(a){b=c.extend({sounds:["water_droplet"],path:"static/sounds/",multiPlay:!0,volume:"0.5"},a);k=b.sounds.length;if("function"===typeof Audio||"object"===typeof Audio)for(d=0;d<k;d+=1)t(b.sounds[d]);c.ionSound.play=function(a){v(a)};c.ionSound.stop=function(a){a=e[a];if("object"===typeof a&&null!==a){a.pause();try{a.currentTime=0}catch(b){}}};
c.ionSound.kill=function(a){var b=e[a];if("object"===typeof b&&null!==b){try{e[a].src=""}catch(c){}e[a]=null}}};c.ionSound.destroy=function(){for(d=0;d<k;d+=1)e[b.sounds[d]]=null;k=0;c.ionSound.play=function(){};c.ionSound.stop=function(){};c.ionSound.kill=function(){}}}})(jQuery);
(function(c,b,k){"undefined"!==typeof module&&module.exports?module.exports=k():"function"===typeof define&&define.amd?define(k):b[c]=k()})("Fingerprint",this,function(){var c=function(b){var c,l;c=Array.prototype.forEach;l=Array.prototype.map;this.each=function(b,d,e){if(null!==b)if(c&&b.forEach===c)b.forEach(d,e);else if(b.length===+b.length)for(var a=0,l=b.length;a<l&&d.call(e,b[a],a,b)!=={};a++);else for(a in b)if(b.hasOwnProperty(a)&&d.call(e,b[a],a,b)==={})break};this.map=function(b,c,e){var a=
[];if(null==b)return a;if(l&&b.map===l)return b.map(c,e);this.each(b,function(b,k,l){a[a.length]=c.call(e,b,k,l)});return a};"object"==typeof b?(this.hasher=b.hasher,this.screen_resolution=b.screen_resolution,this.screen_orientation=b.screen_orientation,this.canvas=b.canvas,this.ie_activex=b.ie_activex):"function"==typeof b&&(this.hasher=b)};c.prototype={get:function(){var b=[];b.push(navigator.userAgent);b.push(navigator.language);b.push(screen.colorDepth);this.screen_resolution&&"undefined"!==typeof this.getScreenResolution()&&
b.push(this.getScreenResolution().join("x"));b.push((new Date).getTimezoneOffset());b.push(this.hasSessionStorage());b.push(this.hasLocalStorage());b.push(!!window.indexedDB);document.body?b.push(typeof document.body.addBehavior):b.push("undefined");b.push(typeof window.openDatabase);b.push(navigator.cpuClass);b.push(navigator.platform);b.push(navigator.doNotTrack);b.push(this.getPluginsString());this.canvas&&this.isCanvasSupported()&&b.push(this.getCanvasFingerprint());return this.hasher?this.hasher(b.join("###"),
31):this.murmurhash3_32_gc(b.join("###"),31)},murmurhash3_32_gc:function(b,c){var l,p,d,e,a;l=b.length&3;p=b.length-l;d=c;for(a=0;a<p;)e=b.charCodeAt(a)&255|(b.charCodeAt(++a)&255)<<8|(b.charCodeAt(++a)&255)<<16|(b.charCodeAt(++a)&255)<<24,++a,e=3432918353*(e&65535)+((3432918353*(e>>>16)&65535)<<16)&4294967295,e=e<<15|e>>>17,e=461845907*(e&65535)+((461845907*(e>>>16)&65535)<<16)&4294967295,d^=e,d=d<<13|d>>>19,d=5*(d&65535)+((5*(d>>>16)&65535)<<16)&4294967295,d=(d&65535)+27492+(((d>>>16)+58964&65535)<<
16);e=0;switch(l){case 3:e^=(b.charCodeAt(a+2)&255)<<16;case 2:e^=(b.charCodeAt(a+1)&255)<<8;case 1:e^=b.charCodeAt(a)&255,e=3432918353*(e&65535)+((3432918353*(e>>>16)&65535)<<16)&4294967295,e=e<<15|e>>>17,d^=461845907*(e&65535)+((461845907*(e>>>16)&65535)<<16)&4294967295}d^=b.length;d^=d>>>16;d=2246822507*(d&65535)+((2246822507*(d>>>16)&65535)<<16)&4294967295;d^=d>>>13;d=3266489909*(d&65535)+((3266489909*(d>>>16)&65535)<<16)&4294967295;return(d^d>>>16)>>>0},hasLocalStorage:function(){try{return!!window.localStorage}catch(b){return!0}},
hasSessionStorage:function(){try{return!!window.sessionStorage}catch(b){return!0}},isCanvasSupported:function(){var b=document.createElement("canvas");return!(!b.getContext||!b.getContext("2d"))},isIE:function(){return"Microsoft Internet Explorer"===navigator.appName||"Netscape"===navigator.appName&&/Trident/.test(navigator.userAgent)?!0:!1},getPluginsString:function(){return this.isIE()&&this.ie_activex?this.getIEPluginsString():this.getRegularPluginsString()},getRegularPluginsString:function(){return this.map(navigator.plugins,
function(b){var c=this.map(b,function(b){return[b.type,b.suffixes].join("~")}).join(",");return[b.name,b.description,c].join("::")},this).join(";")},getIEPluginsString:function(){return window.ActiveXObject?this.map("ShockwaveFlash.ShockwaveFlash;AcroPDF.PDF;PDF.PdfCtrl;QuickTime.QuickTime;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);RealPlayer;SWCtl.SWCtl;WMPlayer.OCX;AgControl.AgControl;Skype.Detection".split(";"),
function(b){try{return new ActiveXObject(b),b}catch(c){return null}}).join(";"):""},getScreenResolution:function(){return this.screen_orientation?screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height]:[screen.height,screen.width]},getCanvasFingerprint:function(){var b=document.createElement("canvas"),c=b.getContext("2d");c.textBaseline="top";c.font="14px 'Arial'";c.textBaseline="alphabetic";c.fillStyle="#f60";c.fillRect(125,1,62,20);c.fillStyle="#069";c.fillText("http://valve.github.io",
2,15);c.fillStyle="rgba(102, 204, 0, 0.7)";c.fillText("http://valve.github.io",4,17);return b.toDataURL()}};return c});(function(c){function b(b,c){function d(b,c){b&&!a[b]&&(a[b]={});for(var f in c){var g=c[f];if(g instanceof Array)for(var k=0;k<g.length;k++)e(b,f,g[k]);else switch(typeof g){case "number":case "string":e(b,f,g);break;case "object":if(k=f.charAt(f.length-1),!b||"_"!==k&&"-"!==k){for(var l=b,k=[],p=f.split(/\s*,\s*/),l=l.split(/\s*,\s*/),r=0;r<l.length;r++)for(var t=l[r],u=0;u<p.length;u++){var v=p[u];"&"===v.charAt(0)?k.push(t+v.substr(1)):k.push(t?t+" "+v:v)}k=k.join(", ");d(k,g)}else for(var E in g)for(k=
E.split(/\s*,\s*/),p=0;p<k.length;p++)if(l=g[E],l instanceof Array)for(r=0;r<l.length;r++)e(b,f+k[p],l[r]);else e(b,f+k[p],g[E])}}}function e(b,d,e){"number"!==typeof e||c.useRawValues||(e+="px");d=d.split(/\s*,\s*/);for(var f=0;f<d.length;f++){var g=d[f].replace(/_/g,"-");a[b][g]?a[b][g].push(e):a[b][g]=[e]}}var a={};if("string"===typeof b)try{eval("var jss = {"+b+"}")}catch(q){return"/*\nUnable to parse JSS: "+q+"\n*/"}d("",b);var k="",v;for(v in a){var r=a[v],k=k+(v+" {\n"),f;for(f in r)for(var g=
r[f],u=0;u<g.length;u++)k+="\t"+f+": "+g[u]+";\n";k+="}\n"}return k}var k={truncateFirst:!1,container:null,containerName:"injectCSSContainer",useRawValues:!1};c.injectCSS=function(l,p){p=c.extend({},k,p);p.media=p.media||"all";var d=p.container&&c(p.container)||c("#"+p.containerName);d.length||(d=c("<style></style>").appendTo("head").attr({media:p.media,id:p.containerName,type:"text/css"}));var e=d[0],a=void 0!==e.styleSheet&&void 0!==e.styleSheet.cssText,t="";p.truncateFirst||(t+=a?e.styleSheet.cssText:
d.text());t+=b(l,p);a?e.styleSheet.cssText=t:d.text(t);return d}})(jQuery);