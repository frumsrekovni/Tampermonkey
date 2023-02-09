// ==UserScript==
// @name         Genius Remove Clutter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  I just want to see the lyrics
// @author       You
// @match        https://genius.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=genius.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.insertAdjacentHTML("beforeend",`<style>
    #lyrics-root > div:nth-child(4),#application > main > div:nth-child(3),#application > main > div:nth-child(4),#application > div.PageFooterdesktop__Container-hz1fx1-0.boDKcJ.SongPage__PageFooter-sc-19xhmoi-6.cscQEf,#lyrics-root > div.Lyrics__Footer-sc-1ynbvzw-2.jrjShc {display:none;}
    #lyrics-root > div:nth-child(3) {font-size: x-large;}
    </style>`);
})();