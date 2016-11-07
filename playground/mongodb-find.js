//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb'); // JS6 object distructor

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err) {
    return console.log('mongodb has not connected');
  }
  console.log('MongoDB has connected');

  // db.collection('ToDos').find({
  //   _id:new ObjectID('581ee6a8bdbfc00700461e18')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   if(err) {
  //     console.log('unable to fetch data from ToDos');
  //   }
  // });

  db.collection('ToDos').find({}).count().then((count)=>{
    console.log(`Todos count ${count}`);
  },(err)=>{
    if(err) {
      console.log('unable to find the count from ToDos');
    }
  });
  db.close();
});
