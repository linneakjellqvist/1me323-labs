const nummer = [4, 7, 15, 28, 50, 63, 72, 88];

const firstJämn = nummer.find(n => n % 2 === 0);
console.log(firstJämn);
const störreÄn = nummer.find(n => n > 50);
console.log(störreÄn);

const städer = ["Stockholm", "Göteborg", "Malmö", "Uppsala", "Västerås", "Linköping", "Helsingborg"];
const startsWith = städer.find(s => s.startsWith("S"));
console.log(startsWith);
const includes = städer.find(s=> s.includes("ö"));
console.log(includes);// varför S i konsolen?

const böcker = [
    {titel: "Sagan om ringen", författare: "J.R.R. Tolkien", år: 1954, pages: 1178},
    {titel: "Harry Potter och de vises sten", författare: "J.K. Rowling", år: 1997, pages: 223},
    {titel: "Mobydick", författare: "Herman Melville", år: 1851, pages: 635},
    {titel: "1984", författare: "George Orwell", år: 1949, pages: 328},
    {titel: "Pride and Prejudice", författare: "Jane Austen", år: 1813, pages: 432}
]

const bok = böcker.find(b => b.titel === "1984");
console.log(bok);
const år = böcker.find(b => b.år > 2000);
console.log(år);
const sidor = böcker.findLast(b => b.pages > 400);
console.log(sidor);

const mystery = böcker.find(b => b.titel === "The Da Vinci Code");
if (mystery === undefined){
    console.log("Boken finns inte i listan");
}else {
    console.log(mystery.titel);
}

class Product{
    #id;
    #name;
    #price;
    #inStock;
    constructor(id, name, price, inStock){
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#inStock = inStock;
    }
    get isExpensive(){
        return this.#price > 500;
    }
    get id(){
        return this.#id;
    }
    get name(){
        return this.#name;
    }
    get price(){
        return this.#price;
    }
    get inStock(){
        return this.#inStock;
    }
}

const products = [
  new Product(1, "Mus", 299, true),
  new Product(2, "Tangentbord", 899, true),
  new Product(3, "Skärm", 3499, false),
  new Product(4, "Headset", 449, true),
  new Product(5, "Webbkamera", 599, false),
  new Product(6, "USB-hub", 149, true)
];

const product3 = products.find(p => p.id === 3);
console.log(product3.name);
const outOfStock = products.find(p => !p.inStock);
console.log(outOfStock.name);
const expensive = products.find(p => p.isExpensive);
console.log(expensive.name);

const container = document.getElementById("result");
if (product3) {
  container.innerHTML = `
    <h2>${product3.name}</h2>
    <p>Pris: ${product3.price} kr</p>
    <p>I lager: ${product3.inStock ? "Ja" : "Nej"}</p>
  `;
}