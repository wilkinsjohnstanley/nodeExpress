//readFile is async, readFilesync is synchronous
const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const text = readFileSync('./content/subfolder/text.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt', 
    `hello world! Here are my thoughts: ${first}, ${text}`

    )
    console.log('done with this task')
    console.log('starting the next one')