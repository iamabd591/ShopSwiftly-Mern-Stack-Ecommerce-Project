const BASE_URL = "https://img.freepik.com";
const dataList = [
  {
    id: 1,
    title: "Chuck Taylor All Star Leather",
    image:
      "/free-vector/headphones-wireless-realistic-composition-with-isolated-image-phones-with-power-bank-dock-station-with-reflections-vector-illustration_1284-73201.jpg?w=740&t=st=1710748073~exp=1710748673~hmac=d05482852a13d814ad64b9ebf9f091b42ac7a66d30f336b8988daba204c14153",
    price: 1200,
    stock: true,
    type: "product",
  },
  {
    id: 2,
    title: "Chuck Taylor All Star Leather",
    image:
      "/free-photo/purse-background-handle-fashionable-fashion_1203-6492.jpg?t=st=1710823817~exp=1710827417~hmac=aaa5fbb257b55fb8e4ada09d1e5630a2faf84a4e04dee3608156fe6e4d9f1ef7&w=740",
    price: 15000,
    stock: true,
    type: "product",
  },
  {
    id: 3,
    title: "Chuck Taylor All Star Leather",
    image:
      "/free-photo/canvas-hat-blank-fashion-sport_1203-5371.jpg?t=st=1710823930~exp=1710827530~hmac=f50f7574fbd823a6d5fa9ae213bd7d03f4efbee7133b1f005549a8215638efd9&w=740",
    price: 20,
    stock: false,
    type: "product",
  },
  {
    id: 4,
    title: "Chuck Taylor All Star Leather",
    image:
      "/free-psd/laptop-mock-up-isolated_1310-1458.jpg?t=st=1710824000~exp=1710827600~hmac=8dad4b2bed900de82fa0b123ecf7108f99d7f750a4a4c14699ace99cb8669cc9&w=740",
    price: 1850,
    stock: true,
    type: "product",
  },
  {
    id: 5,
    title: "Chuck Taylor All Star Leather",
    image:
      "/premium-psd/realistic-purple-phone-screen-mockup_99366-526.jpg?w=740",
    price: 950,
    stock: true,
    type: "product",
  },
  {
    id: 6,
    title: "Chuck Taylor All Star Leather",
    image: "/premium-psd/realistic-suitcase-psd-mockup_99366-509.jpg?w=740",
    price: 766.99,
    stock: true,
    type: "product",
  },
  {
    id: 7,
    title: "Chuck Taylor All Star Leather",
    image: "/premium-psd/3d-living-room-design-mockup_99366-409.jpg?w=740",
    price: 23400,
    stock: false,
    type: "product",
  },
  {
    id: 8,
    title: "Chuck Taylor All Star Leather",
    image: "/premium-photo/red-sport-motorcycle_2227-1372.jpg?w=740",
    price: 2999.99,
    stock: true,
    type: "product",
  },
  {
    id: 9,
    title: "Chuck Taylor All Star Leather",
    image:
      "/various-hi-tech-devices-table_140725-9010.jpg?t=st=1710834058~exp=1710837658~hmac=b6ce22455d26e6820c515ba7561d340a6e87f5fd8bd857c8d4fc1bab12248f81&w=740",
    price: 2999.99,
    stock: true,
    type: "product",
  },
  {
    id: 1,
    title: "1 banner",
    image:
      "https://marketplace.canva.com/EAE9vz8U05s/1/0/1600w/canva-beauty-product-banner-%28landscape%29-fkdqUMSbEP0.jpg",
    type: "banner",
  },
];

// const productUrl = dataList.image;
// Prepend base URL to image URLs
dataList.forEach((item) => {
  if (item.type === "product") {
    item.image = `${BASE_URL}${item.image}`;
  }
});


export default dataList;
