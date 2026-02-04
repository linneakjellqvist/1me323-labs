const person= {
    firstName: "Linnea",
    lastName: "Kjellvist",
    age: 21,
    occupation: "student",
    address: { 
        street:"Stallvägen",
        city:"Växjö",
        country:"Sverige"
    }
};

console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);
console.log("Stad", person.address.city);

const book = {
    Titel: "The secret history",
    författare: "Donna Tartt",
    sidor: 628,
    pocket: true, 
    utgiven: {
        år: 1992,
        stad: "US",
        av: "Alfred A. Knopf"
    },
    huvudKaraktär: ["Richard", "Edmund", "Julian", "Camilla", "Charles", "Henry"],
    genre: "Dark Academia"
};

person.hobby= "Film";

person.age= 37;

delete person.occupation;

console.log(person.email);
console.log("Min sysselsättning", "occupation"in person);

const personInfo = document.getElementById("Första");
personInfo.innerHTML = `
<h2>${person.firstName} ${person.lastName}</h2>
<p>Ålder: ${person.age}</p>`;

//const genres = book.gentes.join(", ");
for (const key in person) {
    console.log(key, person[key]);}
