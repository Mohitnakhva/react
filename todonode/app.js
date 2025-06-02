const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8083;


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

let todos = []

app.get('/', (req, res) => {
  res.render('index', { todos })
})

app.post('/add', (req, res) => {
  const task = req.body.task
  if (task) todos.push({ id: Date.now(), task })
  res.redirect('/')
})

app.post('/edit', (req, res) => {
  console.log('Edit request body:', req.body); // Debug print incoming data

  const id = parseInt(req.body.id, 10);
  const newTask = req.body.newTask?.trim();

  if (!newTask) {
    console.log('No new task provided');
    return res.redirect('/');
  }

  let found = false;
  todos = todos.map(todo => {
    if (todo.id === id) {
      found = true;
      return { ...todo, task: newTask };
    }
    return todo;
  });

  if (!found) {
    console.warn(`Todo with id ${id} not found`);
  } else {
    console.log(`Todo with id ${id} updated`);
  }

  res.redirect('/');
});



 


app.post('/delete', (req, res) => {
  const id = parseInt(req.body.id)
  todos = todos.filter(t => t.id !== id)
  res.redirect('/')
})


app.listen(port, () => {
  console.log(`To-Do List running at http://localhost:${port}`);
});

