localStorage.setItem("animal", "Hund");

const nameInput = document.getElementById("nameInput");

const nameEl = localStorage.getItem("namn");
if (nameEl){
    nameInput.value = nameEl;
}

namn.addEventListener("input", function(){
    localStorage.setItem("name", nameInput.value);
});