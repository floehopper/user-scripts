// ==UserScript==
// @name         Twitter - Hide promoted tweets
// @namespace    http://jamesmead.org/
// @version      0.1
// @description  Hide the annoying promoted tweets on Twitter
// @author       James Mead
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const promotedTweets = document.getElementsByClassName('promoted-tweet');
    for(var i = 0; i < promotedTweets.length; i++) {
      promotedTweets.item(i).style.display = 'none';
    }
    console.log('Promoted tweets hidden');
})();
