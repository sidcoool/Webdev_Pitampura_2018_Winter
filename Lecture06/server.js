const express = require("express")
const app = express()
const path = require("path")
app.use(express.urlencoded({
    extended: true
  }))
  app.use(express.json())
  
 app.use("/", express.static(path.join(__dirname, "todolist")))

app.listen(3333, ()=>{
    console.log("server running")
})
