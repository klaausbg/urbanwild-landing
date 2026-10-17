/* Renderiza o grid de peças (e os chips de categoria) a partir de UW_CONFIG e UW_PRODUCTS. */
(function () {
  var UW = (window.UW = window.UW || {});
  var cfg = window.UW_CONFIG || {};
  var el = UW.el;
  var icon = UW.icon;
  var grid = document.querySelector("[data-product-grid]");
  var empty = document.querySelector("[data-product-empty]");
  var count = document.querySelector("[data-product-count]");
  var chipsBox = document.querySelector("[data-product-filters]");
  if (!grid) return;

  var money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

  // Peças de exemplo só aparecem em ambiente local.
  var host = window.location.hostname;
  var isLocal = window.location.protocol === "file:" || host === "localhost" || host === "127.0.0.1";
  var products = (window.UW_PRODUCTS || []).filter(function (p) { return !p.placeholder || isLocal; });
  var categories = cfg.categories || [];

  function whatsappUrl(p) {
    var tpl = (cfg.whatsappMessages && cfg.whatsappMessages.product) || "Olá! Tenho interesse na peça \"{name}\".";
    var msg = tpl.replace("{name}", p.name);
    return cfg.whatsapp + "?text=" + encodeURIComponent(msg);
  }

  function action(primary, label, iconName, href) {
    var btn = el("a", "btn btn--sm " + (primary ? "btn--primary" : "btn--secondary"));
    btn.href = href;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
    btn.appendChild(icon(iconName));
    btn.appendChild(document.createTextNode(label));
    return btn;
  }

  function card(p) {
    var item = el("li", "product-card");
    item.dataset.category = p.category;

    var media = el("div", "product-card__media");
    var img = el("img", "product-card__img");
    var first = p.images && p.images[0];
    img.src = first ? first.src : "assets/images/products/placeholder.svg";
    img.alt = first ? first.alt : p.name;
    img.width = 400;
    img.height = 500;
    img.loading = "lazy";
    img.decoding = "async";
    media.appendChild(img);

    var tags = el("div", "product-card__tags");
    var seal = el("span", "verified-badge");
    var mark = el("span", "verified-badge__mark");
    mark.appendChild(icon("check"));
    seal.appendChild(mark);
    seal.appendChild(document.createTextNode("Verificado"));
    tags.appendChild(seal);
    media.appendChild(tags);
    item.appendChild(media);

    var body = el("div", "product-card__body");
    if (p.brand) body.appendChild(el("p", "product-card__brand", p.brand));
    body.appendChild(el("h3", "product-card__title", p.name));
    body.appendChild(el("p", "product-card__size", "Tamanho " + p.size));
    body.appendChild(el("p", "product-card__price", money.format(p.price)));

    var actions = el("div", "product-card__actions");
    var primaryUsed = false;
    if (p.droperUrl) {
      actions.appendChild(action(true, "Comprar na Droper", "bag", p.droperUrl));
      primaryUsed = true;
    }
    if (p.enjoeiUrl) {
      actions.appendChild(action(!primaryUsed, "Comprar no Enjoei", "bag", p.enjoeiUrl));
    }
    actions.appendChild(action(false, "Chamar no WhatsApp", "whatsapp", whatsappUrl(p)));
    body.appendChild(actions);

    item.appendChild(body);
    return item;
  }

  function chip(id, label) {
    var b = el("button", "chip", label);
    b.type = "button";
    b.setAttribute("data-filter", id);
    b.setAttribute("aria-pressed", id === "all" ? "true" : "false");
    return b;
  }

  products.forEach(function (p) { grid.appendChild(card(p)); });

  if (chipsBox) {
    chipsBox.appendChild(chip("all", "Todas"));
    categories.forEach(function (c) { chipsBox.appendChild(chip(c.id, c.label)); });
    chipsBox.hidden = products.length === 0;
  }

  // Filtro: só classList e data-attributes.
  UW.setFilter = function (id) {
    var shown = 0;
    grid.querySelectorAll(".product-card").forEach(function (c) {
      var hide = id !== "all" && c.dataset.category !== id;
      c.classList.toggle("is-hidden", hide);
      if (!hide) shown += 1;
    });
    if (chipsBox) {
      chipsBox.querySelectorAll("[data-filter]").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === id));
      });
    }
    if (empty) empty.hidden = shown > 0;
    if (count) count.textContent = shown === 1 ? "Mostrando 1 peça." : "Mostrando " + shown + " peças.";
  };

  UW.setFilter("all");
})();
