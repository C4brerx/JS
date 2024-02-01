// 03-Objetos/objeto.js
let animal = {
    Nombre: "León",
    Tipo: "Mamífero",
    Hábitat: "Savannah",
    Edad: 5,
    Color: "Amarillo"
};

console.log("Valores originales del objeto:");
console.log(animal);

console.log("Edad original:", animal.Edad);
console.log("Color original:", animal.Color);

// Cambiando los valores de Edad y Color
animal.Edad = 6;
animal.Color = "Marrón";

console.log("Valores modificados del objeto:");
console.log(animal);
console.log("Nueva Edad:", animal.Edad);
console.log("Nuevo Color:", animal.Color);
