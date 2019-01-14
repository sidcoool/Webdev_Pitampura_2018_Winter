
const express = require('express')
const app = express()

const todos = ["one task", "two task"]

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => res.send(`
<html>
<head>
<title> Todo List </title>
</head>
<body>
<form method="post" action="/addtodo">
  <input type="text" name="newtodo">
  <input type="submit">
</form>
<ul>
  <li>
  ${todos.join('</li><li>')}
  </li>
</ul>
</body>
</html>
`))

app.get('/addtodo', (req, res) => {
  todos.push(req.query['newtodo'])
  res.redirect('/')
})

app.post('/addtodo', (req, res) => {
  todos.push(req.body['newtodo'])
  res.redirect('/')
})


app.listen(3232, () => console.log(`
Server started on http://localhost:3232
`))