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

let cart = [];

const checkoutBtn = document.getElementById("checkout-btn");
const modalOverlay = document.getElementById("modal-overlay");
const modalItems = document.getElementById("modal-items");
const modalTotalPrice = document.getElementById("modal-total-price");
const newOrderBtn = document.getElementById("new-order-btn");
const cartItems = document.getElementById("cart-items");
const productsGrid = document.getElementById("products-grid");

function renderCart() {
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <h3>${item.quantity}x ${item.name}</h3>
        <p>R$ ${item.price.toFixed(2)}</p>
      </div>
    `;
  });

  const totalPriceElement = document.getElementById("cart-total-price");
  const total = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  totalPriceElement.textContent = `R$ ${total.toFixed(2)}`;
}

function renderProducts() {
  productsGrid.innerHTML = "";

  products.forEach((product) => {
    const productInCart = cart.find((item) => item.id === product.id);

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

          ${
            productInCart
              ? `
                <div class="quantity-controller">

                  <button 
                    class="decrease" 
                    data-id="${product.id}"
                  >
                    -
                  </button>

                  <span>
                    ${productInCart.quantity}
                  </span>

                  <button 
                    class="increase" 
                    data-id="${product.id}"
                  >
                    +
                  </button>

                </div>
              `
              : `
                <button 
                  class="add-to-cart" 
                  data-id="${product.id}"
                >
                  <img 
                    src="assets/images/icon-add-to-cart.svg" 
                    alt="Adicionar ao carrinho"
                  >

                  Adicionar ao carrinho
                </button>
              `
          }

        </div>

      </li>
    `;
  });

  addCartEvents();
}

function addCartEvents() {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.id);

      const selectedProduct = products.find(
        (product) => product.id === productId,
      );

      const existingProduct = cart.find(
        (item) => item.id === selectedProduct.id,
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({
          ...selectedProduct,
          quantity: 1,
        });
      }

      renderProducts();
      renderCart();
    });
  });
}

document.addEventListener("click", (event) => {
  const increaseButton = event.target.closest(".increase");

  if (increaseButton) {
    const productId = Number(increaseButton.dataset.id);

    const productInCart = cart.find((item) => item.id === productId);

    productInCart.quantity++;

    renderProducts();
    renderCart();
  }
});

document.addEventListener("click", (event) => {
  const decreaseButton = event.target.closest(".decrease");

  if (decreaseButton) {
    const productId = Number(decreaseButton.dataset.id);

    const productInCart = cart.find((item) => item.id === productId);

    if (productInCart.quantity > 1) {
      productInCart.quantity--;
    } else {
      cart = cart.filter((item) => item.id !== productId);
    }

    renderProducts();
    renderCart();
  }
});

renderProducts();
renderCart();

checkoutBtn.addEventListener("click", () => {

  modalOverlay.classList.remove("hidden");

  renderModal();

});

function renderModal() {

  modalItems.innerHTML = "";

  cart.forEach((item) => {

    modalItems.innerHTML += `
      <div class="modal-item">
        <p>${item.quantity}x ${item.name}</p>
        <span>R$ ${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `;

  });

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  modalTotalPrice.textContent = `R$ ${total.toFixed(2)}`;
}

newOrderBtn.addEventListener("click", () => {

  cart = [];

  renderCart();
  renderProducts();

  modalOverlay.classList.add("hidden");

});