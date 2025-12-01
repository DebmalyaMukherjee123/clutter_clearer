import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path'

let mypath = "put the path location where the clutter is made"
let files = await fs.readdir(mypath)


for (let i = 0; i < files.length; i++) {
    console.log("running for : ",files[i])
    let ext = files[i].split('.')[files[i].split('.').length-1]

    if(ext!= 'js' && ext!='json' && files[i].split('.').length>1){
        if(fsn.existsSync(path.join(mypath,ext))){
            fs.rename(path.join(mypath,files[i]),path.join(mypath,ext,files[i]))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(mypath,files[i]),path.join(mypath,ext,files[i]))
        }
    }
    
}