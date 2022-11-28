const unique = (arr) => [...new Set(arr)];
const arr = [1,1,2,3,3,4,4,4,5,5];
console.log(unique(arr)); // [1,2,3,4,5]