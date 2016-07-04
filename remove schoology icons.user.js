// ==UserScript==
// @name         remove schoology icons
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  get rid of mr. coxes shart icon
// @author       You
// @match        https://app.schoology.com/*
// @grant        none
// ==/UserScript==

//CONFIG
//add the url that point to the annoying images src
var iconSrcs = ["https://cdn3-4.cdn.schoology.com/system/files/imagecache/profile_reg/courselogos/logo-595068063_574ed5072658d.gif?1464784135"];

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
            img.parentNode.removeChild(img);
        }
    }

    // Your code here...
})();