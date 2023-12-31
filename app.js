const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath);
console.log(base)
//points to directory where app.js is located
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)
//getting an absolute path is great for when you want to run in multiple differernt environments