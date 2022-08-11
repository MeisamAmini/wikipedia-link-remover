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

    // Find links inside paragraphs and image captions, and convert them to plain text
    const links = document.querySelectorAll("p a, div.thumbcaption a");
    links.forEach(removeLink);

    function removeLink(link, index, links) {
        // Get the parent of the current link
        const parent = link.parentNode;

        // Create a span element to be replaced with the link, and set the link text as its content
        const plainText = document.createElement("span");
        plainText.innerHTML = link.textContent;

        // Insert the span element before the link and then remove the link itself
        parent.insertBefore(plainText, link);
        link.remove();

        // Finally normalize the paretn to get rid of any empty spaces
        parent.normalize();
    }
})();