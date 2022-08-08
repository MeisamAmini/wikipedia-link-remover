# Wikipedia Link Remover #

## Usage ##

[Wikipedia](https://wikipedia.org) is one of the best resources for knowledge on the internet, and we can use it to learn about almost everything. But when you read Wikipedia using a screen reader the frequent announcement of links in the body of the article is very distracting. Screen readers usually allow the user to turn off the announcement of links, but it add a bit of extra work whenever we need to read a Wikipedia article.

This simple userscript designed for extensions like **TamperMonkey** removes links from the body of Wikipedia articles automatically in all languages. It only removes links that are inside paragraphs of text or image captions. So menus and refernces to other articles at the beginning of a section remain links. After installing it, you just visit Wikipedia like normal.

## Installation ##

There exist a few extensions like **TamperMonkey** which get installed on your browser and let you install small extensions written by users, or yourself, for that matter. So to use this userscript you need to install one of those extensions and then install the userscript itself.

First, install **TamperMonkey** extension for Google Chrome [here](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) and for Firefox [here](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).

Then install the latest version of this userscript from [here](https://github.com/MeisamAmini/wikipedia-link-remover/raw/main/wikipedia-link-remover.user.js).