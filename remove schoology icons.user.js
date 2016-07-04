// ==UserScript==
// @name         remove schoology icons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  get rid of annoying schoology icons
// @author       Aggendo (John Sandstedt)
// @match        https://app.schoology.com/*
// @grant        none
// ==/UserScript==

//CONFIG
//add the urls that point to the annoying images src
//current url is to mr. Coxes annoying shark icon
var iconSrcs = ["https://cdn3-4.cdn.schoology.com/system/files/imagecache/profile_reg/courselogos/logo-595068063_574ed5072658d.gif?1464784135"];
var replaceIcon = true;
//needs to be 170x170
var urlForReplacementImg = "http://img.clubic.com/00AA000005414097-photo-adblock-plus-adb-logo-sq-gb.jpg";

//END CONFIG

function arrayContains(needle, arrhaystack)
{
    return (arrhaystack.indexOf(needle) > -1);
}

(function() {
    var imgs = document.getElementsByClassName("imagecache imagecache-profile_reg");
    for(var i=0; i< imgs.length; i++){
        var img = imgs[i];
        console.log(img.src);
        if(arrayContains(img.src, iconSrcs)){
			if(replaceIcon){
				img.src = urlForReplacementImg;
			} else {
            	img.parentNode.removeChild(img);
			}
        }
    }

    // Your code here...
})();