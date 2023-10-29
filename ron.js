// ==UserScript==
// @name         RON
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  RON RON ROOOON
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// The idea is that eventually I want to use soundbytes of certain mahong memes when they are seen on a page
// ==/UserScript==

(function() {
    'use strict';
    if(document.body.innerHTML.indexOf("ron") !== -1) {
        console.log("ron");
    }
    else {
        console.log("no ron");
    }
})();