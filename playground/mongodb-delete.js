//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('todoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
  //   console.log(doc);
  // });

  // delete duplicates
  // db.collection('Users').deleteMany({name: 'Michael'}).then((result) => {
  //   console.log(result);
  // });

  // delete by ObjectID
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b92dbbcdd4923adb9f1948b')}).then((doc) => {
    console.log(doc);
  });



  //client.close();
});
