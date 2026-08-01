/*************************************************************************
 * Injects the shared site footer into every ".footer-container" element.
 * Uses a plain innerHTML template (not an AJAX fetch of footer.html) so it
 * works when a page is opened directly as a file, not just via a server.
 *************************************************************************/

(function () {
  "use strict";

  var FOOTER_HTML =
    '<footer>' +
    '  <div class="footer-container">' +
    '    <div class="footer-column">' +
    '      <h3>AflAlert</h3>' +
    '      <p style="color:#e6ecf5;">AI-powered aflatoxin detection for safer maize.</p>' +
    '    </div>' +
    '    <div class="footer-column">' +
    '      <h3 style="font-size:1.1rem;">Quick Links</h3>' +
    '      <p><a href="about.html">About</a></p>' +
    '      <p><a href="features.html">Features</a></p>' +
    '      <p><a href="how-it-works.html">How It Works</a></p>' +
    '      <p><a href="team.html">Team</a></p>' +
    '    </div>' +
    '    <div class="footer-column">' +
    '      <h3 style="font-size:1.1rem;">Contact</h3>' +
    '      <p style="color:#e6ecf5;">Kampala, Uganda</p>' +
    '      <p><a href="mailto:aflalert.support@gmail.com">aflalert.support@gmail.com</a></p>' +
    '      <p><a href="https://github.com/naluyimalaureen-source/AFLALERT-website" target="_blank"><i class="fab fa-github"></i> GitHub</a></p>' +
    '    </div>' +
    '    <div class="footer-column">' +
    '      <h3 style="font-size:1.1rem;">Follow Us</h3>' +
    '      <p>' +
    '        <a href="#" style="margin-right:10px;"><i class="fab fa-facebook"></i></a>' +
    '        <a href="#" style="margin-right:10px;"><i class="fab fa-twitter"></i></a>' +
    '        <a href="#" style="margin-right:10px;"><i class="fab fa-instagram"></i></a>' +
    '      </p>' +
    '    </div>' +
    '  </div>' +
    '  <hr style="border-color: rgba(255,255,255,0.2); margin: 20px auto; max-width:1000px;">' +
    '  <p>&copy; 2026 AflAlert App | AI-powered aflatoxin detection for safer maize.</p>' +
    '</footer>';

  document.querySelectorAll(".footer-container").forEach(function (el) {
    el.innerHTML = FOOTER_HTML;
  });
})();
