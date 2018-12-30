window.onload = function() {
    let wait = document.getElementById("wait")
    let counter = document.getElementById("counter")
    let done = document.getElementById("done")
let count = 0
     wait.onclick = function(){
//         let curr = new Date().getTime()

//         while(new Date().getTime()  <  curr + 5000){

//         }
//         done.innerHTML = "DONE"
// }

setTimeout(function(){
    done.innerHTML = "DONE"
}, 3000)
console.log("yoyoyo")
     }

     counter.onclick = function(){
         console.log(count++)
     }

     setInterval  // -> Occurs every t seconds
//event loop       ->      IMPORTANT
}