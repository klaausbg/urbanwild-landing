/* Ponto de entrada: links e textos vindos do config, números, blocos de conteúdo, barra mobile, marquee. */
(function () {
  var UW = window.UW || {};
  var cfg = window.UW_CONFIG || {};
  var droper = cfg.droper || {};
  var stats = cfg.stats || {};
  var el = UW.el;
  var icon = UW.icon;

  // Links externos a partir do config (o HTML já traz o mesmo valor como reserva).
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var key = a.getAttribute("data-link");
    var url = key === "droper" ? droper.url : cfg[key];
    if (url) a.setAttribute("href", url);
  });

  // Botões de WhatsApp com mensagem pronta (config.whatsappMessages).
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    var msg = cfg.whatsappMessages && cfg.whatsappMessages[a.getAttribute("data-wa")];
    if (msg) a.setAttribute("href", cfg.whatsapp + "?text=" + encodeURIComponent(msg));
  });

  // Elementos da Droper só aparecem quando houver URL.
  document.querySelectorAll("[data-droper-only]").forEach(function (node) {
    node.hidden = !droper.url;
  });

  // Textos da Droper (editáveis em config.js).
  document.querySelectorAll("[data-droper-copy]").forEach(function (node) {
    var text = droper.copy && droper.copy[node.getAttribute("data-droper-copy")];
    if (text) node.textContent = text;
  });

  // Números: um só lugar (config.stats). Sem confirmed, os blocos com números somem.
  document.querySelectorAll("[data-stat]").forEach(function (node) {
    var value = stats[node.getAttribute("data-stat")];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-needs-stats]").forEach(function (node) {
    node.hidden = stats.confirmed !== true;
  });

  // Diferenciais.
  var benefits = document.querySelector("[data-benefits]");
  if (benefits) {
    (cfg.benefits || []).forEach(function (b) {
      var card = el("li", "benefit-card");
      var ic = icon(b.icon);
      ic.classList.add("benefit-card__icon");
      card.appendChild(ic);
      card.appendChild(el("h3", "benefit-card__title", b.title));
      card.appendChild(el("p", "benefit-card__text", b.text));
      benefits.appendChild(card);
    });
  }

  // Camping: só ícone, título e linha curta.
  var camp = document.querySelector("[data-camping]");
  if (camp) {
    (cfg.camping || []).forEach(function (c) {
      var card = el("li", "category-card");
      var ic = icon(c.icon);
      ic.classList.add("category-card__icon");
      card.appendChild(ic);
      card.appendChild(el("h3", "category-card__title", c.title));
      if (c.text) card.appendChild(el("p", "category-card__text", c.text));
      camp.appendChild(card);
    });
  }

  // Categorias.
  var cats = document.querySelector("[data-category-cards]");
  if (cats) {
    (cfg.categories || []).forEach(function (c) {
      var card = el("li", "category-card");
      var ic = icon(c.icon);
      ic.classList.add("category-card__icon");
      card.appendChild(ic);
      card.appendChild(el("h3", "category-card__title", c.label));
      card.appendChild(el("p", "category-card__text", c.text));
      var link = el("a", "category-card__link", "Ver peças");
      link.href = "#pecas";
      link.setAttribute("data-apply-filter", c.id);
      link.setAttribute("aria-label", "Ver peças: " + c.label);
      link.appendChild(icon("arrow-right"));
      card.appendChild(link);
      cats.appendChild(card);
    });
  }

  // Depoimentos: só com confirmed: true. Sem nenhum, a seção sai do HTML.
  var tSection = document.querySelector("[data-testimonials-section]");
  if (tSection) {
    var ok = (cfg.testimonials || []).filter(function (t) { return t.confirmed === true; });
    if (!ok.length) {
      tSection.remove();
    } else {
      var tGrid = tSection.querySelector("[data-testimonials]");
      ok.forEach(function (t) {
        var card = el("figure", "testimonial-card");
        card.appendChild(el("p", "testimonial-card__stars text-silver", "★★★★★"));
        card.appendChild(el("blockquote", "testimonial-card__quote", t.quote));
        var who = el("figcaption", "testimonial-card__who");
        who.appendChild(el("span", "testimonial-card__initial", t.name.charAt(0)));
        var info = el("span", "testimonial-card__info");
        info.appendChild(el("span", "testimonial-card__name", t.name));
        if (t.city) info.appendChild(el("span", "testimonial-card__city", t.city));
        who.appendChild(info);
        card.appendChild(who);
        tGrid.appendChild(card);
      });
    }
  }

  // Ano do rodapé.
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  // Barra de CTA mobile: aparece só depois de passar do hero.
  var bar = document.querySelector("[data-cta-bar]");
  var hero = document.querySelector(".hero");
  if (bar && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      bar.classList.toggle("is-visible", !entries[0].isIntersecting);
    }).observe(hero);
  }

  // Marquee: botão de pausa.
  var marquee = document.querySelector("[data-marquee]");
  var btn = marquee && marquee.querySelector(".marquee__toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      var paused = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", String(paused));
      btn.setAttribute("aria-label", paused ? "Retomar animação da faixa" : "Pausar animação da faixa");
      marquee.classList.toggle("is-paused", paused);
    });
  }
})();
