(function () {
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function getTheme() {
    try { return localStorage.getItem("theme") || "system"; } catch (e) { return "system"; }
  }

  function setTheme(theme) {
    try { localStorage.setItem("theme", theme); } catch (e) {}
    applyTheme(theme === "dark" || (theme === "system" && media.matches));
  }

  // Switch themes without every element animating its colors.
  function applyTheme(dark) {
    var css = document.createElement("style");
    css.textContent = "*{transition:none!important}";
    document.head.appendChild(css);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
  }

  function animate() {
    document.querySelectorAll(".animate").forEach(function (el, i) {
      setTimeout(function () { el.classList.add("show"); }, i * 150);
    });
  }

  function on(id, fn) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("click", fn);
  }

  document.addEventListener("DOMContentLoaded", function () {
    animate();
    on("light-theme-button", function () { setTheme("light"); });
    on("dark-theme-button", function () { setTheme("dark"); });
    on("system-theme-button", function () { setTheme("system"); });
    on("back-to-top", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  media.addEventListener("change", function (e) {
    if (getTheme() === "system") applyTheme(e.matches);
  });
})();
