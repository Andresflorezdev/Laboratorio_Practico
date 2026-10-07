// Logica de Negocio Automatica - Plataforma de Cursos

function Estudiantes(nombre, curso, nota) {
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;

    this.aprobado = nota >= 3.0;
    this.mostrarResultado = function () {
        if (this.aprobado) {
            console.log(`la estudiante ${this.nombre} Aprobo ${this.curso} con una nota de ${this.nota}`);
        } else {
            console.log(`la estudiante ${this.nombre} Reprobo ${this.curso} con una nota de ${this.nota}`);
        }
    };
}

const estudiante1 = new Estudiantes("Andrea Giraldo", "Matematicas", 3.1);
const estudiante2 = new Estudiantes("Emiliana Restrepo", "Tecnologia", 2.3);
const estudiante3 = new Estudiantes("Sofia Tabares", "Ciencias Politicas", 4.5);
const estudiante4 = new Estudiantes("Salome Alzate", "Fisica", 2.9);

estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
estudiante4.mostrarResultado();