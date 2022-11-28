//Não utilize delete para remover 1 item do array, ele vai deixar a posição do array como undefined,
//o ideal é utilizar o splice.


// UTILIZANDO DELETE
let arr = ['Everton','João','Júlia','Rafael','Cauê','Marco'];
arr.length; //6
delete arr[3]; // true
arr.length; //6
console.log(arr); // ['Everton','João','Júlia', undefined,'Cauê','Marco']


// UTILIZANDO SPLICE
let arry = ['Everton','João','Júlia','Rafael','Cauê','Marco'];
arry.length; // 6
arry.splice(3,1); // ['Rafael']
arry.length; //5
console.log(arry); // ['Everton','João','Júlia','Cauê','Marco']