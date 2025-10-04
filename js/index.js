//impresiones
console.log('hola mundo');
console.error('error');
//variables
let nombre = "pepe";
let apellido = "perez";
const nomcompleto = `${nombre} ${apellido}`; //concatena
alert(nomcompleto); //cuadro emergente
let edad = 25;
let salario = 12.5;
let mayorEdad = true;
let vacio = null;
let indefinido = undefined;
//arrys
let num = [1,2,3,4,5,6,7,8,9,10];
let otro = ['asdf', 12, 12.5, [1,2,3], null];
console.log(num[1]);
//objetos
let persona = {
    nombre: 'Ana',
    apellido: 'Gomez',
    edad: 30,
    mayorEdad: true,
    jobs: []
}
console.log(persona.nombre);
persona.nombre = 'Ana Maria';
console.log(persona.nombre);
//condicionales
let autorizado = true;
if (autorizado){
    console.log('bienvensdo');
}else{
    alert('no autorizado');
}
//ciclos
