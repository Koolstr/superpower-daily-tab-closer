// ==UserScript==
// @name         Auto-Close Superpower Daily Tab
// @namespace    https://www.superpowerdaily.com
// @version      0.1
// @description  Auto-closes the incredibly annoying tab opened daily from the Superpower Daily browser extension. Note, this breaks access to the home page root address entirely.
// @author       Koolstr
// @match        https://www.superpowerdaily.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=superpowerdaily.com
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict'
	const targetUrl = "https://www.superpowerdaily.com/"
	if (window.location.href === targetUrl) window.close()
})();
