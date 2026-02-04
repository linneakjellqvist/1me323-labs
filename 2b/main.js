const value = document.getElementById("value");
const öka = document.getElementById("increas");
const minska = document.getElementById("decreas");
const nolla = document.getElementById("reset");


const car ={
    brand: "Volvo",
    model: "V40",
    year: 2018,

getDescription() {
    return `${this.year}, ${this.brand}, ${this.model}`;
},
honk() {
    console.log("Tut tut!");
}
};

console.log(car.getDescription());
car.honk();

const counter= {
    value: 0,
    increas(){
        this.value++;
        uppdateraValue();
        },

        decrease(){
        this.value--;
        uppdateraValue();
        },
        reset(){
        this.value=0;
        uppdateraValue();
        }
    
};

function uppdateraValue(){
    value.textContent = counter.value;
}
function ökaValue(){
    counter.increas();
}
function minskaValue(){
    counter.decrease();
}
function nollaValue(){
    counter.reset();
}
öka.addEventListener("click", ökaValue);
minska.addEventListener("click", minskaValue);
nolla.addEventListener("click", nollaValue);



console.log(counter.value);
counter.increas();
console.log(counter.value);
counter.decrease();
console.log(counter.value);
counter.decrease();
console.log(counter.value);
counter.reset();
console.log(counter.value);

