const productData = [
  {
    id: 1,
    title: "Iphone 14 Pro Max",
    price: 1299,
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGhqRFwdo5MBymmJEqiWCzoUAj09Eijqz8_w&usqp=CAU",
      },
    ],
    details: {
      code: "C0001",
      category: "Smartphones",
      brand: "Apple",
      manufacturer: "Foxconn",
      color: "Silver",
      status: "In Stock",
      rating: 4.7,
      description: "The latest iPhone with advanced features, A15 Bionic chip, Pro camera system, and stunning design.",
    },
  },
  {
    id: 2,
    title: "Power Bank SuperCharge",
    price: 30,
    images: [
      {
        url: "https://www.consoleservice.it/wp-content/uploads/2022/07/POWER-BANK-CON-PANNELLO-SOLARE-BK76707-BESTEK-1.jpg",
      },
    ],
    details: {
      code: "C0002",
      category: "Accessories",
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
        url: "https://www.graphiland.it/27828-thickbox_default/ipad-pro-129-wi-fi-128gb-grigio-siderale.jpg",
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
        url: "https://www.backmarket.it/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1920/https://d2e6ccujb3mkqf.cloudfront.net/92a420c5-e16a-47f8-9c11-1ef5736ae2bd-1_9811739d-e75f-41ff-b0b2-a2017b9fe245.jpg",
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
];

export default productData;
