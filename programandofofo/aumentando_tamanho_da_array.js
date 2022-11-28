// quando se aumenta o tamanho do array, as novas posições serão preenchidas com undefined

let arr = [12,222,1000,124,98,10];
arr.length = 4;
console.log(arr); // [12,222,1000,124]
arr.length = 5;
console.log(arr); // [12,222,1000,124, undefined]
