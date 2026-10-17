/* Header: transparente no topo, sólido ao rolar; menu mobile acessível. */
(function () {
  var header = document.querySelector("[data-header]");
  if (!header) return;

  var toggle = header.querySelector(".nav-toggle");
  var nav = header.querySelector("[data-nav]");
  var root = document.documentElement;
  var mq = window.matchMedia("(min-width: 1025px)");

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function update() {
    var atTop = window.scrollY <= 10 && !isOpen();
    header.classList.toggle("site-header--top", atTop);
  }

  function setMenu(open, returnFocus) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    nav.classList.toggle("is-open", open);
    root.classList.toggle("is-menu-open", open);
    update();
    if (!open && returnFocus) toggle.focus();
  }

  function focusables() {
    return Array.prototype.slice.call(
      header.querySelectorAll(".nav-toggle, .site-nav__link, .site-header__cta, .site-header__brand")
    ).filter(function (el) { return el.offsetParent !== null; });
  }

  toggle.addEventListener("click", function () { setMenu(!isOpen()); });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", function (e) {
    if (!isOpen()) return;
    if (e.key === "Escape") {
      setMenu(false, true);
      return;
    }
    if (e.key !== "Tab") return;
    var items = focusables();
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  mq.addEventListener("change", function () {
    if (mq.matches && isOpen()) setMenu(false);
  });

  window.addEventListener("scroll", update, { passive: true });
  update();
})();
