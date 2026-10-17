/* Peças (global UW_PRODUCTS). Os itens com placeholder: true são peças fictícias:
   só aparecem em localhost, 127.0.0.1 e file:. Para uma peça real, copie um bloco, troque os
   dados e use placeholder: false. Peça vendida: apague o bloco. Ver docs/COMO-ATUALIZAR-PECAS.md
   brand: texto livre (ex.: The North Face, Patagonia)
   category: puffer | fleece | impermeavel | camiseta | mochila-acessorio
   droperUrl / enjoeiUrl: cada botão só aparece se o link existir. */
window.UW_PRODUCTS = [
  {
    id: "teste-puffer-01",
    name: "Jaqueta puffer (teste)",
    brand: "The North Face",
    category: "puffer",
    size: "M",
    price: 1299,
    images: [{ src: "assets/images/products/placeholder.svg", alt: "Foto da peça em breve" }],
    droperUrl: "https://droper.app/store/urban-wild-tnf",
    enjoeiUrl: "https://www.enjoei.com.br/",
    placeholder: true
  },
  {
    id: "teste-fleece-01",
    name: "Fleece (teste)",
    brand: "Patagonia",
    category: "fleece",
    size: "G",
    price: 449,
    images: [{ src: "assets/images/products/placeholder.svg", alt: "Foto da peça em breve" }],
    droperUrl: "https://droper.app/store/urban-wild-tnf",
    enjoeiUrl: "",
    placeholder: true
  },
  {
    id: "teste-impermeavel-01",
    name: "Jaqueta impermeável (teste)",
    brand: "The North Face",
    category: "impermeavel",
    size: "P",
    price: 899,
    images: [{ src: "assets/images/products/placeholder.svg", alt: "Foto da peça em breve" }],
    droperUrl: "",
    enjoeiUrl: "https://www.enjoei.com.br/",
    placeholder: true
  },
  {
    id: "teste-camiseta-01",
    name: "Camiseta (teste)",
    brand: "Patagonia",
    category: "camiseta",
    size: "M",
    price: 149,
    images: [{ src: "assets/images/products/placeholder.svg", alt: "Foto da peça em breve" }],
    droperUrl: "https://droper.app/store/urban-wild-tnf",
    enjoeiUrl: "https://www.enjoei.com.br/",
    placeholder: true
  },
  {
    id: "teste-mochila-01",
    name: "Mochila de trilha (teste)",
    brand: "The North Face",
    category: "mochila-acessorio",
    size: "Único",
    price: 349,
    images: [{ src: "assets/images/products/placeholder.svg", alt: "Foto da peça em breve" }],
    droperUrl: "https://droper.app/store/urban-wild-tnf",
    enjoeiUrl: "",
    placeholder: true
  }
];
