# Como adicionar ou remover uma peça

As peças ficam todas em um único arquivo de texto: `assets/js/data/products.js`. Não precisa de terminal.

## O que você vai precisar
- Um editor de texto. O mais simples no Mac é o **TextEdit**, mas ele precisa estar em modo texto puro (veja abaixo). Se tiver o **Visual Studio Code**, melhor ainda.
- A foto da peça (JPG ou WebP, de preferência na proporção 4:5, retrato).
- O link da peça na Droper.

## Passo a passo: adicionar uma peça

1. **Coloque a foto na pasta certa.** No Finder, abra a pasta do site e vá em `assets` > `images` > `products`. Arraste a foto para dentro. Use um nome simples, sem espaço e sem acento, por exemplo `jaqueta-azul-m.jpg`.
2. **Abra o arquivo das peças.** No Finder, vá em `assets` > `js` > `data`. Clique com o botão direito em `products.js` > **Abrir com** > o seu editor.
   - No TextEdit: se o arquivo abrir formatado, use o menu **Formatar > Tornar texto simples** antes de editar.
3. **Copie um bloco de peça.** Cada peça é um bloco entre chaves `{ ... }`, separado do próximo por uma vírgula. Selecione um bloco inteiro (do `{` até o `}` e a vírgula), copie e cole logo abaixo.
4. **Troque os dados do bloco novo:**
   - `id`: um nome único, sem espaço (ex.: `jaqueta-azul-m`).
   - `name`: o nome que aparece no card.
   - `brand`: a marca da peça, entre aspas (ex.: `"The North Face"` ou `"Patagonia"`). Aparece como linha pequena no card.
   - `category`: escolha **uma** destas, escrita exatamente assim, em minúsculas: `puffer`, `fleece`, `impermeavel`, `camiseta` ou `mochila-acessorio`.
   - `size`: o tamanho (ex.: `"M"`, `"42"`, `"Único"`).
   - `price`: só o número, sem R$ e com ponto nos centavos (ex.: `899` ou `899.9`).
   - `images`: troque o `src` pelo caminho da foto (ex.: `assets/images/products/jaqueta-azul-m.jpg`) e escreva no `alt` uma descrição curta da foto.
   - `droperUrl`: o link da peça na Droper, entre aspas. Se a peça não estiver na Droper, deixe `""` (vazio) e o botão não aparece.
   - `enjoeiUrl`: o link da peça no Enjoei, entre aspas. Também pode ficar `""` (vazio) e o botão não aparece.
   - `placeholder`: deixe `false` (peça real). `true` é só para peça de teste, que fica oculta no site publicado.
5. **Salve** com **Cmd + S**.
6. **Confira.** Abra o `index.html` com duplo clique (ou peça ao Claude para abrir no painel Browser) e veja a peça na seção "Peças disponíveis".

## Passo a passo: remover uma peça (vendida, por exemplo)

1. Abra `products.js` como acima.
2. Apague o bloco inteiro da peça, do `{` até o `}` e a vírgula do final.
3. Salve com **Cmd + S** e confira no site.

## Cuidados
- Mantenha as aspas `"` e as vírgulas como estão nos outros blocos. Uma vírgula esquecida ou a mais faz as peças sumirem.
- O último bloco da lista não leva vírgula depois do `}`.
- Se as peças sumirem depois de uma edição, desfaça com **Cmd + Z** ou peça ao Claude para conferir o arquivo.
- Sem peças reais cadastradas (ou numa categoria sem peças), o site mostra "Novas peças em breve." no endereço publicado.
- As categorias e seus textos ficam em `assets/js/data/config.js` (bloco `categories`). O valor de `category` da peça precisa ser igual ao `id` da categoria.

## Onde mudar o link da Droper e o texto da seção
No arquivo `assets/js/data/config.js`, bloco `droper`: `url` (link do perfil) e `copy` (textos do cartão da Droper). Se `url` ficar vazio, os botões da Droper ficam ocultos.

## Onde mudar os números (vendas e reputação)
No mesmo `config.js`, bloco `stats`: `itemsSold`, `enjoeiSales`, `enjoeiReviews`, `droperRating` e `enjoeiRating`. Mudou ali, muda no site inteiro.
