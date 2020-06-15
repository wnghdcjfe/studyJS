const sinon = require('sinon');

const myObject = {
    helloF : () => "hello",
    hello : "world" 
};

sinon.stub(myObject, 'hello').value('Sinon');

console.log(myObject.helloF());
console.log(myObject.hello);
// Sinon
 
sinon.restore();
console.log(myObject.hello);
// world
let run; 
run = sinon.stub();
console.log(run)
