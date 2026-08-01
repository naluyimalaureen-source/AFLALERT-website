/*************************************************************************
 * Injects the shared site header/nav into every ".menu-container" element.
 * Uses a plain innerHTML template (not an AJAX fetch of menu.html) so it
 * works when a page is opened directly as a file, not just via a server.
 *************************************************************************/

(function () {
  "use strict";

  var MENU_HTML =
    '<header>' +
    '  <div class="navbar">' +
    '    <div class="logo"><img src="img/aflalert_logo.png" alt="AflAlert logo"><span>AflAlert</span> App</div>' +
    '    <div class="nav-links">' +
    '      <a href="index.html">Home</a>' +
    '      <a href="about.html">About</a>' +
    '      <a href="features.html">Features</a>' +
    '      <a href="how-it-works.html">How It Works</a>' +
    '      <a href="team.html">Team</a>' +
    '      <a href="contact.html">Contact</a>' +
    '    </div>' +
    '  </div>' +
    '</header>';

  document.querySelectorAll(".menu-container").forEach(function (el) {
    el.innerHTML = MENU_HTML;
  });
})();
