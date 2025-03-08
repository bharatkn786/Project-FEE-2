// Array of selectors for carousel containers
const carouselSelectors = ['#glide_1', '#glide_2', '#glide_3', '#glide_4', '#glide_5'];

// Initialize each carousel with minimal settings
carouselSelectors.forEach(selector => {
  const slider = document.querySelector(selector);
  if (slider) {
    new Glide(slider, {
      type: 'carousel',
      startAt: 0,
      autoplay:3000,
      hoverpause: true,
      perView: 4,
      rewin: false,
      animationDuration: 800,
    }).mount();
  }
});






document.addEventListener("DOMContentLoaded", function() {
  // Initialize or retrieve cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Function to add product to cart
  function addToCart(product) {
      // Check if the product is already in the cart
      const isProductInCart = cartItems.some(item => item.id === product.id);
      
      if (!isProductInCart) {
          // Add the product to the cart
          cartItems.push(product);
          // Save the updated cart to local storage
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          console.log("Product added to cart:", product);
      } else {
          console.log("Product is already in the cart:", product);
      }
  }

  // Add click event listener to all "Add To Cart" buttons
  const addToCartButtons = document.querySelectorAll(".product__btn");
  addToCartButtons.forEach(button => {
      button.addEventListener("click", function(e) {
          e.preventDefault();

          // Find the product container
          const productContainer = button.closest(".product");

          // Extract product details
          const product = {
              id: productContainer.querySelector("img").getAttribute("alt"), // Assuming the alt attribute is unique
              name: productContainer.querySelector("h3").textContent,
              img: productContainer.querySelector("img").getAttribute("src"),
              price: productContainer.querySelector(".product__price h4").textContent
          };

          // Add the product to the cart
          addToCart(product);
      });
  });
});