const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'files')
const filepath = `${dirPath}/apple.txt`
    
/*fs.writeFileSync(filepath,'This is a simple text file')
fs.readFile(filepath , (err,item) => {
    console.log(item)
})

fs.appendFile(filepath,' and file name is apple.txt',(err)=> {
    if(!err) console.log('File is updated')
})

fs.rename(filepath,`${dirPath}/fruit.txt`,(err) => {
        if(!err) console.log("file name is updated")
})
*/
fs.unlinkSync(`${dirPath}/fruit.txt`)