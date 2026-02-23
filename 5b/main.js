const book = 
    {
        title: "Catcher in the rey",
        year: 1951,
        isbn: null
    };

console.log(book.title);
console.log(book.isbn);
console.log(book.publisher);

//??= nullish coalesing 

const username = null;
const level= 0;
const bio = "";


const displayName = username ?? "Anonym";
const displayLevel = level ?? 1;
const displayBio = bio ?? "Ingen bio angiven";

console.log(displayName, displayLevel, displayBio);

const profiles = [
{
    name: "Silvia",
    email: "Silvia@gmail.com",
    phone: "070900099",
    adress: {
    city: "Stockholm",
    street: "Drottninggatan 27"
    }
},
{
    name: "Peter",
    email: null,
    phone: "0734282828",
    adress: null
},
{
    name: "Anna"
}
];
console.log(profiles);
function createProfileCard(profiles){
    const name = profiles.name ?? "Ej angiven";
    const email = profiles.email ?? "Ej angiven";
    const phone = profiles.phone ?? "Ej angiven";
    const city = profiles.adress?.city ?? "Okänd stad";
    const street = profiles.adress?.street ?? "Okänd gatuadress"
    const div = document.createElement("div");
   
    const heading = document.createElement("h3");
  heading.textContent = name;

  const emailP = document.createElement("p");
  emailP.textContent = `E-post: ${email}`;

  const phoneP = document.createElement("p");
  phoneP.textContent = `Telefon: ${phone}`;

  const cityP = document.createElement("p");
  cityP.textContent = `Stad: ${city}`;

  const streetP = document.createElement("p");
  streetP.textContent = `Adress: ${street}`;

  div.append(heading, emailP, phoneP, cityP, streetP);
  return div;
}
const container = document.getElementById("profiles");
for (const profile of profiles) {
  container.append(createProfileCard(profile));
}

const forecasts = [
  {
    city: "Stockholm",
    temperature: 12,
    description: "Växlande molnighet",
    wind: { speed: 5, direction: "SV" },
    precipitation: 0
  },
  {
    city: "Göteborg",
    temperature: null,
    description: "Regn",
    wind: { speed: 12, direction: null },
    precipitation: 8
  },
  {
    city: "Malmö",
    temperature: 15,
    description: null,
    wind: null,
    precipitation: null
  },
  {
    city: "Kiruna",
    temperature: -3,
    wind: { speed: 2 }
  },
  {
    city: null,
    temperature: 9,
    description: "Soligt",
    wind: { speed: 0, direction: "N" },
    precipitation: 0
  }
];

function createForecastCard(forecast){
     const city = forecasts.city;
     const temp = forecasts.temperature ?? "Temperaturen saknas";
     const beskrivning = forecast.description ?? "Ingen prognos";
     const nederbörd = forecasts.wind?.speed ?? null;
     const riktning = forecast.wind?.direction ?? "Okänd riktning";
     const precip = forecast.precipitation;

     const card = document.createElement("div");

     const huvud = document.createElement("h3");
     huvud.textContent = city;

     const tempP = document.createElement("p");
     tempP.textContent = temp;

     const beskrivningP = document.createElement("p");
     beskrivningP.textContent = beskrivning;

     const nederbördP = document.createElement("p");
     nederbördP.textContent = nederbörd;

     const precipP = document.createElement("p");
     precipP.textContent = precip;

     const riktningP = document.createElement("p");
     riktningP.textContent = riktning;

     card.append(huvud, tempP, beskrivningP, nederbördP, precipP, riktningP);
}

const section = document.getElementById("forecasts");
for (const forecast of forecasts){
    section.append(createForecastCard(forecast));
}
//varför går det inte 