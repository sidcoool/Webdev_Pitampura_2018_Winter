var standard_input1 = process.stdin
standard_input1.setEncoding('utf-8')

var standard_input2 = process.stdin
standard_input2.setEncoding('utf-8')
let t, flag = false, t_flag = true
t = 3


standard_input2.on('data', function (data) {

    if(t_flag){
    t = data
    t_flag = false
    }
else{
    flag = false
   let words = data.trim().toString().split(" ")
   words.forEach((word) => {
       if(word == "not")
       flag = true
   });
   
   if(flag)
   console.log("Real Fancy")
   else
   console.log("regularly fancy")

            t -= 1 
            if(t == 0)
            process.exit();
}
    });

