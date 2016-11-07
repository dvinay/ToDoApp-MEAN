//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); // JS6 object distructor

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err) {
    return console.log('mongodb has not connected');
  }
  console.log('MongoDB has connected');

  //findOneAndUpdate
  db.collection('ToDos').findOneAndUpdate({
    _id : new ObjectID('581edf96e4ee2706ff42d815')
  }, {
    $set : {
      completed : true
    }
  }, {
    returnOriginal : false
  }).then((result) => {
    console.log(result);
  });

  db.close();
});
