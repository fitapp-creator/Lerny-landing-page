/* Lerny — shared script for static pages (CSP-friendly, no inline JS) */
document.addEventListener("DOMContentLoaded", function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
