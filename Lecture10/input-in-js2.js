

process.stdin.setEncoding('utf8');
let flag = false
process.stdin.on('readable', () => {
  let chunk = process.stdin.read();
    if (chunk !== null) {
      let  lines = chunk.toString().split("\n")
      lines.splice(0,1)
       lines.forEach((line) => {
           flag = false
           let words = line.split(" ");
           words.forEach((word)=>{
            if(word == "not")
            flag = true
           })

           if(flag)
           console.log("Real Fancy")
           else
           console.log("regularly fancy")
        })

  }
});

process.stdin.on('end', () => {
  console.log("end")
});