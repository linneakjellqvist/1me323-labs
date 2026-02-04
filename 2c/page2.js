const savedAnimal = localStorage.getItem("animal");
console.log(savedAnimal);

const animalRemove = document.getElementById("djur");

animalRemove.addEventListener("click", function(){
    localStorage.removeItem("animal");
    console.log("tabort sparade djur");
});

const themeText = document.querySelectorAll('input[name="size"]');
let vanligStorlek = "liten";
if(localStorage.getItem('valdStorlek')){
    vanligStorlek = localStorage.getItem('valdStorlek');
}

document.body.className = vanligStorlek + '-size';
document.querySelector(`input[value="${vanligStorlek}"]`).checked = true;
console.log(vanligStorlek);
themeText.forEach(radio => {
    radio.addEventListener('change', function()
{
localStorage.setItem('valdStorlek', this.value);
document.body.className = this.value + '-size';
});
});



