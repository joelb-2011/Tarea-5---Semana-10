const contenido = document.getElementById("contenido");

let nombre = "Joel Barrionuevo";
let edad = 20;

let edades = [18, 29, 10, 63, 91];

addContent(`<h2>Mi nombre es ${nombre} y tengo ${edad} años.</h2>`);

for(let i = 0; i < edades.length; i++){
    addContent(`<h3>La edad ingresada es de ${edades[i]} años.</h3>`)
}

function addContent(newContent){
    contenido.innerHTML += newContent;
}
