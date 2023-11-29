const productData = [
  {
    id: 1,
    title: "Iphone 14 Pro Max",
    price: 1299,
    images: [
      {
        url: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    images2: [
      {
        url: "https://s.yimg.com/uu/api/res/1.2/Y0sdCqqSrXzmtFWgzjwgZg--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-09/280da9d0-33d8-11ed-beeb-9f0777e02779.cf.jpg",
      },
    ],
    images3: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLnZozeQkaMHlRJ5EMq06SRTZb0vK6uMgbQ&usqp=CAU",
      },
    ],

    details: {
      code: "C0001",
      category: "Smartphones",
      brand: "Apple",
      manufacturer: "Foxconn",
      color: "Viola",
      status: "Available",
      rating: 4.7,
      description:
        "L'iPhone 15 viola è uno splendido concentrato di eleganza e potenza. Il suo design sottile e leggero si veste di un vivace colore viola, donando al dispositivo un tocco di originalità e raffinatezza. Dotato di un display ad alta risoluzione e colori vibranti, offre un'esperienza visiva straordinaria. Le prestazioni avanzate, unite a una fotocamera di qualità eccezionale, rendono questo iPhone un compagno ideale per catturare momenti indimenticabili. Con connettività di ultima generazione e caratteristiche di sicurezza avanzate, l'iPhone 15 viola è tanto uno strumento potente quanto un accessorio di stile.",
    },
  },

  //ROSSELLA
  {
    id: 2,
    title: "Power Bank SuperCharge",
    price: 30,
    images: [
      {
        url: "https://www.consoleservice.it/wp-content/uploads/2022/07/POWER-BANK-CON-PANNELLO-SOLARE-BK76707-BESTEK-1.jpg",
      },
    ],
    images2: [
      {
        url: "https://volpefurba.fra1.digitaloceanspaces.com/wp-content/uploads/2023/06/22124110/64942543818dfcafa33a3a13-374x350.png",
      },
    ],
    images3: [
      {
        url: "https://m.media-amazon.com/images/I/61UtioPtu0L._AC_UF1000,1000_QL80_.jpg",
      },
    ],
    details: {
      code: "C0002",
      category: "Cables & Chargers",
      brand: "SuperCharge",
      manufacturer: "Goal Zero",
      color: "Black",
      status: "In Stock",
      rating: 4.2,
      description:
        "Il power bank nero è un compagno affidabile per chiunque sia sempre in movimento. Con il suo design elegante e minimalista, si presenta in un colore nero profondo che si abbina con versatilità a qualsiasi stile. La sua superficie opaca offre un tocco di modernità e si adatta discretamente a qualsiasi ambiente",
    },
  },
  {
    id: 3,
    title: "Protective Cover",
    price: 10,
    images: [
      {
        url: "https://shop.mipiacestore.com/WebRoot/StoreIT7/Shops/114012/5C56/E0E5/B3DE/91C3/C4C7/0A0A/B016/0625/iphone_x_melted_smiley_Q_www.mipiacestore.com.jpg",
      },
    ],
    images2: [
      {
        url: "https://newmartina.it/cdn/shop/files/1_2c9ffadb-60eb-4cbb-b327-1e743df73540.jpg?v=1687268763&width=800",
      },
    ],
    images3: [
      {
        url: "https://www.myagg.it/cdn/shop/products/iphone-case-iphone-12-pro-5ffc7ba4a53d6_1024x1024@2x.jpg?v=1610382254",
      },
    ],
    details: {
      code: "C0003",
      category: "Cases & Covers",
      brand: "Nillkin",
      manufacturer: "Nillkin",
      color: "White,Emoticon,Writing ",
      status: "Available",
      rating: 4.5,
      description:
        "Le cover proposte sono un'esplosione di stile e funzionalità, progettate per proteggere e personalizzare il tuo dispositivo con un tocco di originalità. Disponibili in diverse varianti, queste cover offrono una vasta gamma di opzioni per soddisfare ogni stile e preferenza.",
    },
  },
  {
    id: 4,
    title: "MacBook Air Mezzanotte",
    price: 1349,
    images: [
      {
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=410&hei=249&fmt=jpeg&qlt=95&.v=1654122880566",
      },
    ],
    images2: [
      {
        url: "https://www.graphix.it/wp-content/uploads/macbook-air-midnight-gallery6-20220606.jpg",
      },
    ],
    images3: [
      {
        url: "https://m.media-amazon.com/images/I/71dM-Km4cxL._AC_UF1000,1000_QL80_.jpg",
      },
    ],
    details: {
      code: "C0004",
      category: "Laptops",
      brand: "Apple",
      manufacturer: "Foxconn",
      color: "Midnight",
      status: "Available",
      rating: 4.8,
      description:
        "Il MacBook Air Mezzanotte è un'elegante interpretazione della rinomata serie di laptop di Apple. Il suo design raffinato si distingue per il colore Mezzanotte, una tonalità scura che conferisce al dispositivo un aspetto sofisticato e moderno. Leggero e sottile, il MacBook Air Mezzanotte offre una portabilità senza sforzi, rendendolo l'ideale compagno per chi è sempre in movimento.Il display ad alta risoluzione offre immagini nitide e dettagliate",
    },
  },
  {
    id: 5,
    title: "Apple Watch SE GPS",
    price: 240,
    images: [
      {
        url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_118176357?x=960&y=720&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=960&ey=720&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=960&cdy=720",
      },
    ],
    images2: [
      {
        url: "https://ricondizionati.mediaworld.it/dw/image/v2/BJRJ_PRD/on/demandware.static/-/Sites-mw-refurbished-catalog-master/default/dw3ff9221f/images/hi-res/179045.jpg?sw=1000&sh=1000",
      },
    ],
    images3: [
      {
        url: "https://www.globalphone.sm/3202-large_default/apple-watch-se-40mm-gps-tim.jpg",
      },
    ],
    details: {
      code: "C0005",
      category: "Wearables",
      brand: "Apple",
      manufacturer: "Quanta Computer",
      color: "Silver",
      status: "No available",
      rating: 4.6,
      description:
        "L'Apple Watch SE Silver è una fusione di eleganza e tecnologia. Il suo design raffinato si presenta in un elegante colore silver, aggiungendo un tocco di stile a qualsiasi polso.Il display luminoso e nitido consente di accedere rapidamente alle informazioni più importanti, mentre la resistenza all'acqua lo rende adatto a qualsiasi attività. ",
    },
  },
  {
    id: 6,
    title: "iPad Pro 12.9",
    price: 1179.3,
    images: [
      {
        url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-select-202212-12-9inch-space-gray-wifi_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1670866301449",
      },
    ],
    images2: [
      {
        url: "https://www.digitaltrends.com/wp-content/uploads/2021/05/apple-ipad-pro-2021-2.jpg?p=1",
      },
    ],
    images3: [
      {
        url: "https://www.rstore.it/media/catalog/product/cache/bb5991ed8856d22ce5c275e41c5f78f9/i/P/iPadPro_12_4gen_SF_1.jpg",
      },
    ],
    details: {
      code: "C0006",
      category: "Tablets",
      brand: "Apple",
      manufacturer: "Foxconn",
      color: "Space Gray",
      status: "NO available",
      rating: 4.9,
      description:
        "L'iPad Pro 12.9 è una potente tavola grafica digitale, unisce un display straordinario alle prestazioni di alto livello, offrendo un'esperienza utente senza precedenti. Il suo schermo Liquid Retina da 12.9 pollici, con una risoluzione elevata e una tecnologia ProMotion per un refresh rate fluido, cattura l'attenzione con colori vividi e dettagli cristallini.La fotocamera avanzata e le capacità di registrazione video 4K consentono di catturare immagini e filmati straordinari, mentre la potente batteria offre una lunga autonomia,",
    },
  },
  {
    id: 7,
    title: "Apple Airpods 2",
    price: 120,
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsgsI4tfUnGgi7xFc9ZaMUVglRdvX3UweMA&usqp=CAU",
      },
    ],
    images2: [
      {
        url: "https://www.twiston.it/731-thickbox_default/apple-airpods-2.jpg",
      },
    ],
    images3: [
      {
        url: "https://www.apple.com/newsroom/images/2023/09/apple-introduces-new-airpods-pro-2nd-generation/tile/Apple-AirPods-Pro-2nd-generation-USB-C-connection-230912.jpg.landing-big_2x.jpg",
      },
    ],
    details: {
      code: "C0007",
      category: "Audio",
      brand: "Apple",
      manufacturer: "Inventec",
      color: "White",
      status: "Available",
      rating: 4.4,
      description:
        "Gli Apple AirPods 2 sono auricolari senza fili che portano l'esperienza audio a un livello superiore con la firma di design e l'innovazione tipiche di Apple. Compatibili con dispositivi iOS, questi auricolari offrono un'apparizione pulita e minimalista, completata dalla loro caratteristica custodia di ricarica wireless.La qualità audio degli AirPods 2 è sorprendente, con un suono chiaro e bilanciato",
    },
  },
  {
    id: 8,
    title: "TV OLED evo | Serie C3 83''",
    price: 4649,
    images: [
      {
        url: "https://www.lg.com/it/images/tv/md07570428/gallery/medium02.jpg",
      },
    ],
    images2: [
      {
        url: "https://hd2.tudocdn.net/1084136?w=1920",
      },
    ],
    images3: [
      {
        url: "https://dday.imgix.net/system/uploads/picture/image/95122/a7df4b_P5120856.jpg?w=1080&s=dad1dbc565a0e3012bc1f7320a311650",
      },
    ],
    details: {
      code: "C0008",
      category: "TVs",
      brand: "LG",
      manufacturer: "LG Electronics",
      color: "Black",
      status: "In Stock",
      rating: 4.7,
      description:
        "La LG OLED Evo TV rappresenta l'apice della tecnologia OLED di LG, offrendo un'esperienza visiva straordinaria. Il termine Evo sottolinea l'evoluzione delle prestazioni e della luminosità rispetto ai modelli precedenti. Questa TV si distingue per la sua eccezionale qualità dell'immagine, grazie alla tecnologia OLED che offre neri profondi, contrasto infinito e colori vividi.La LG OLED Evo TV rappresenta l'apice della tecnologia OLED di LG, offrendo un'esperienza visiva straordinaria.",
    },
  },
  {
    id: 9,
    title: "Galaxy Z Fold 5 512GB - Blu - Dual eSIM",
    price: 1475,
    images: [
      {
        url: "https://images.unsplash.com/photo-1694022724038-acb03623601d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdhbGF4eSUyMHolMjBmb2xkfGVufDB8fDB8fHww",
      },
    ],
    images2: [
      {
        url: "https://i.ebayimg.com/images/g/WsEAAOSwJ5pk2Y7K/s-l1200.jpg",
      },
    ],
    images3: [
      {
        url: "https://img.fruugo.com/product/2/13/981557132_max.jpg",
      },
    ],
    details: {
      code: "C0009",
      category: "Smartphones",
      brand: "Samsung",
      manufacturer: "Samsung Electronics",
      color: "Blue",
      status: "No avaible",
      rating: 4.5,
      description:
        "Il Galaxy Z Fold 5 rappresenta probabilmente l'evoluzione della linea di smartphone pieghevoli di Samsung. Caratterizzato da uno schermo flessibile pieghevole, questo dispositivo offre una doppia esperienza, fungendo sia da smartphone tradizionale quando è chiuso, sia da tablet quando è aperto,. La serie Galaxy Z Fold solitamente include funzionalità di alta gamma, fotocamere avanzate e un design robusto per sopportare l'uso quotidiano.",
    },
  },
  {
    id: 10,
    title: "iPhone 15 Pro 256GB - Blue - Dual SIM",
    price: 1499,
    images: [
      {
        url: "https://images.unsplash.com/photo-1697284959152-32ef13855932?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lJTIwMTUlMjBwcm98ZW58MHx8MHx8fDA%3D",
      },
    ],
    images2: [
      {
        url: "https://images.unsplash.com/photo-1695619575333-fc73accd441e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZSUyMDE1JTIwcHJvfGVufDB8fDB8fHww",
      },
    ],
    images3: [
      {
        url: "https://images.unsplash.com/photo-1695480571861-90044e831733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGlwaG9uZSUyMDE1JTIwcHJvfGVufDB8fDB8fHww",
      },
    ],
    details: {
      code: "C0010",
      category: "Smartphones",
      brand: "Apple",
      manufacturer: "Apple Inc.",
      color: "Blue",
      status: "In Stock",
      rating: 4.8,
      description:
        "L'iPhone 15 Pro rappresenterebbe probabilmente un'evoluzione della serie di smartphone di punta di Apple. Solitamente, i modelli Pro offrono caratteristiche avanzate come fotocamere di alta qualità, prestazioni di alto livello, schermi di qualità superiore e una gamma di funzionalità avanzate",
    },
  },
  {
    id: 11,
    title: "Galaxy S23 128GB - Black - Single SIM",
    price: 999,
    images: [
      {
        url: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FsYXh5JTIwczIzfGVufDB8fDB8fHww",
      },
    ],
    images2: [
      {
        url: "https://images.unsplash.com/photo-1675285776817-632fb95aff51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FsYXh5JTIwczIzfGVufDB8fDB8fHww",
      },
    ],
    images3: [
      {
        url: "",
      },
    ],
    details: {
      code: "C0011",
      category: "Smartphones",
      brand: "Samsung",
      manufacturer: "Samsung Electronics",
      color: "Black",
      status: "In Stock",
      rating: 4.6,
      description:
        "Il Galaxy S23 rappresenterebbe probabilmente l'evoluzione della serie di smartphone Galaxy S, che è la linea di punta di Samsung. Solitamente, i modelli della serie Galaxy S offrono schermi di alta qualità, potenti prestazioni, fotocamere avanzate e una serie di funzionalità intelligenti.",
    },
  },

  {
    id: 12,
    title: "Google Pixel 6 256GB - White - Dual SIM",
    price: 899,
    images: [
      {
        url: "https://images.unsplash.com/photo-1653628989908-a22b51baaa5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdvb2dsZSUyMHBpeGVsJTIwNnxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    images2: [
      {
        url: "https://images.unsplash.com/photo-1613836255019-a7b845804788?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZ2xlJTIwcGl4ZWwlMjA2fGVufDB8fDB8fHww",
      },
    ],
    images3: [
      {
        url: "https://images.unsplash.com/photo-1657803905676-d6e67caf1d3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvb2dsZSUyMHBpeGVsJTIwNnxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
    details: {
      code: "C0012",
      category: "Smartphones",
      brand: "Google",
      manufacturer: "Google LLC",
      color: "White",
      status: "Available",
      rating: 4.7,
      description:
        "Il Google Pixel 6 rappresenterebbe probabilmente la successiva evoluzione nella serie di smartphone Pixel, che è conosciuta per offrire un'esperienza Android pura e un'eccellente qualità fotografica. Gli smartphone Pixel di solito vantano una fotocamera posteriore potente, caratterizzata dall'uso di software avanzato per migliorare la qualità delle immagini.",
    },
  },

  {
    id: 13,
    title: "OnePlus 9 128GB - Blue - Dual SIM",
    price: 799,
    images: [
      {
        url: "https://images.unsplash.com/photo-1637190909375-85cd40d14161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25lJTIwcGx1cyUyMDl8ZW58MHx8MHx8fDA%3D",
      },
    ],
    images2: [
      {
        url: "https://images.unsplash.com/photo-1637191083269-c761e7cf0798?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25lJTIwcGx1cyUyMDl8ZW58MHx8MHx8fDA%3D",
      },
    ],
    images3: [
      {
        url: "https://images.unsplash.com/photo-1637088587775-d8ca5fb1bc38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25lJTIwcGx1cyUyMDl8ZW58MHx8MHx8fDA%3D",
      },
    ],
    details: {
      code: "C0013",
      category: "Smartphones",
      brand: "OnePlus",
      manufacturer: "OnePlus Technology",
      color: "Blue",
      status: "No available",
      rating: 4.5,
      description:
        "Il OnePlus 9 è uno smartphone Android che fa parte della linea di dispositivi OnePlus, nota per offrire prestazioni di alto livello a un prezzo relativamente accessibile .Dal punto di vista delle prestazioni, il OnePlus 9 è alimentato da un processore potente e accompagnato da una quantità generosa di RAM, garantendo un'esperienza utente veloce e fluida. La piattaforma OxygenOS di OnePlus, basata su Android, offre un'esperienza Android pulita e personalizzabile.La fotocamera è spesso un punto forte nei dispositivi OnePlus",
    },
  },

  {
    id: 14,
    title: "Xiaomi Mi 11 256GB - Blue & Yellow - Dual SIM",
    price: 849,
    images: [
      {
        url: "https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eGlvbWklMjBtaSUyMDExfGVufDB8fDB8fHww",
      },
    ],
    images2: [
      {
        url: "",
      },
    ],
    images3: [
      {
        url: "",
      },
    ],
    details: {
      code: "C0014",
      category: "Smartphones",
      brand: "Xiaomi",
      manufacturer: "Xiaomi Corporation",
      color: " Blue & Yellow ",
      status: "In Stock",
      rating: 4.4,
      description:
        "Il Xiaomi Mi 11 è uno smartphone Android della serie Mi di Xiaomi, noto per combinare specifiche hardware di alto livello con un design elegante. Il Xiaomi Mi 11 presenta un design raffinato e moderno, con un corpo sottile e materiali di alta qualità. Lo schermo, di solito di ampie dimensioni e con tecnologia AMOLED, offre colori vivaci, contrasto elevato e una risoluzione nitida.Dal punto di vista delle prestazioni, il Mi 11 è spinto da un processore di fascia alta, abbinato a una generosa quantità di RAM, garantendo una risposta fluida e veloce alle attività quotidiane e all'esecuzione di applicazioni più esigenti. La fotocamera, un punto di forza dei dispositivi Xiaomi, di solito offre capacità fotografiche avanzate.",
    },
  },

  {
    id: 15,
    title: "Huawei P40 128GB - Dark Blue - Single SIM",
    price: 749,
    images: [
      {
        url: "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHV3ZWklMjBwNDB8ZW58MHx8MHx8fDA%3D",
      },
    ],
    images2: [
      {
        url: "",
      },
    ],
    images3: [
      {
        url: "",
      },
    ],
    details: {
      code: "C0015",
      category: "Smartphones",
      brand: "Huawei",
      manufacturer: "Huawei Technologies",
      color: " Dark Blue",
      status: "In Stock",
      rating: 4.3,
      description:
        " Il Huawei P40 è uno smartphone elegante e potente con uno schermo OLED vivace, un processore performante e una fotocamera avanzata. Con il sistema operativo EMUI basato su Android, offre un'esperienza utente personalizzabile. La batteria capiente e la ricarica rapida completano le caratteristiche di questo dispositivo di fascia alta.",
    },
  },
];

export default productData;
