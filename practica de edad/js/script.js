const name = "Luis Lozada";

let age = 18;

let proyectofavorito = "Hallway"

age = 19

console.log(name);
console.log(age);
console.log(proyectofavorito);

console.log ("Mi proyecto favorito es " + proyectofavorito);

function mostrarProyecto(texto){
    console.log(texto)
}

mostrarProyecto(name)
mostrarProyecto(age)
mostrarProyecto(proyectofavorito.toUpperCase()) 

if (age > 18){
    console.log("Eres mayor de edad");
} else if (age < 18){
    console.log("Eres menor de edad");
} else {
    console.log("Empeiza a pagar el SAT");
}