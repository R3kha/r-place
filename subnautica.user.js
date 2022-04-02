// ==UserScript==
// @name         r/Subnauticaplace overlay
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Subnautica Peeper and logo
// @author       /u/Arterra
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/fiercedude/r-place/new/main/subnautica.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://imgur.com/a/7WhfW8W";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 64px;height: 15px;";
            console.log(i);
            return i;
        })())

    }, false);

}
