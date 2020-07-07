const numbers = [ 2, 9, 10, -1, 3];

const finder = (array, element) => array.findIndex(e => e === element);

const index = finder(numbers, 10);

console.table(numbers);
console.log(`numbers[${index}]`);

//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findIndex