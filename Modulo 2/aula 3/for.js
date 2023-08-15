let  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pares = [];
const impares = [];

for (let i = 0; i < array.length; i++) {
    if (array[i]%2 === 0) {
       pares.push(array[i]);
    }else{
        impares.push(array[i]);
    } 
}

console.log(`Pares: ${pares}`);
console.log(`Impares: ${impares}`);