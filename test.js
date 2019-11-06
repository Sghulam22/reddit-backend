const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://test123:qwerty66@cluster0-ywbpt.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
client.connect(err => {
    try{
  console.log(client.isConnected());
  client.db('reddit').collection('post').insert({test : true , description : "in post"});;
    
  // perform actions on the collection object
  client.close();
    }
    catch(err){

    }
});