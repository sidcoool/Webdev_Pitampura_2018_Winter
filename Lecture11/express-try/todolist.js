const app = require('express')();
let todos = []

app.get('/', (req, res) => res.send(todos))

app.get('/add', (req, res) => {
  if (req.query.task) {
    todos.push(req)
    console.log(todos)
  }
  res.redirect('/')
})

app.listen(3434)