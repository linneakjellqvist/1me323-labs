const score = 10;
const resultat = score >= 50 ? "Godkänt" : "Underkänt";
console.log(resultat);

const product = {
  name: "Trådlösa hörlurar",
  price: 899,
  inStock: true
};

function createProductsCard(product) {
   return `<div class="product-card ${product.inStock ? '' : 'out-of-stock'}">
   <h3>${product.name}</h3>
   <p class="price">${product.price} kr</p>
   <span class="stock ${product.inStock ? 'in-stock' : 'sold-out'}">
   ${product.inStock ? 'I lager' : 'Slut i lager'} </span> </div>`;
}

document.body.innerHTML = createProductsCard(product);

const knapp = document.querySelector("#mer");
const innehåll = document.querySelector("#gömd");
let isVisible = false;

knapp.addEventListener("click", function(){
    isVisible = !isVisible;
    innehåll.style.display = isVisible ? "block" : "none";
    knapp.textContent = isVisible ? "Visa mindre" : "Visa mer";
});