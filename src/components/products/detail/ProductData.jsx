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
      status: "In Stock",
      rating: 4.7,
      description: "The latest iPhone with advanced features, A15 Bionic chip, Pro camera system, and stunning design.",
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
      manufacturer: "TechPower",
      color: "Black",
      status: "In Stock",
      rating: 4.2,
      description:
        "High-capacity power bank with SuperCharge technology, providing fast and efficient charging on the go.",
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
      color: "Red, Green, Blue, Pink",
      status: "In Stock",
      rating: 4.5,
      description:
        "Nature (TPU case) use environmental non-toxic TPU, silky smooth and ultrathin. Glittering and translucent, arbitrary rue reserved volume button cutouts, easy to operate. Side frosted texture anti-slipping, details show its concern; transparent frosted logo shows its taste. The release of self, the flavor of life. Nillkin launched Nature transparent soft cover, only to retain the original phone style. Subverting tradition, redefinition. Thinner design Environmental texture better hand feeling.",
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
      color: "Space Gray",
      status: "In Stock",
      rating: 4.8,
      description: "The sleek and powerful MacBook Air with M2 chip, Retina display, and all-day battery life.",
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
      status: "In Stock",
      rating: 4.6,
      description:
        "The Apple Watch SE with GPS, fitness tracking, heart rate monitoring, and a variety of watch faces.",
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
      status: "In Stock",
      rating: 4.9,
      description: "The powerful iPad Pro 12.9 with M2 chip, Liquid Retina XDR display, and advanced camera system.",
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
      status: "In Stock",
      rating: 4.4,
      description:
        "The second-generation Apple Airpods with wireless charging case, seamless connectivity, and Siri integration.",
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
      description: "LG OLED TV with evo technology, 83-inch 4K display, α9 Gen6 processor, and Dolby Vision support.",
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
      status: "In Stock",
      rating: 4.5,
      description:
        "Samsung Galaxy Z Fold 5 with 512GB storage, Mystic Blue color, dual eSIM support, and innovative folding display.",
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
      color: "Silver",
      status: "In Stock",
      rating: 4.8,
      description: "iPhone 15 Pro with 256GB storage, Blue color, dual SIM support, and advanced camera features.",
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
        "Samsung Galaxy S23 with 128GB storage, Black color, single SIM support, and high-performance features.",
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
      status: "In Stock",
      rating: 4.7,
      description:
        "Google Pixel 6 with 256GB storage, White color, dual SIM support, and exceptional camera capabilities.",
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
      status: "In Stock",
      rating: 4.5,
      description:
        "OnePlus 9 with 128GB storage, Blue color, dual SIM support, and powerful performance for enthusiasts.",
    },
  },

  {
    id: 14,
    title: "Xiaomi Mi 11 256GB - Gray - Dual SIM",
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
      color: "Gray",
      status: "In Stock",
      rating: 4.4,
      description:
        "Xiaomi Mi 11 with 256GB storage, Gray color, dual SIM support, and sleek design for a premium feel.",
    },
  },

  {
    id: 15,
    title: "Huawei P40 128GB - Gold - Single SIM",
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
      color: "Gold",
      status: "In Stock",
      rating: 4.3,
      description: "Huawei P40 with 128GB storage, Gold color, single SIM support, and cutting-edge camera technology.",
    },
  },
];

export default productData;
