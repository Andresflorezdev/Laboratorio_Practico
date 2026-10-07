// Modelado de Inventario - Tienda de Tecnologia

function Computador(marca, procesador, ramGB, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.precio = precio;
}

const pcEscritorio = new Computador("Asus", "Ryzen 5", "8", "1.960.000");
const pcPortatil = new Computador("Acer", "Intel core ¡5", "16","3.200.000");
const pcEscritorio2 = new Computador("Dell", "Intel ¡9", "16", "4.250.000");

console.log(pcEscritorio);
console.log(pcPortatil);
console.log(pcEscritorio2);