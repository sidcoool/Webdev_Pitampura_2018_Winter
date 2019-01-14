const fs = require("fs")
const path = require("path")

fs.writeFile(
    path.join(__dirname,"myfile.txt"),
   " Hello World",
    {
        flag: "a"      
    },
    (err)=>{
      if(err)  console.error(err)
    }
)