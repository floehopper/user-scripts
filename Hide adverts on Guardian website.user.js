// ==UserScript==
// @name         Hide adverts on Guardian website
// @namespace    http://jamesmead.org/
// @version      0.1
// @description  Hide adverts on Guardian website
// @author       James Mead
// @match        https://www.theguardian.com/*
// @grant        none
// ==/UserScript==

function hideAds() {
    const body = document.querySelector("body");
    const ads = body.querySelectorAll('.ad-slot');
    ads.forEach(function(e) {
        console.log('hiding ad');
        e.style.display = "none";
    });
};

function continuallyHideAds() {
    setTimeout(function() {
        hideAds();
        continuallyHideAds();
    }, 1000);
}

(function() {
    'use strict';

    continuallyHideAds();
})();