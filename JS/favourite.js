// Define the data arrays for each carousel
  // Retrieve the favorite items from local storage
  const myfavsJson = localStorage.getItem("cartItems");


  // console.log("got")
  let myfavs=JSON.parse(myfavsJson);
  console.log(myfavs);
const laptops = [
    { id: 1, name: "Apple Macbook Air", type: "laptop", img: "/Images/Macbook.jpeg", desc: "Apple Macbook Air", price: "$750" },
    { id: 2, name: "Hp Laptop 15s", type: "laptop", img: "/Images/Laptop hp.webp", desc: "Hp Laptop 15s", price: "$750" },
    { id: 3, name: "Lenovo Thinkpad P14s", type: "laptop", img: "/Images/Lenovo laptop.jpg", desc: "Lenovo Thinkpad P14s", price: "$750" },
    { id: 4, name: "Dell XPS", type: "laptop", img: "/Images/Dell laptop.jpg", desc: "Dell XPS", price: "$750" },
    { id: 5, name: "Acer Nitro 5", type: "laptop", img: "/Images/Acer laptop.jpeg", desc: "Acer Nitro 5", price: "$750" },
  ];
  
  const earbuds = [
    { id: 6, name: "Boat Airdops", type: "earbuds", img: "/Images/AD120-FI_Black01.webp", desc: "Boat Airdops", price: "$750" },
    { id: 7, name: "Samsung Earbuds Series 11", type: "earbuds", img: "/Images/Samsung.webp", desc: "Samsung Earbuds Series 11", price: "$750" },
    { id: 8, name: "Redmi buds 5C", type: "earbuds", img: "/Images/redmi.jpg", desc: "Redmi buds 5C", price: "$750" },
    { id: 9, name: "Realme Nord buds", type: "earbuds", img: "/Images/Realme.jpg", desc: "Realme Nord buds", price: "$750" },
    { id: 10, name: "Apple Airpods 3rd gen", type: "earbuds", img: "/Images/apple.jpeg", desc: "Apple Airpods 3rd gen", price: "$750" },
  ];
  
  const phones = [
    { id: 11, name: "Iphone 15", type: "phone", img: "/Images/iphone-card-40-iphone15prohero-202309_FMT_WHH.jpeg", desc: "Iphone 15", price: "$750" },
    { id: 12, name: "Samsung S23", type: "phone", img: "/Images/samsung-galaxy-s23-ultra.webp", desc: "Samsung S23", price: "$750" },
    { id: 13, name: "Redmi 13", type: "phone", img: "/Images/images.jpeg", desc: "Redmi 13", price: "$750" },
    { id: 14, name: "Samsung Galaxy Z Fold6", type: "phone", img: "/Images/images (2).jpeg", desc: "Samsung Galaxy Z Fold6", price: "$750" },
    { id: 15, name: "OnePlus Open", type: "phone", img: "/Images/Oneplus phne.jpg", desc: "OnePlus Open", price: "$750" },
  ];
  
  const tvs = [
    { id: 16, name: "Xiaomi X Series", type: "tv", img: "/Images/Xiaomi tv.jpeg", desc: "Xiaomi X Series", price: "$750" },
    { id: 17, name: "Sony Bravia", type: "tv", img: "/Images/Sony tv.jpeg", desc: "Sony Bravia", price: "$750" },
    { id: 18, name: "Samsung D Series", type: "tv", img: "/Images/Samsung tv.webp", desc: "Samsung D Series", price: "$750" },
    { id: 19, name: "Toshiba V Series", type: "tv", img: "/Images/Toshiba tv.jpg", desc: "Toshiba V Series", price: "$750" },
    { id: 20, name: "LG 4K Ultra", type: "tv", img: "/Images/LG TV.jpeg", desc: "LG"},
  ];
  const refrigerators=[
    { id: 21, name: "Samsung 236L", type: "refri", img: "/Images/Samsung fridge.jpeg", desc: "Samsung 236L", price: "$750" },
    { id: 22, name: "LG 242L", type: "refri", img: "/Images/LG FRIDGE.jpg", desc: "LG 242L", price: "$750" },
    { id: 23, name: "Whirlpool 235L", type: "refri", img: "/Images/Whirlpool fridge.jpeg", desc: "Whirlpool 235L", price: "$750" },
    { id: 24, name: "Panasonic 450L", type: "refri", img: "/Images/Panasonic fridge.jpg", desc: "Panasonic 450L", price: "$750" },
    { id: 25, name: "Godrej 223L", type: "refri", img: "/Images/Godrej fridge.jpeg", desc: "Godrej 223L", price: "$750"},
  ]
  

const allProducts = [...laptops, ...earbuds,...phones,...tvs,...refrigerators]; // Add other categories as needed

// Function to build HTML for a product
console.log("hello this is favourite.js")
let favs=[];
let isFaved=false;
function buildhtml(data){
  return `
    <div class="product">
      <div class="product__header">
        <img src="${data.img}" alt="${data.name}">
      </div>
      <div class="product__footer">
        <h3>${data.name}</h3>
              <div class="rating">
              <i class="fa fa-star" style="color: #FFD43B;"></i>
              <i class="fa fa-star" style="color: #FFD43B;"></i>
              <i class="fa fa-star" style="color: #FFD43B;"></i>
              <i class="fa fa-star" style="color: #FFD43B;"></i>
              <i class="fa fa-star-half-alt" style="color: #FFD43B;"></i>
            </div>
        <div class="product__price">
          <h4>${data.price}</h4>
        </div>
        <a href="#"><button type="button" class="product__btn">Add To Cart</button></a>
      </div>
    </div>`
};

// // Function to display all products
// function displayAllProducts() {
//   const cardsContainer = document.querySelector('.cards');
//   allProducts.forEach(product => {
//     cardsContainer.innerHTML += buildHTML(product);
//   });
// }

// // Call the function to display all products when the page loads
// document.addEventListener('DOMContentLoaded', displayAllProducts);


// function displayFavoriteProducts() {
//   const favsContainer = document.querySelector('.favorites');
//   favsContainer.innerHTML = ""; // Clear existing content

//   favs.forEach(product => {
//       const favHtml = buildFavHTML(product);
//       favsContainer.innerHTML += favHtml;
//   });
// }
console.log(myfavs)
const favsContainer=document.querySelector('.favorites');
console.log(favsContainer)
myfavs.forEach((product)=>{
   const favHtml= buildhtml(product);
    console.log(favHtml)
    console.log(favsContainer)
    favsContainer.innerHTML+=favHtml
    
})