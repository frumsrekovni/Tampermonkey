// ==UserScript==
// @name         Remove Furigana on NHK WEB EASY articles
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Only shows the furigana if you hover the kanji.
// @author       You
// @match        https://www3.nhk.or.jp/news/easy/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nhk.or.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.insertAdjacentHTML("beforeend",`<style>
    rt {opacity:0%}
    ruby:hover rt {opacity:100%}
    </style>`);
})();