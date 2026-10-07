// Encapsulamiento de Comportamiento - Sistema de Veterinaria

function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this.presentarse = function () {
        return `Wenas, soy ${this.nombre}, un ${this.especie} de ${this.edad} años de edad y peso ${this.peso} kg`;
    };
}

const mascota1 = new Mascota("Rez", "Perro", 5, 20);
const mascota2 = new Mascota("Rufino", "gato", 6, 4);
const mascota3 = new Mascota("Macarena", "Mula", 12, 100);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());