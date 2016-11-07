var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {Users} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var newTodo = new Todo({
    text : req.body.text
  });
  newTodo.save().then((doc) => {
    res.send(doc);
  } , (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});
app.listen(3000, () => {
  console.log('The app is running on port - 3000 ');
});

module.exports = { app };
