async function menu(){
    const response = await fetch("menu.json");
    const menu = await response.json();
    console.log(menu.restaurang.beskrivning);
    console.log(menu.kategorier.length);
    }
menu();