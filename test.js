//함수에 왜 freeze?
let a = () => Object.freeze({
    "a" : 1
}) 
const ret = a(); 
re
a = 2;
console.log(a)

Number.isSafeInteger(1) 