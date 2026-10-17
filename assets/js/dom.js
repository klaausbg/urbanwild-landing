/* Helpers de DOM compartilhados (sem innerHTML). */
(function () {
  var UW = (window.UW = window.UW || {});

  UW.el = function (tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  };

  UW.icon = function (name) {
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    var use = document.createElementNS(ns, "use");
    svg.setAttribute("class", "icon");
    svg.setAttribute("aria-hidden", "true");
    use.setAttribute("href", "#icon-" + name);
    svg.appendChild(use);
    return svg;
  };
})();
