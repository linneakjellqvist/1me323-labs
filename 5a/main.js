const numbers = [1, 15, 67, 0, -15, 32, -1, 4, -67, 7];
const positiva = numbers.filter((n) => n > 0);
console.log("Positiva nummer:", positiva);
console.log("Orginal listan:", numbers);
const jämna = numbers.filter((n) => n % 2 === 0);
console.log("Jämna nummer:", jämna);

const animals = ["Gås", "Björn", "Katt", "Hund", "Kyckling", "Ko", "Gris", "Flamingo"];
const längd = animals.filter(animal => animal.length >= 5);
console.log(längd);
console.log(animals);
const innehåller = animals.filter(animal => animal.includes("a"));
console.log(innehåller);

const elever = [{
    name: "Anna",
    age: 18,
    garde: 70
},
{
    name: "Peter",
    age: 19, 
    grade: 50
},
{
    name: "Markus",
    age: 19,
    grade: 100
},
{
    name:"Martin",
    age: 18,
    grade: 30
},
{
    name: "Signe",
    age: 19,
    grade: 45
},
{
    name: "Lovisa",
    age: 18,
    grade: 85
}];

const godkänt = elever.filter(ele => ele.grade >= 50);
console.log(elever);
console.log(godkänt.length);
const under20 = elever.filter(ele => ele.age < 20);
console.log(under20.length);

const filmer = [{
    title: "Spirited away",
    year: 2003,
    genre: "Adventure",
    rating: 8.6
}, 
{
    title: "Prisoners",
    year: 2013,
    genre: "Crime",
    rating: 8.2
},
{
    title: "The thing",
    year: 1982,
    genre: "Horror",
    rating: 8.2
},
{
    title: "Call me by your name",
    year: 2017,
    genre: "Romantic",
    rating: 7.8
},
{
    title: "The lobster",
    year: 2015,
    genre: "Drama",
    rating: 7.1
},
{
    title: "Fresh",
    year: 2022,
    genre: "Horror",
    rating: 6.7
},
{
    title: "mid90s",
    year: 2018,
    genre: "Drama",
    rating: 7.4
},
{
    title: "Jakten",
    year: 2012,
    genre: "Drama",
    rating: 8.3
}];
console.log(filmer);

const section = document.getElementById("movies");

function displayMovies(filmer){
section.innerHTML= "";
for (const film of filmer){
const div = document.createElement("div");
div.innerHTML = `<h3>${film.title} (${film.year})</h3> <p>${film.genre} - ${film.rating}/10</p>`;
section.append(div);
}
}
document.getElementById("btn-top").addEventListener("click", () => {
  const topRated = filmer.filter(f => f.rating >= 7);
  displayMovies(topRated);
});

document.getElementById("btn-action").addEventListener("click", () => {
  const actionMovies = filmer.filter(f => f.genre === "Action");
  displayMovies(actionMovies);
});

document.getElementById("btn-modern").addEventListener("click", () => {
  const modernMovies = filmer.filter(f => f.year >= 2000);
  displayMovies(modernMovies);
});
displayMovies(filmer);

const kontakter = [{
    name: "Adam",
    email: "Adam.c5@gmail.com",
    city: "Paris"
},
{
    name: "Philip",
    email: "Philip4.Andersen@hotmail.se",
    city: "Umeå"
},
{
    name: "Felicia",
    email: "Flisan883@gmail.com",
    city: "Toulouse"
},
{
    name: "Anton",
    email: "Anton.hotmail.com",
    city: "Malmö"
},
{
    name: "Tasmin",
    email: "Tas.min@hotmail.dk",
    city: "Bornholm"
},
{
    name: "Lilly",
    email: "Lilly.Nilsson@outlook.com",
    city: "London"
},
{
    name: "Emilia",
    email: "Emilia@yahoo.com",
    city: "Köpenhamn"
},
{
    name: "Nellie",
    email: "Nellis33@gmail.se",
    city: "Svedala"
}, 
{
    name: "Gemma",
    email: "Gemma@yahoo.com",
    city: "Stockholm"
}, 
{
    name: "John",
    email: "John56@yahoo.se",
    city: "Lund"
}];
console.log(kontakter);

const sökKontakt = document.getElementById("sök").addEventListener("input", () =>{ //dubbelkolla detta 
    const egenskap = sökKontakt.value.toLowerCase();
    const filter = kontakter.filter(kon => {
        return kon.name.toLowerCase().includes(egenskap)
        || kon.email.toLowerCase().includes(egenskap)
        || kon.city.toLowerCase().includes(egenskap);
    });
    sökKontakt(filter);
});


const container = document.getElementById("kontakter");
for (const kontakt of kontakter){
    const div = document.createElement("div");
    div.innerHTML= `<h4>${kontakt.name}</h4> <p>${kontakt.email} - ${kontakt.city}</p>`;
    container.append(div);
}
