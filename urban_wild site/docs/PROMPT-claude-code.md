> **Em caso de conflito, vale o CLAUDE.md atualizado.** Este documento é o prompt original da primeira versão do site e está parcialmente desatualizado (paleta, voz, seções removidas).

Você vai construir do zero o site da Urban Wild, uma revenda independente de peças The North Face (novas e seminovas importadas dos EUA). Leia primeiro o `CLAUDE.md` da raiz (regras permanentes: stack, zero estilo inline, tokens, honestidade de conteúdo, como trabalhar comigo) e o PDF `docs/pesquisa-design-confianca-urban-wild.pdf` (pesquisa de design e confiança, com a especificação de design). Tudo o que está lá vale aqui; este prompt traz a tarefa.

## 1. Objetivo

Recriar, para a Urban Wild, a **estrutura, o ritmo e as interações** da home de https://ploy.ai, com a identidade, o conteúdo e o sistema de confiança da minha loja. O Ploy é um SaaS B2B, então o conteúdo, as cores escuras, as ilustrações e os textos dele não entram. Só entram os padrões de composição.

A tese do site: **a originalidade é a espinha dorsal, não um aviso**. Selo, nota de condição, processo e garantia aparecem da primeira dobra ao rodapé, sem tom defensivo.

Antes de qualquer código, abra https://ploy.ai com WebFetch e me devolva um resumo de até 8 linhas do que você vai adotar. Padrões que eu identifiquei e quero adaptados:

- Hero com uma headline curta, um CTA primário e um secundário, e vídeo/imagem de fundo discreto.
- Faixa em loop logo abaixo do hero (no Ploy são logos de clientes).
- Narrativa em três tempos curtos (Monitor / Act / Surface).
- Linha do tempo estilo "registro de atividade", com horário, categoria e uma frase por item, que entra item por item.
- Cards de recursos em grid.
- Blocos por tipo de público, cada um com bullets e CTA.
- CTA final de alto contraste, com microcopy de risco zero embaixo do botão.
- Rodapé em colunas.

## 2. Ativos que já estão na pasta (não recrie, não redesenhe)

Logo (use exatamente como está):
- `assets/images/brand/logo-dark.png`: logo completo preto, fundo transparente, para fundos claros.
- `assets/images/brand/logo-light.png`: logo completo branco, para fundos escuros e para o header transparente sobre o hero.
- `assets/images/brand/mark-dark.png` e `mark-light.png`: só o símbolo da montanha.
- `assets/images/brand/logo.svg` e `mark.svg`: vetores auto-traçados com `fill="currentColor"`. Prefira o PNG para o logo completo; o `mark.svg` só pode ser usado inline em preto ou branco (via `color` do CSS), nunca em outra cor.
- `assets/images/brand/icon-192.png`, `icon-512.png`, e na raiz `favicon.ico` e `apple-touch-icon.png` (todos com o símbolo branco sobre preto).
- **Regra de cor do logo (inegociável):** só preto `#000000` ou branco `#FFFFFF`, em qualquer lugar (header, rodapé, favicon, ícones, imagem de compartilhamento, hover, foco). Nunca verde, terracota, dourado ou outra cor, nem filtro/`opacity` que mude a cor. Fundo claro usa `logo-dark.png`; fundo escuro ou foto usa `logo-light.png`.
- Antes de usar, abra o logo e me diga em uma frase se a silhueta tem qualquer semelhança com a identidade da The North Face (já tive esse problema).

Foto do hero (montanha nevada com nuvens), todas com versão `.webp` e `.jpg` de fallback em `assets/images/hero/`:
- Desktop/tablet (2:1): `everest-800`, `everest-1200`, `everest-1774`. A de 1774 px é a maior disponível: não faça upscale.
- Mobile (4:5, recortada no pico): `everest-mobile-480`, `everest-mobile-709`.
- `everest-lqip.webp`: miniatura 40x20 para placeholder borrado.
- Use `<picture>` com `srcset`/`sizes` e `media` para trocar o recorte mobile. `<img>` com `fetchpriority="high"`, `width`/`height` e `alt` genérico ("Montanha nevada com nuvens ao fundo"). Não legende como lugar real.
- Por cima, overlay em gradiente de `--color-primary-dark` (mais denso embaixo) para garantir contraste 4,5:1 do texto. A foto é fria e azul; a paleta do site não é. O overlay verde faz a ponte.
- Animação: zoom lento (1.00 a 1.06 em ~30 s), desligado em `prefers-reduced-motion`.
- Deixe pronto, comentado e com `TODO`, o slot de `<video>` de fundo (`assets/video/`), usando a foto como `poster`. O vídeo ainda não existe.

Outros: `assets/images/og/og-image.jpg` (1200x630, para compartilhamento; logo branco sobre a foto escurecida com preto), `assets/images/products/placeholder.svg`, `assets/images/founder/founder-placeholder.svg`.

## 3. Estrutura de pastas

Já existe a árvore abaixo. Preencha, não reorganize:

urban-wild/
  CLAUDE.md
  index.html                        (criar)
  favicon.ico, apple-touch-icon.png (prontos)
  site.webmanifest                  (criar, usando icon-192 e icon-512)
  docs/
    PROMPT-claude-code.md
    pesquisa-design-confianca-urban-wild.pdf
    PRE-LAUNCH.md                   (criar: tudo que é provisório)
  assets/
    css/        tokens, base, layout, components, sections, utilities
    js/         main.js, header.js, reveal.js, products-render.js, tabs.js, filters.js
    js/data/    config.js, products.js
    images/     brand/, hero/, og/, products/, founder/
    video/      (vazio por enquanto)
    fonts/      (vazio; Google Fonts por enquanto)

## 4. Design

Tokens, tipografia e regras de contraste estão no `CLAUDE.md`; crie o `tokens.css` a partir dali. Adicione escala de espaçamento (4/8/12/16/24/32/48/64/96), raios pequenos (4–8 px, visual rústico, não "pílula"), sombras discretas e o container de 1200 px.

Tamanhos de texto: H1 `clamp(2.25rem, 1.2rem + 5vw, 4rem)` em Bebas Neue; subtítulo `clamp(1.125rem, 2.5vw, 1.5rem)`; corpo 16–18 px; legenda 13–14 px.

Header: faixa fina superior (TrustBar) + barra principal sticky. No topo da página sobre o hero ele é transparente com `logo-light`; ao rolar (> 10 px) ganha fundo `--color-bg`, sombra sutil e troca para `logo-dark`. Menu: Peças, Como verificamos, Escala de condição, Sobre, Garantia. À direita, botão "WhatsApp" (terracota-strong). **Sem carrinho e sem busca**: é vitrine. No mobile, menu hambúrguer acessível (botão com `aria-expanded`, foco preso, Esc fecha).

Animações: reveal de seções (fade + deslocamento de 24 px, 500 ms, via IntersectionObserver, uma vez só); hover de card com leve elevação e zoom de 3% na foto; sem parallax. Tudo desligado em `prefers-reduced-motion`.

Ícones: SVG inline em sprite `<symbol>` no topo do `<body>`, referenciado por `<use href="#icon-...">`. Nada de emoji como ícone.

## 5. Seções da home, na ordem

1. **TrustBar** (faixa fina): "Originalidade garantida por escrito · Nota de condição em cada peça · Envio para todo o Brasil".
2. **Header** (acima).
3. **Hero**: eyebrow "Revenda de The North Face · Importação direta dos EUA". H1: "ORIGINAL DE VERDADE. COM NOTA E GARANTIA." Subtítulo: "Peças The North Face novas e seminovas, importadas e conferidas por mim, uma a uma, com nota de condição e garantia de originalidade por escrito." CTA primário "Ver peças disponíveis" (vai para `#pecas`), secundário "Como verificamos" (vai para `#como-verificamos`). Embaixo do CTA, microcopy: "Resposta direta de quem importou a peça · Envio para todo o Brasil". Faixa de números (stats) alimentada por `config.js`; só mostra o que estiver `confirmed: true`.
4. **Faixa em loop (marquee)**: "ORIGINAL VERIFICADO · NOTA DE CONDIÇÃO 1–10 · GARANTIA POR ESCRITO · IMPORTAÇÃO DIRETA DOS EUA · ENVIO PARA TODO O BRASIL". CSS puro, pausa em hover/foco, conteúdo duplicado com `aria-hidden`, estática em `prefers-reduced-motion`.
5. **Autenticidade em 4 pilares** (grid de cards): Procedência rastreada / Inspeção peça a peça / Nota de condição / Registro fotográfico real. Ao lado ou acima, o `AuthenticityBadge` em destaque ("Verificado pela Urban Wild"). Texto honesto: descreve o que eu realmente faço (compra nos EUA, conferência de tecido, costuras, acabamento e etiqueta interna, nota, fotos reais). Nada de zíper nem logo.
6. **Peças em destaque** (`id="pecas"`): grid de 2 colunas no mobile, 3 no tablet, 4 no desktop; foto em 4:5; filtro por categoria com chips (Todas, Jaquetas, Mochilas, Acessórios, Calçados) em JS puro. `ProductCard`: foto, selo "Verificado", `ConditionBadge` (medidor + "8,5/10"), nome, tamanho, preço em R$ (`Intl.NumberFormat('pt-BR')`) e dois botões: "Comprar no Enjoei" e "Chamar no WhatsApp" (mensagem pré-preenchida com nome e nota da peça). Status `reservado`/`vendido` muda o card (selo e botões desativados). Dados vêm de `assets/js/data/products.js`.
7. **Como verificamos** (`id="como-verificamos"`): à esquerda `StepProcess` com 4 etapas numeradas; à direita um cartão `VerificationLog` no estilo do registro de atividade do Ploy: linha do tempo de **uma peça de exemplo** com horário, etapa e frase curta (compra nos EUA, chegada, conferência, nota atribuída, fotos, publicada). Os itens entram um a um no scroll. O cartão traz o rótulo fixo "Exemplo ilustrativo do meu registro" até eu trocar por uma peça real. Não finja dados em tempo real.
8. **Escala de condição** (`id="escala-condicao"`): `ConditionScale` com as 5 faixas definidas no `CLAUDE.md`, cada uma com o medidor visual, nome e uma linha de critério. Eu ainda não defini os critérios por escrito nem as faixas abaixo de 8,5: use critérios provisórios claramente marcados no `PRE-LAUNCH.md` e esconda as faixas abaixo de 8,5 até eu responder. Abaixo, um aviso: "Peças usadas sempre têm fotos de cada detalhe de desgaste".
9. **Para quem é** (blocos por público, estilo Enterprise/Agencies/Startups do Ploy, em abas acessíveis com `role="tablist"`): "Trekking e montanha", "Urbano-outdoor", "Presente". Cada aba: 3 bullets e um CTA que filtra o grid de peças. Na aba de trekking cabe uma frase minha em primeira pessoa sobre ter feito o Kilimanjaro e El Chaltén e saber o que uma peça precisa aguentar.
10. **Prova social**: contadores e depoimentos só se `confirmed: true` em `config.js`. Enquanto não houver dado real, mostre um bloco honesto: "Minhas avaliações estão no Enjoei" com link para o perfil e para o Instagram. Prepare `TestimonialCard` e `SocialProofCounter` e um espaço para selos externos (Google, Reclame Aqui) que só aparece quando houver link.
11. **Sobre mim** (`id="sobre"`): foto do fundador (`founder-placeholder.svg` por enquanto), texto em primeira pessoa: quem eu sou, por que importo eu mesmo, trekking e montanhismo (Kilimanjaro, El Chaltén), o que significa "Verificado". Rosto humano é o contraponto direto ao vendedor anônimo de marketplace.
12. **Garantia e perguntas frequentes** (`id="garantia"`): `GuaranteeBlock` com a garantia de originalidade por escrito (rascunho) e a política de troca/devolução com base no CDC (rascunho, marque para validação). FAQ em `<details>`: "Como sei que é original?", "Por que o preço é menor que o da loja?" (explicar: peça seminova curada + importação direta, sem margem de shopping), "O que significa a nota?", "Como é o envio e o pagamento?", "Posso devolver?".
13. **CTA final**: fundo `--color-primary-dark`, headline "ENCONTRE SUA PRÓXIMA PEÇA", botão primário "Falar no WhatsApp", secundário "Ver no Enjoei", microcopy "Sem compromisso · Resposta direta · Envio para todo o Brasil".
14. **Rodapé** em colunas (Peças, Confiança, Urban Wild, Contato), links reais (seção 6), aviso legal de revenda independente não afiliada à The North Face, ano via JS, espaço comentado para CNPJ/endereço (`TODO`). Barra fixa de CTA no mobile (WhatsApp + Enjoei) que aparece só depois de passar do hero.

## 6. Dados reais e arquivos de dados

`assets/js/data/config.js` (global `window.UW_CONFIG`):
- `whatsapp`: `https://wa.me/5548988180974`
- `instagram`: `https://instagram.com/urbanwildtnf`
- `enjoei`: `https://enjoei.com.br/@urban-27db4c`
- `siteUrl`: `https://urbanwildtnf.com.br/`
- `stats`: lista de `{ value, label, confirmed }`. Valores candidatos que eu já usei antes: "800+ peças vendidas", "100% originais". Deixe `confirmed: false` em todos; eu confirmo.
- `testimonials`: lista vazia, cada item com `confirmed`.
- `conditionScale`: as 5 faixas conhecidas; faixas abaixo de 8,5 com `visible: false`.

`assets/js/data/products.js` (global `window.UW_PRODUCTS`): cada item tem `id`, `name`, `category`, `size`, `condition` (número), `conditionLabel`, `price`, `status` (`disponivel` | `reservado` | `vendido`), `images` (lista de `{ src, alt }`), `enjoeiUrl`, `placeholder`. Crie 4 itens de exemplo com `placeholder: true` (card mostra o selo "EXEMPLO"). Preços de exemplo são fictícios.

Componentes (BEM): `TrustBar`, `Header`, `AuthenticityBadge` (variações inline e destaque), `ConditionBadge` (classes `.meter-40` a `.meter-100` de 5 em 5, sem estilo inline), `ProductCard`, `StepProcess`, `VerificationLog`, `ConditionScale`, `AudienceTabs`, `GuaranteeBlock`, `FaqItem`, `TestimonialCard`, `SocialProofCounter`, `Marquee`, `Button` (primário terracota-strong, secundário contorno verde, variante escura), `Footer`, `MobileCtaBar`.

## 7. SEO e técnica

- `<html lang="pt-BR">`, `<title>` "Urban Wild | The North Face original, com nota de condição e garantia", meta description, `canonical`, Open Graph e Twitter Card com `og-image.jpg`, `theme-color #2D5016`, favicons e `site.webmanifest`.
- JSON-LD `Organization` (nome, url, logo, `sameAs` com Instagram e Enjoei). Sem `AggregateRating` nem `Review` até haver avaliações reais.
- Sem trackers por enquanto. Deixe um comentário `TODO` para GA4/Meta Pixel (com aviso de consentimento/LGPD).
- Todos os links externos com `rel="noopener noreferrer"` e `target="_blank"`.

## 8. Como conduzir

1. Leia `CLAUDE.md` e o PDF; liste os arquivos de `assets/` e abra o logo e a foto do hero para confirmar que estão como descrito.
2. Faça o resumo do Ploy (seção 1).
3. **Pare e me entregue o plano**: árvore final de arquivos, as seções acima com o que muda em cada uma, suas suposições e, numa única pergunta agrupada, o que depende de mim (faixas de condição abaixo de 8,5 e seus critérios, estatísticas confirmadas, foto minha para a seção Sobre, texto de garantia/troca). Suposições que já assumo, para você não perguntar: o site é vitrine (compra no Enjoei/WhatsApp) e v1 é uma página única com âncoras. Espere minha aprovação.
4. Construa em etapas, com um commit por etapa: (a) tokens, base, header, hero, marquee; (b) pilares, peças, filtros; (c) como verificamos, escala, abas; (d) prova social, sobre, garantia, FAQ, CTA final, rodapé; (e) acessibilidade, performance, SEO. Mostre o resultado a cada etapa antes de seguir.
5. Rode um servidor local (`python3 -m http.server 8080`, ou o que for mais simples) e verifique no navegador em 375 px, 768 px e 1280 px.
6. Verificação final: zero `style=` e zero `<style>` (`grep`); zero `.style.` nos scripts; todo `<img>` com `alt`, `width` e `height`; contraste dos botões; navegação por teclado; reduced-motion; links reais; peso do JS. Se houver Lighthouse disponível, rode no perfil mobile e me traga as notas.
7. Gere `docs/PRE-LAUNCH.md` com tudo que ainda é provisório: produtos de exemplo, textos de garantia/troca, critérios das notas, números não confirmados, foto do hero (ver abaixo), foto do fundador, CNPJ/endereço, analytics.

Sobre a foto do hero: o nome original do arquivo ("ChatGPT_Image") indica que a imagem foi gerada por IA, e o pico parece mais o Ama Dablam do que o Everest. Registre no `PRE-LAUNCH.md` que o ideal é trocar por uma foto minha de expedição (Kilimanjaro ou El Chaltén), em resolução mínima de 2400 px de largura.

Quando houver erro de setup, aplique a regra do `CLAUDE.md`: explique a causa e me dê o passo a passo, sem corrigir em silêncio.
