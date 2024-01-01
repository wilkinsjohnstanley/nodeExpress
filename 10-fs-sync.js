const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const text = readFileSync('./content/subfolder/text.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `hello world! Here are my thoughts: ${first}, ${text}`)