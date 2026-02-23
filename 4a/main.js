class Car {
    constructor(brand, model, year){
      this.brand = brand;
      this.model = model;
      this.year = year; 

    }
}
const car1 = new Car("Volvo", "V60", 2020);
console.log(car1.brand, car1.year);

class BankAccount {
    constructor(owner, balance = 0){
        this.owner = owner;
        this.balance = balance;
        this.currency = "SEK";
    }
}

const bankAccount1 = new BankAccount("Adam");
const bankAccount2 = new BankAccount("Eve", 1000);


console.log(bankAccount1.owner, bankAccount1.balance, bankAccount1.currency);
console.log(bankAccount2.owner, bankAccount2.balance, bankAccount2.currency);

class Movie {
    constructor(title, director, rating){
        this.title = title;
        this.director = director;
        this.rating = rating;
    }
}
const movies = [
    new Movie("Rocky horror picture show", "Jim Sharman", 8.4),
    new Movie("Spirited away", "Hayao Miyazaki", 8.6),
    new Movie("Lala land", "Damien Chazelle", 7.5),
    new Movie("Mamma mia", "Phyllida Lloyd", 6.4)
];

for (const movie of movies){
    console.log(movie.title, ":", movie.rating, "/10");
}

const container = document.getElementById("movies");
let html = "<h2>Mina filmer</h2><ul>";
for (const movie of movies) {
  html += `<li><strong>${movie.title}</strong> (${movie.director}) - ${movie.rating}/10</li>`;
}
html += "</ul>";
container.innerHTML = html;