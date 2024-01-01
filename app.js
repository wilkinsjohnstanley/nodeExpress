const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', (err, result)=>{
    if(err){
        return
    }
    console.log(result)
})