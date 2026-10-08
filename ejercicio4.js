// Control de Estados Modificables - Biblioteca

function Libro(titulo, autor, AñoPublicado, editorial) {
    this.titulo = titulo;
    this.autor = autor;
    this.AñoPublicado = AñoPublicado;
    this.editorial = editorial;

    this.prestado = false;

    this.prestar = function () {
        if (!this.prestado) {
            this.prestado = true;
            console.log(`El libro: ${this.titulo} correctamente fue prestado`);
        } else {
            console.log(`Alerta el libro: ${this.titulo} ya se encuentra prestado`);
        }
    };

    this.devolver = function () {
        if (this.prestado) {
            this.prestado = false;
            console.log(`El libro ${this.titulo} correctamente fue devuelto`);
        } else {
            console.log(`Alerta el libro ${this.titulo} no estaba prestado`);
        }
    };
}

const libro = new Libro("Life", "Keith Richards", 2010, "The Orion Publishing Group Ltd")

libro.prestar();
libro.prestar();
libro.devolver();
libro.devolver();