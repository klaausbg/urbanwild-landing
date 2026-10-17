# Antes de publicar: tudo que ainda é provisório

Marque cada item quando estiver resolvido.

## Droper e Enjoei
- [x] **Link do perfil da Urban Wild na Droper**: já está em `droper.url` (`assets/js/data/config.js`) e nos links do `index.html`. Se o link mudar, trocar nos dois lugares. Se ficar vazio, os botões da Droper somem.
- [ ] **Link de cada peça real**: preencher `droperUrl` e/ou `enjoeiUrl` em cada peça de `products.js`. Cada botão só aparece se a peça tiver o link.
- [ ] **Texto da Droper** (`droper.copy` em `config.js`): conferir se bate com o que a Droper afirma. Não pode dizer que "todas as compras são autenticadas". O Enjoei só recebe números, nenhuma afirmação de autenticação.
- [ ] **JSON-LD** (`index.html`): `sameAs` tem Instagram, Droper e Enjoei.

## Compra direta, encomendas e camping (pendências de informação)
- [ ] **Formas de pagamento e prazos da compra direta**: não estão no site (nada foi inventado). Se quiser divulgar, informar e incluir no texto da seção "Compre direto com a Urban Wild" e no FAQ.
- [ ] **Política de envio das encomendas**: o site diz só que o cliente recebe valor e data de entrega na resposta. Informar prazos, frete e como é feita a confirmação, se quiser publicar.
- [ ] **Lista real de equipamentos de camping**: hoje são 4 cards genéricos (mochila cargueira, barraca, saco de dormir, comunicadores por satélite e GPS, com a menção ao Garmin inReach Mini). Conferir se a lista está certa e se alguma marca ou modelo pode ser citado. Editar em `camping` (`config.js`).
- [ ] **Mensagens prontas do WhatsApp** (`whatsappMessages` em `config.js`): conferir os textos.
- [ ] **Marca de cada peça** (`brand` em `products.js`): preencher nas peças reais (The North Face, Patagonia ou outra).
- [ ] **URL do perfil da Droper**: já preenchida (`droper.url`). Conferir se continua a mesma.

## Números
- [ ] **Conferir e atualizar estes números antes de publicar e de tempos em tempos** (`stats` em `config.js`, informados em 10/2026): mais de 1.000 itens vendidos (Enjoei + Droper), mais de 660 vendas e 295 avaliações 5 estrelas no Enjoei, 4,95 na Droper, 5 estrelas no Enjoei. Eles aparecem no hero, na TrustBar, na faixa em loop, em "Onde comprar", no FAQ e no CTA final, todos puxados de `config.js`. Com `confirmed: false`, os blocos com números somem.

## Depoimentos
- [ ] **Depoimentos**: a lista `testimonials` em `config.js` está vazia, então a seção "O que dizem os clientes" não aparece. Substituir por avaliações reais do Enjoei/Droper (com autorização do cliente) e marcar `confirmed: true`. Só aparecem os confirmados. Não usar cidade nem nome inventados.

## Conteúdo de exemplo
- [ ] **Peças de teste** (`products.js`, `placeholder: true`): só aparecem em localhost, 127.0.0.1 e `file:`. No site publicado ficam ocultas e o grid mostra "Novas peças em breve." Cadastrar as peças reais (ver `docs/COMO-ATUALIZAR-PECAS.md`).
- [ ] **Fotos das peças**: trocar `placeholder.svg` por fotos reais em `assets/images/products/`.

## Imagens
- [ ] **Foto do hero**: o nome original do arquivo ("ChatGPT_Image") indica imagem gerada por IA, e o pico parece mais o Ama Dablam do que o Everest. O ideal é trocar por uma foto real, com no mínimo 2400 px de largura. Está em preto e branco por `--hero-image-filter` (`tokens.css`); `none` devolve a cor. O alt continua genérico.
- [ ] **Vídeo de fundo do hero**: slot comentado em `index.html` (procure `TODO: vídeo`). Salvar em `assets/video/`.
- [ ] **Imagem de compartilhamento** (`og-image.jpg`): em escala de cinza. Conferir como aparece no WhatsApp/Instagram.

## Dados legais e técnicos
- [ ] **CNPJ, razão social e endereço**: espaço comentado no rodapé (`TODO` em `index.html`).
- [ ] **Analytics** (GA4 / Meta Pixel): não instalado. Se instalar, incluir aviso de cookies/consentimento (LGPD).
- [ ] **Domínio**: `canonical`, Open Graph e JSON-LD usam `https://urbanwildtnf.com.br/`. Conferir se aponta para o site.
- [ ] **Fontes**: carregadas do Google Fonts. Opcional: hospedar em `assets/fonts/`.
- [ ] **Lighthouse mobile**: rodar no Chrome (DevTools > Lighthouse) com o site publicado.
