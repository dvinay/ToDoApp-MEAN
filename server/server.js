var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {Users} = require('./models/user.js');

var port = process.env.PORT || 3000;
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
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectId.isValid(id)) {
    res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
    //console.log(todo);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectId.isValid(id)) {
    res.status(404).send();
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
    //console.log(todo);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
app.listen(port, () => {
  console.log(`The app is running on port - ${port} `);
});

module.exports = { app };
