//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb'); // JS6 object distructor

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err) {
    return console.log('mongodb has not connected');
  }
  console.log('MongoDB has connected');

  //insert a document into database
  // db.collection('ToDos').insertOne({
  //   test : 'Something to do',
  //   completed : false
  // },(err,result) => {
  //   if(err) {
  //     return console.log('Unable to insert the data',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name : 'George',
  //   age : 35,
  //   location : 'seattle'
  // }, (err,result) => {
  //   if(err) {
  //     return console.log('unable to inset user document',err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.close();
});
