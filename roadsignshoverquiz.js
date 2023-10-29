// ==UserScript==
// @name         Road Signs Hover Quiz
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Makes Transportstyrelsens website function essentially like flash card practice
// @author       You
// @match        https://www.transportstyrelsen.se/sv/vagtrafik/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=transportstyrelsen.se
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    document.body.insertAdjacentHTML("beforeend",`<style>
    .roadsignlink span {opacity:0%}
    .roadsignlink:hover span {opacity:100%}
    </style>`);
})();

