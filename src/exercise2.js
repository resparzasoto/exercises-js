const numbers = [2, 10, 9, -1, 3];
const sortNumbers = [ ...numbers ];

sortNumbers.sort((a, b) => a - b);

console.log(`Numbers: ${numbers}`);
console.log(`Sort Numbers: ${sortNumbers}`);

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort