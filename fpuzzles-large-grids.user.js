// ==UserScript==
// @name         Fpuzzles-LargeGrids
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Extend grid size limit in f-puzzles.
// @author       Chameleon
// @updateURL    https://github.com/yusitnikov/fpuzzles-letters/raw/main/fpuzzles-large-grids.user.js
// @match        https://*.f-puzzles.com/*
// @match        https://f-puzzles.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(() => {
    const doShim = () => {
        for (let i = 17; i <= 100; i++) {
            for (let h = 1; h * h <= i; h++) {
                if (i % h === 0) {
                    sizes[i] = {w: i / h, h};
                }
            }
        }
    };

    const intervalId = setInterval(() => {
        if (typeof sizes === "undefined") {
            return;
        }

        clearInterval(intervalId);
        doShim();
    }, 16);
})();