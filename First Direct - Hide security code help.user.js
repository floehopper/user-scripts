// ==UserScript==
// @name         First Direct - Hide security code help
// @namespace    http://jamesmead.org/
// @version      0.1
// @description  Hides the security code help panel which is only useful the first few times
// @author       James Mead
// @match        https://*.firstdirect.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.getElementsByClassName('csPanelMain')[0].style.display = 'none';
})();