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

    $('span.Icon--promoted').closest('.tweet').hide();
})();
