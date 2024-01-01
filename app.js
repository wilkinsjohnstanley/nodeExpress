const { readFile, writeFile } = require('fs')

readFile('./content/first.txt','utf8' ,(err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/text.txt', 'utf8', ()=>{
if(err){
    console.log(err)
    return
}
const text = result
writeFile(
    './content/result-aync.txt', 
    `hello world! Here are my thoughts: ${first}, ${text}`, (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log(result)
    }
    )
    })
})