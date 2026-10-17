/* Filtro por categoria: chips, cards de categoria, abas e rodapé. Só data-attributes. */
(function () {
  var UW = (window.UW = window.UW || {});

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest("[data-filter], [data-apply-filter]");
    if (!trigger || !UW.setFilter) return;
    UW.setFilter(trigger.getAttribute("data-filter") || trigger.getAttribute("data-apply-filter"));
  });
})();
