/* Dados do site (global UW_CONFIG). Para atualizar números, links e textos, mexa só aqui. */
window.UW_CONFIG = {
  whatsapp: "https://wa.me/5548988180974",
  instagram: "https://instagram.com/urbanwildtnf",
  enjoei: "https://enjoei.com.br/@urban-27db4c",
  siteUrl: "https://urbanwildtnf.com.br/",

  // Números do site: um só lugar. Se confirmed ficar false, os blocos com números somem.
  stats: {
    confirmed: true,
    source: "informado pelo dono em 10/2026",
    itemsSold: "1.000",     // itens vendidos, somando Enjoei e Droper (mostrado como "mais de")
    enjoeiSales: "660",     // vendas no Enjoei (mostrado como "mais de")
    enjoeiReviews: "295",   // avaliações 5 estrelas no Enjoei
    droperRating: "4,95",   // reputação dada pelos clientes na Droper
    enjoeiRating: "5"       // estrelas no Enjoei
  },

  // Droper (perfil da Urban Wild). Se url ficar vazia, os botões da Droper somem.
  droper: {
    url: "https://droper.app/store/urban-wild-tnf",
    copy: {
      eyebrow: "Onde comprar",
      title: "Onde comprar",
      text: "As peças da Urban Wild são vendidas pela Droper, marketplace brasileiro de moda e sneakers em que todo anúncio passa por verificação antes de ser publicado e itens de alto valor recebem autenticação adicional de especialistas.",
      button: "Ver a Urban Wild na Droper",
      note: "A verificação segue a política da Droper."
    }
  },

  // Diferenciais (6 cards). icon = id do ícone no sprite do index.html (sem o prefixo icon-).
  benefits: [
    { icon: "shield-check", title: "Peças originais", text: "Todas as peças são importadas e originais, de marcas como The North Face e Patagonia." },
    { icon: "magnifier", title: "Curadoria rigorosa", text: "Cada peça é avaliada individualmente antes de ser anunciada. Só entram peças em bom estado, sem defeitos relevantes." },
    { icon: "tag", title: "Preço justo", text: "Bem abaixo do varejo tradicional. Roupas outdoor premium sem o preço de shopping center." },
    { icon: "layers", title: "Novas e usadas", text: "Peças novas com etiqueta e seminovas em ótimo estado: mais opções, mais acessibilidade." },
    { icon: "truck", title: "Envio nacional", text: "Envio para todo o Brasil, com embalagem cuidadosa e código de rastreamento." },
    { icon: "chat", title: "Atendimento direto", text: "Atendimento direto pelo Instagram e WhatsApp, sem robôs e com agilidade." }
  ],

  // Categorias: id é o valor de "category" em products.js.
  categories: [
    { id: "puffer", label: "Puffers", icon: "snowflake", text: "Jaquetas com isolamento térmico para frio intenso, trilhas de altitude e destinos gelados." },
    { id: "fleece", label: "Fleeces", icon: "waves", text: "Conforto e leveza para dias frios. Camada intermediária ou uso casual com estilo outdoor." },
    { id: "impermeavel", label: "Impermeáveis", icon: "drop", text: "Jaquetas shell e hardshell para chuva e vento." },
    { id: "camiseta", label: "Camisetas", icon: "tshirt", text: "Básicas, técnicas e de coleções especiais. Para trilhas, viagens ou o look casual outdoor." },
    { id: "mochila-acessorio", label: "Mochilas e acessórios", icon: "backpack", text: "Mochilas técnicas e acessórios para complementar o setup outdoor ou urbano." }
  ],

  // Mensagens prontas do WhatsApp (texto puro; o site aplica encodeURIComponent).
  // {name} é trocado pelo nome da peça.
  whatsappMessages: {
    product: "Olá! Tenho interesse na peça \"{name}\" que vi no site da Urban Wild.",
    direct: "Olá! Vi o site da Urban Wild e quero comprar direto. Peça: ",
    order: "Olá! Quero fazer uma encomenda. Item desejado: ",
    camping: "Olá! Quero saber sobre equipamentos de camping. Item de interesse: "
  },

  // Equipamentos de camping e trekking (só ícone, título e linha curta; sem produtos fictícios).
  camping: [
    { icon: "backpack", title: "Mochila cargueira", text: "" },
    { icon: "tent", title: "Barraca", text: "" },
    { icon: "sleeping-bag", title: "Saco de dormir", text: "" },
    { icon: "compass", title: "Comunicadores por satélite e GPS", text: "Aparelhos como o Garmin inReach Mini." }
  ],

  // Depoimentos: só aparecem os com confirmed: true. Sem nenhum, a seção sai da página.
  // Modelo: { quote: "texto", name: "Nome S.", city: "Cidade", confirmed: false }
  testimonials: []
};
