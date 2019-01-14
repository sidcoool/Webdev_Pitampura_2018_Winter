const app = require('express')();
const fs = require("fs")
const path = require("path")
let todos = []

app.get('/', (req, res) => res.send(todos) )
//   if(localStorage.list){
//     todos = JSON.parse(localStorage.list)
// }
  


app.get('/add', (req, res) => {

  todos.push(req.query.task)

  if (req.query.task) {
    fs.appendFile(
    path.join(__dirname,"myTodos.txt"),
    "\r\n" + req.query.task,
    {
        flag: "a"      
    },
    (err)=>{
      if(err)  console.error(err)
    }
) + "\n"
    // localStorage.list = JSON.stringify(todos)
  }
  res.redirect('/')
})

app.listen(3434)