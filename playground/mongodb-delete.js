//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); // JS6 object distructor

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err) {
    return console.log('mongodb has not connected');
  }
  console.log('MongoDB has connected');
  //deleteMany
  // db.collection('ToDos').deleteMany({
  //   test : "Eat food"
  // }).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('ToDos').deleteOne({
  //   test : "Eat food"
  // }).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('ToDos').findOneAndDelete({
  //   completed : false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.close();
});
