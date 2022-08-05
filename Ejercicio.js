console.log("Ejercicio 1");

function esNatural(num) {
  //* Devuelve true si el num es Natural
  //* Usa Recursividad

  function esNaturalRecursivo(num) {
    if (num === 0) {
      return true;
    }
    if (num < 0) {
      return false;
    }
    return esNaturalRecursivo(num - 1);
  }
  console.log(esNaturalRecursivo(num));
}

esNatural(5);
esNatural(0);
esNatural(-5);

console.log("Ejercicio 2");

function Colores(colores) {
  //* Aquellos colores negros cambiar su palabra a Black
  //* Devuelve el arreglo usando el metodo map

  colores.map((color, indice, colores) => {
    if (color === "Negros") {
      return (colores[indice] = "Black");
    }
  });
  return console.log(colores);
}
let colores = ["Blanco", "Negros", "Rojo", "Amarillo", "Negros", "Verde"];

Colores(colores);

console.log("Ejercicio 3");

function Filtrado(colores) {
  //* Del resultado de la funcion Colores() filtra aquellos colores llamados Black
  //* ejemplo ---> ['Blanco', 'Rojo', 'Amarillo', 'Verde']

  // colores.filter( (color, indice, colores)=>{
  //     if (color === 'Black') {
  //         colores.splice(indice, 1);
  //     }
  // } );
  // return console.log(colores);

  let coloresFiltrados = colores.filter((color) => {
    return color !== "Black";
  });
  return console.log(coloresFiltrados);
}

Filtrado(colores);

console.log("Ejercicio 4");

function Filtrar(personas) {
  //* Filtrar aquellas personas que sean menores de edad, siendo mayor de edad a partir de los 18 años
  //* Mostrar arreglo

  let mayorEdad = personas.filter((persona) => {
    return persona.edad >= 18;
  });
  //   return console.log(mayorEdad);
  return console.log(
    mayorEdad.map((persona) => {
      return persona.nombre + " " + persona.edad + " años es mayor de edad";
    })
  );
}

const personas = [
  { nombre: "Carlos", edad: 20 },
  { nombre: "Esteban", edad: 15 },
  { nombre: "Franco", edad: 12 },
  { nombre: "Estela", edad: 19 },
  { nombre: "Juan", edad: 10 },
  { nombre: "Mirtha", edad: 17 },
];

Filtrar(personas);
