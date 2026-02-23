const number = [2, 50, 16, 10, 3, 13];

const kvadrering = number.map(n=> n * n);
console.log(kvadrering);
const nyLista = number.map(n=> `${n}`);
console.log(nyLista);
console.log(number);

const djur = ["hund", "katt", "fisk", "björn", "älg", "gris"];
const versaler = djur.map(d=> d.toUpperCase());
console.log(versaler);
const tecken = djur.map(d=> `${d}(${d.length} tecken)`);
console.log(tecken);

const book = [
    {
        title: "Stoner",
        author: "John Williams",
        pages: 278
    },
    {
        title: "Great expectations",
        author: "Charles Dickens",
        pages: 544
    },
    {
        title: "Franny and Zooey",
        author: "J.D Salinger",
        pages: 201
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        pages: 92
    },
    {
        title: "Brave new world",
        author: "Aldous Huxley",
        pages: 311
    }
];

const titlar = book.map(b=> `${b.title}`);
console.log(titlar);

const readingTimes = book.map(b => ({
  title: b.title,
  readingTime: Math.ceil(b.pages / 30)
}));
console.log("Lästider:", readingTimes);

const animals = [
  { name: "Gösta", species: "Pingvin", age: 4, weight: 5, habitat: "Arktis" },
  { name: "Barbro", species: "Elefant", age: 32, weight: 4200, habitat: "Savann" },
  { name: "Sansen", species: "Papegoja", age: 67, weight: 1, habitat: "Regnskog" },
  { name: "Doris", species: "Sköldpadda", age: 104, weight: 80, habitat: "Savann" },
  { name: "Bengt-Åke", species: "Pingvin", age: 2, weight: 4, habitat: "Arktis" },
  { name: "Sigrid", species: "Flodhäst", age: 18, weight: 1800, habitat: "Savann" },
  { name: "Margit", species: "Papegoja", age: 12, weight: 1, habitat: "Regnskog" },
  { name: "Knansen", species: "Krokodil", age: 45, weight: 450, habitat: "Regnskog" }
];

const savannNames = animals
  .filter(a => a.habitat === "Savann")
  .map(a => a.name);
console.log("Savann:", savannNames); 

const smallAnimals = animals
  .filter(a => a.weight < 10)
  .map(a => `${a.name} (${a.species}, ${a.age} år)`);
console.log("Små djur:", smallAnimals);

const veteranSigns = animals
  .filter(a => a.age > 20)
  .map(a => `🏆 ${a.name}, ${a.species} — ${a.age} år`);
console.log("Veteraner:", veteranSigns);

const container = document.getElementById("results");

function addSection(title, items) {
  const heading = document.createElement("h2");
  heading.textContent = title;
  container.append(heading);

  const list = document.createElement("ul");
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.append(li);
  }
  container.append(list);
}

addSection("Djur i savannen", savannNames);
addSection("Små djur (under 10 kg)", smallAnimals);
addSection("Veteraner (över 20 år)", veteranSigns);