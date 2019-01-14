const EventEmitter = require("events")
const em = new EventEmitter()

em.on("abd", (data)=>{
    console.log("abd triggered" + data)
})

em.on("abc", (data)=>{
    console.log("abc triggered" + data)
})

// setInterval(()=>{
//     em.emit("abd", "hello")
// },2000)

setInterval(()=>{
    em.emit("abc", "hello")
},2000)

