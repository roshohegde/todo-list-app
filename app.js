const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB connection string)
mongoose.connect('mongodb://localhost/todo-list-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });



// Define a Task model
const Task = mongoose.model('Task', {
  text: String,
  completed: Boolean,
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Define routes

// Home route - display tasks
app.get('/', async (req, res) => {
    try {
      const tasks = await Task.find({}).exec();
      res.render('index', { tasks });
    } catch (err) {
      console.error(err);
    }
  });
  
  

// Create a new task
app.post('/add', (req, res) => {
  const taskText = req.body.newTask;

  const task = new Task({
    text: taskText,
    completed: false,
  });

  task.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

// Mark a task as completed
app.post('/complete/:taskId', (req, res) => {
  const taskId = req.params.taskId;

  Task.findByIdAndUpdate(taskId, { completed: true }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

// Delete a task
app.post('/delete/:taskId', (req, res) => {
  const taskId = req.params.taskId;

  Task.findByIdAndRemove(taskId, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

// Listen on port 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

