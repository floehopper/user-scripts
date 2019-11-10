// ==UserScript==
// @name         Pinboard - Hide private bookmarks
// @namespace    http://jamesmead.org/
// @version      0.1
// @description  Hide private Pinboard bookmarks by default
// @author       James Mead
// @match        https://pinboard.in/u:floehopper*
// @exclude      https://pinboard.in/u:floehopper/private/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var bookmarks = document.getElementsByClassName('bookmark private');
    for(var i = 0; i < bookmarks.length; i++) {
      bookmarks.item(i).style.display = 'none';
    }
    console.log('Private bookmarks hidden');
})();
