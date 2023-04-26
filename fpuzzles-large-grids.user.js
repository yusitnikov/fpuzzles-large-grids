// ==UserScript==
// @name         Fpuzzles-LargeGrids
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Extend grid size limit in f-puzzles.
// @author       Chameleon
// @updateURL    https://github.com/yusitnikov/fpuzzles-large-grids/raw/main/fpuzzles-large-grids.user.js
// @match        https://*.f-puzzles.com/*
// @match        https://f-puzzles.com/*
// @grant        none
// @run-at       document-end
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

        if (window.onload && window.boolConstraints) {
            console.log("Reloading the puzzle...");
            window.onload();
        } else {
            console.log("No need to reload the puzzle.");
        }
    };

    const intervalId = setInterval(() => {
        console.log("Trying to init large grids...");
        if (typeof sizes === "undefined") {
            console.log("Sizes are not available yet. Will retry soon.");
            return;
        }

        clearInterval(intervalId);
        doShim();
        console.log("Done initializing large grids.");
    }, 16);
})();
