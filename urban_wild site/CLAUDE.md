# Urban Wild: regras permanentes do projeto

Site da **Urban Wild**, revenda independente de **roupas outdoor importadas, principalmente The North Face e Patagonia** (novas e seminovas). Canais de venda: Droper, Enjoei, **compra direta por WhatsApp e Instagram**, **encomendas** e **equipamentos de camping e trekking** (consulta por WhatsApp/Instagram). Droper e Enjoei têm cartões na seção "Onde comprar"; compra direta, encomendas e camping têm seções próprias. A Droper não é citada acima da seção "Onde comprar" (hero, TrustBar, marquee).

**Objetivo do site:** vitrine premium, preta e branca, que reúne as peças e leva o cliente à compra direta (WhatsApp/Instagram), à Droper ou ao Enjoei. Sem carrinho, sem checkout, sem busca.

## Stack e arquitetura
- HTML + CSS + JS puro. Sem framework, sem bundler, sem dependências de runtime.
- Scripts clássicos com `defer` (nada de ES modules), para o `index.html` abrir tanto por duplo clique quanto por servidor local.
- Dados em arquivos globais: `assets/js/data/config.js` e `assets/js/data/products.js`.
- CSS em `assets/css/`: `tokens.css`, `base.css`, `layout.css`, `components.css`, `sections.css`, `utilities.css`.
- Classes em BEM, em inglês (`product-card__title`). Textos do site em português do Brasil.
- Mobile-first. Breakpoints: base até 640px; tablet a partir de 641px; desktop a partir de 1025px. Container máx. 1200px.

## Regra de ouro de CSS
**Zero estilos inline.** Nenhum atributo `style=""`, nenhum bloco `<style>` no HTML e nenhum `element.style...` no JS. Todo estilo vem de `assets/css/`. Em JS, só `classList`/`dataset`.

## Paleta: só preto, branco e cinzas neutros
- Todas as cores da página são neutras (R=G=B). **A única cor permitida é o verde do selo de verificado** (`--color-verified #168A45`, círculo verde com check branco), em nenhum outro lugar.
- Proibido: terracota/laranja, dourado, bege, verde-floresta, areia/creme e qualquer tom quente ou frio. Estrelas, ícones, títulos de destaque e linhas usam branco, cinza ou o degradê prata.
- **Sem emojis** no site inteiro. Ícones são SVG inline de traço fino (`stroke="currentColor"`, sem `style`), brancos ou prata. As estrelas são o texto ★ em prata.
- Tokens (fonte única: `tokens.css`): `--color-ink #0A0A0A`, `--color-black #000000`, `--color-graphite-900 #141414`, `--color-graphite-800 #1C1C1C`, `--color-graphite-700 #2A2A2A`, `--color-white #FFFFFF`, `--color-paper #F4F4F4`, `--silver-gradient`.
- Texto: branco sobre escuro; `#A3A3A3` como secundário sobre escuro; `#0A0A0A` sobre claro; `#595959` como secundário sobre `#F4F4F4`.
- Ritmo: fundo predominante preto, com 2 ou 3 seções em branco/`#F4F4F4`.
- Acabamento premium só com CSS externo e tons de cinza: prata (`--silver-gradient`) em uma palavra por título, brilho suave, reflexo (sheen) no hover, hairlines, grão sutil, header em vidro fosco, borda de luz no cartão da Droper. Tudo desligado em `prefers-reduced-motion`.
- Foto do hero em preto e branco via `--hero-image-filter` (trocar por `none` devolve a cor).

## Logo: somente preto e branco
O logo existe apenas em **preto (`#000000`)** ou **branco (`#FFFFFF`)**. Nunca tingir, nem em favicon, ícones, imagem de compartilhamento, hover ou foco. Sem filtros, `opacity` ou `mix-blend-mode` que alterem a cor do logo.
- Fundo escuro ou foto: `logo-light.png`. Fundo claro: `logo-dark.png`.

## Voz e conteúdo
1. **Só a loja, em terceira pessoa** ("A Urban Wild reúne..."). Evitar "nós/nosso/vendemos/temos". Nada de "eu/meu/minha". Dizer "os clientes", não "nossos clientes".
2. **Nenhuma informação pessoal do dono**: sem nome, foto, credenciais de trilha ou montanhismo, cidade. Sem seção "Sobre". JSON-LD só `Organization`.
3. **Peças importadas, sem dizer de onde**: nunca citar país de origem, lojas ou marketplaces de compra (nem em texto, alt, meta, JSON-LD ou comentário). Dizer apenas "peças importadas".
4. **Nada de nota de condição, escala, "x/10", garantia por escrito/de autenticidade, "dinheiro de volta", CDC, "Como verificamos" nem pilares de autenticidade.** Não escrever "rastreamento em tempo real" nem "nenhum produto falso".
5. **Droper, só com o que ela afirma**: marketplace brasileiro de moda e sneakers em que todo anúncio passa por verificação antes de ser publicado e itens de alto valor recebem autenticação adicional de especialistas. Nunca escrever "todas as compras são autenticadas". Só o nome em texto, sem logos. A verificação segue a política da Droper. **O Enjoei não recebe nenhuma afirmação de autenticação, só os números.**
6. **Números** (só em `config.js`, objeto `stats`, com `confirmed` e `source`): 1.000 itens vendidos (Enjoei + Droper), 660 vendas e 295 avaliações 5 estrelas no Enjoei, 4,95 na Droper, 5 estrelas no Enjoei. Informados pelo dono em 10/2026; conferir de tempos em tempos. Nada de outros números, contadores ou depoimentos inventados.
7. **Depoimentos**: só aparecem com `confirmed: true` em `config.js`. Sem nenhum confirmado, a seção sai do HTML. Sem selo "VERIFICADO" nos depoimentos.
8. A Urban Wild é revenda independente, sem afiliação com The North Face, Patagonia ou outras marcas citadas. O rodapé traz o aviso (as marcas pertencem aos seus donos). "The North Face" e "Patagonia" aparecem só como marcas vendidas, nunca como nome da loja.
9. Nunca legendar a foto do hero como lugar real. O alt é genérico ("Montanha nevada com nuvens ao fundo").
10. Nunca mencionar zíper/zíperes nem a logo/ícone da marca nas descrições.

## Ordem da home
Hero, Marquee, Diferenciais, Categorias, Peças, Camping, Onde comprar, Compra direta, Encomendas, Missão ("Sobre a loja"), Depoimentos (condicional), Para quem é, FAQ, CTA final, Rodapé. Menu: Peças, Camping, Onde comprar, Encomendas, Perguntas + botão WhatsApp.

## Compra direta, encomendas e camping
- Não prometer preço menor (só "pode ficar menor"), nem formas de pagamento, prazos, marcas, modelos, preços ou estoque que o dono não informou. Pendências vão para `docs/PRE-LAUNCH.md`.
- Camping: só ícone, título e uma linha curta; sem cards de produtos fictícios. Dados em `config.js` (`camping`).
- Mensagens prontas do WhatsApp ficam em `config.js` (`whatsappMessages`) e são codificadas com `encodeURIComponent` no JS.

## Peças (`products.js`)
- Campos: `id`, `name`, `brand` (texto livre, ex.: The North Face, Patagonia), `category` (puffer, fleece, impermeavel, camiseta, mochila-acessorio), `size`, `price`, `images`, `droperUrl`, `enjoeiUrl`, `placeholder`. Sem status, sem nota. Peça vendida sai do arquivo.
- Peças de exemplo (`placeholder: true`) só aparecem em localhost, 127.0.0.1 e `file:`. Em produção ficam ocultas, e sem peças reais o grid diz "Novas peças em breve.". Sem etiqueta de exemplo.
- Botões "Comprar na Droper" e "Comprar no Enjoei" (cada um só aparece se a peça tiver o link) e WhatsApp.
- Filtro de categorias só com `classList` e `data-*`; categoria vazia mostra "Novas peças em breve.".
- Tudo que for provisório entra em `docs/PRE-LAUNCH.md`.

## Tipografia
**Bebas Neue** (títulos, caixa-alta) + **Inter** (corpo 400/500/600/700). Eyebrows em Inter caixa-alta com espaçamento largo. Google Fonts com `preconnect` e `display=swap`.

## Qualidade mínima
- Acessibilidade: landmarks, skip link, foco visível, `prefers-reduced-motion` respeitado, alvos de toque ≥ 44px, `alt` em toda imagem, tabs/accordion/menu com ARIA correto, contraste AA.
- Performance (mobile): LCP < 2,5 s, CLS < 0,1, JS total < 30 KB, imagens com `width`/`height`, `loading="lazy"` abaixo da dobra.
- Sem parallax. Reveal suave (fade + 24px) e hover sutil.

## Como trabalhar com o dono
- O dono usa só Mac e não usa terminal: o Claude roda os comandos (git, servidor local) e explica em uma frase. Quando o dono precisar fazer algo, dar passos com mouse (Finder, menus do app). O site é mostrado no painel Browser do app.
- Erros de setup: explicar a causa e, se o dono pedir, corrigir. Terminar respostas a dúvidas com um passo a passo claro.
- Commits pequenos e em português, um por etapa concluída.
