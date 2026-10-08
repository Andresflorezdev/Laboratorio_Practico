const prompt = require("prompt-sync")();

function Vehiculo(marca, modelo, año, color, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.precio = precio;

    this.encendido = false; // cambiamos una propiedad del objeto

    this.presentar = function () {
        return `${this.marca} ${this.modelo} ${this.año}, color ${this.color}, precio $${this.precio}`;
    };

    this.encender = function () {
        this.encendido = true; // aqui pase de false a true la propiedad del objeto
        return `${this.marca} ${this.modelo} encendido`;
    };

    this.pruebaDeManejo = function (cliente) {
        if (!this.encendido) {
            return `El ${this.marca} ${this.modelo} esta apagado, enciendalo antes de la prueba de manejo`;
        }
        return `${cliente} esta probando el ${this.marca} ${this.modelo} ${this.año} de color ${this.color}`;
    };
}

const vehiculos = [];

for (let i = 1; i <= 3; i++) {
    console.log(`\nRegistro del vehiculo ${i}`);
    const marca = prompt("Marca: ");
    const modelo = prompt("Modelo: ");
    const año = Number(prompt("Año: "));
    const color = prompt("Color: ");
    const precio = Number(prompt("Precio: "));
    
    vehiculos.push(new Vehiculo(marca, modelo, año, color, precio));
}
console.log();
const cliente = prompt("Nombre del cliente que hará la prueba de manejo: ");

console.log("\nResultados");

for (const vehiculo of vehiculos) {
    console.log(vehiculo.presentar());
    console.log(vehiculo.encender());
    console.log(vehiculo.pruebaDeManejo(cliente));
    console.log("-------------------");
};