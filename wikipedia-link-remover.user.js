// ==UserScript==
// @name         Wikipedia Link Remover
// @version      0.1
// @description  Turns links inside Wikipedia articles to plain text.
// @author       Meisam Amini
// @match        https://*.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

const links = document.querySelectorAll("p a, div.thumbcaption a");
links.forEach(removeLink);

function removeLink(link, index, links) {
const parent = link.parentNode;
const plainText = document.createElement("span");
plainText.innerHTML = link.textContent;
parent.insertBefore(plainText, link);
link.remove();
parent.normalize();
}
})();