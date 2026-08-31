// ==UserScript==
// @name         FreeAgent tweaks for Go Free Range
// @namespace    https://gofreerange.com
// @version      2024-07-12
// @description  Tweaks to make using FreeAgent easier
// @author       James Mead
// @match        https://freerange.freeagent.com/*
// @icon         https://freeagent-res.cloudinary.com/image/upload/c_limit,h_48/dpr_auto,f_auto/website-images/brand/company/mark.svg
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.addEventListener("turbo:load", () => {
    // only include active GFR users in timesheet reporting
    const select = document.getElementById("report_user_id");
    if (select) {
      for (const option of select.children) {
        if (!["Chris Lowis", "Chris Roos", "James Mead"].includes(option.innerText)) {
          option.hidden = true
        };
      };
    };

    // highlight bank transactions marked for review that have "TODO" in their description
    const transactionsTable = document.querySelector('[data-testid="transaction-table"]');
    if (transactionsTable) {
      const txnsNeedingApproval = transactionsTable.querySelectorAll("tr.approval");
      const partialExplanations = Array.from(txnsNeedingApproval).filter(tr => {
        const link = tr.querySelector("td a.BankTransaction-description");
        return link && link.textContent.includes("TODO");
      });
      partialExplanations.forEach(a => { a.style.backgroundColor = "yellow"; });
    };
  });
})();
