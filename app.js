const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/config');
const parser = require('body-parser');
const post_route= require('./routers/posts');
app.use(parser.json()); 

//middle wear
app.use('/posts',post_route);


//listen to server
app.listen(3000);

//routes
app.get('/',(req,res)=>
{
    res.send ('we are in home');
});

app.get('/posts',(req,res) => {
    res.send ('we are in post');
});


const MongoClient = require('mongodb').MongoClient;
MongoClient.Promise = global.Promise   
const uri = "mongodb+srv://test123:<qwerty66>@cluster0-ywbpt.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


// mongoose.set('debug', true);
// mongoose.Promise = global.Promise
// mongoose.connect(config.database, { useMongoClient: true },()=>
// {
//     console.log('connected to db')
// });


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

//listen to server
//app.listen(3000);
