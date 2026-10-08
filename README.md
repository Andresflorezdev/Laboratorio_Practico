# Laboratorio Práctico - Funciones Constructoras

Este repositorio contiene el desarrollo del laboratorio práctico sobre **Funciones Constructoras** en JavaScript. A través de diferentes ejercicios, se abordan conceptos como la creación e instanciación de objetos con `new`, el uso de la palabra clave `this`, el encapsulamiento de datos y métodos, el control de estados internos y la captura dinámica de información desde la consola.

---

## Instalación y Configuración

Instalar las dependencias del proyecto:

```bash
# Con pnpm (Recomendado)
pnpm install

# Alternativas:
npm install
# o
yarn install
```

### Ejecución de los ejercicios

Puedes ejecutar cualquiera de los ejercicios utilizando Node.js:

```bash
node ejercicio1.js
node ejercicio2.js
node ejercicio3.js
node ejercicio4.js
node ejercicio5.js
```

---

## Preguntas de los Ejercicios

## Ejercicio 1

### Pregunta analítica:
¿Qué ventaja técnica tiene crear un molde (función constructora) en lugar de escribir un objeto literal estructurado individualmente para cada computador?

**Respuesta:**  
Porque la funcion constructora nos permite reutilizar la estructura o propiedades para crear varios computadores sin repetir codigo. Solo definimos propiedades y luego usamos new para crear cada objeto con esa misma estructura.

---

## Ejercicio 2

### Pregunta analítica:
¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades específicas de su propio objeto utilizando la palabra clave this?

**Respuesta:**  
Porque `this` hace referencia al objeto al que pertenece el método, permitiendo acceder a sus propias propiedades sin afectar las de otros objetos. En breves palabras this es el objeto actual, Entonces, cuando el mismo método pertenece a diferentes objetos, this cambia y hace referencia al objeto que corresponde en cada caso.

---

## Ejercicio 3

### Pregunta analítica:
¿Qué ventajas a nivel de cohesión de software presenta el hecho de que el objeto conozca por sí mismo su estado lógico (si aprobó o no)?

**Respuesta:**  
Porque la informacion y la logica relacionada con ella estan dentro del mismo objeto. Esto hace que el codigo sea mas organizado y evita tener que repetir la misma logica en diferentes partes del programa.

---

## Ejercicio 4

### Pregunta analítica:
¿Qué ocurriría si el libro ya estaba prestado y alguien intenta prestarlo nuevamente sin controles de estado internos?

**Respuesta:**  
Si los controles de estados no existen, se prestaria un libro nuevamente que ya esta prestado, generando incosistencia porque el libro apareceria prestado a mas de una persona

---

## Ejercicio 5

### Pregunta analítica:
¿Qué ventajas tiene permitir que la información sea ingresada por el usuario en lugar de escribir los datos directamente en el código?

**Respuesta:**  
Porque permite que el usuario ingrese los datos, haciendo que el programa sea más dinámico, ya que puede recibir información diferente cada vez que se utiliza sin tener que modificar el código. Por ejemplo, se pueden registrar diferentes vehículos utilizando el mismo programa, solo cambiando los datos que ingresa el usuario.