const products = [
  {
    id: 1,
    name: "Bolo Red Velvet",
    category: "Bolos",
    image: "assets/images/image-cake-desktop.jpg",
    price: 29.99,
  },

  {
    id: 2,
    name: "Brownie de Caramelo Salgado",
    category: "Brownies",
    image: "assets/images/image-brownie-desktop.jpg",
    price: 19.99,
  },

  {
    id: 3,
    name: "Mix de cinco macarons",
    category: "Macarons",
    image: "assets/images/image-macaron-desktop.jpg",
    price: 24.99,
  },

  {
    id: 4,
    name: "Baklava de Pistache",
    category: "Baklava",
    image: "assets/images/image-baklava-desktop.jpg",
    price: 32.99,
  },

  {
    id: 5,
    name: "Crème brûlée de baunilha",
    category: "Crème Brûlée",
    image: "assets/images/image-creme-brulee-desktop.jpg",
    price: 21.99,
  },

  {
    id: 6,
    name: "Torta de limão",
    category: "Torta",
    image: "assets/images/image-meringue-desktop.jpg",
    price: 18.99,
  },

  {
    id: 7,
    name: "Panna Cotta de Baunilha",
    category: "Panna Cotta",
    image: "assets/images/image-panna-cotta-desktop.jpg",
    price: 26.99,
  },

  {
    id: 8,
    name: "Tiramisu Clássico",
    category: "Tiramisu",
    image: "assets/images/image-tiramisu-desktop.jpg",
    price: 27.99,
  },

  {
    id: 9,
    name: "Waffle com Frutas Vermelhas",
    category: "Waffle",
    image: "assets/images/image-waffle-desktop.jpg",
    price: 22.99,
  },
];

const productsGrid = document.getElementById("products-grid");

products.forEach((product) => {
  productsGrid.innerHTML += `
  <li class="product-card">

    <img 
      src="${product.image}" 
      alt="${product.name}" 
      class="img-sobremesa"
    >

    <div class="product-info">

      <h2 class="subtitle">
        ${product.category}
      </h2>

      <p class="description">
        ${product.name}
      </p>

      <span class="price">
        R$ ${product.price.toFixed(2)}
      </span>

      <button class="add-to-cart">

        <img 
          src="assets/images/icon-add-to-cart.svg" 
          alt="Adicionar ao carrinho"
        >

        Adicionar ao carrinho

      </button>

    </div>

  </li>
`;
});
