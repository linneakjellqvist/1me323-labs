//const responsePromise = fetch("message.txt");
//console.log(responsePromise);


//const textPromise = responsePromise.then(response =>{ 
    //console.log(response);
    //return response.text();
//});

//textPromise.then( text => {
    //document.querySelector("main").textContent = text;
//});

fetch("message.txt").then(response => {
    console.log(response);
    console.log("Status:", response.status);
    console.log("OK?", response.ok);
    console.log("URL:", response.url);
    return response.text();
})
.then(text => {
    console.log("innehåll:", text);
});

fetch("data.json").then(response => {
    console.log(response);
    return response.json();
})
.then(json =>{
    console.log("innehåll", json);
});

const response = await fetch("messag.txt")
const text = await response.text();
//document.querySelector("main").textContent = text;