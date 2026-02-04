//const student = {
   // name: "Linnea",
   // course: ["Webbteknik 3", "Digitala medier"]

//};

//localStorage.setItem("student", student);
//console.log(localStorage.getItem("student"));

const student = { 
    name:"Linnea",
    course: ["Webbtenik 3", "Digitala medier"],
};
//konverterar objektet till JSON 
const jsonString = JSON.stringify(student);
console.log(jsonString);

//console.log(typeof jsonString); //sträng 

const parsed = JSON.parse(jsonString); //objekt igen 
console.log(parsed.name);
console.log(parsed.course);

//console.log(typeof parsed);
//console.log(parsed.name); //utger namnet
function saveStudent(studentData){
    const json = JSON.stringify(studentData);
    localStorage.setItem("student", json);
}

function loadStudent(){
    const saved = localStorage.getItem("student");
    return JSON.parse(saved);
}

saveStudent(student);
