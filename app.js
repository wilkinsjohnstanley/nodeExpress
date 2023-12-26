// const amount = 12

// if (amount<10){
//     console.log('small number. booo!');
// }
// else {
//     console.log('large number. やった！');
// }
// console.log(`Hello world!!`);

const names = require('./4-names')
const sayHi = require('./5-modules')
sayHi('John')
sayHi(names.john)
sayHi(names.george)