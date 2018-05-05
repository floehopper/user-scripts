// ==UserScript==
// @name         Hide adverts on Guardian website
// @namespace    http://jamesmead.org/
// @version      0.1
// @description  Hide adverts on Guardian website
// @author       James Mead
// @match        https://www.theguardian.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const body = document.querySelector("body");
    const ads = body.querySelectorAll('*[data-link-name*="ad"]');
    ads.forEach(function(e) {
        e.style.display = "none";
    });
})();