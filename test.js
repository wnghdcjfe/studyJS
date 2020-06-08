//함수에 왜 freeze?
let a = () => 1; 
Object.freeze(a)
a = 1; 
console.log(a)