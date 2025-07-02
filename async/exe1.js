import fs from "fs"
fs.readFile("./txtFile.txt","utf-8", (err,data)=>{
    if(err){
        console.log(err);
    }
    const mytime = new Date().toISOString()
    console.log(data);
    console.log(data.length);
    console.log(mytime);
    console.log(new Date().toTimeString());

})
