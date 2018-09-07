//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('todoApp');

  // findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b92d9cddd4923adb9f19301')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(JSON.stringify(result.value, undefined, 2));
  })


  client.close();
});
