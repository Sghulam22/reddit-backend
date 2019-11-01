const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/config');
const parser = require('body-parser');

app.use(parser.json());

//middle wear
app.use('/',()=>{
    console.log('homepage');
});

app.use('/posts',()=>{
    console.log('posts');
});

//app.use(auth);


//routes
app.get('/',(req,res)=>
{
    res.send ('we are in home');
});

app.get('/posts',(req,res) => {
    res.send ('we are in post');
});

mongoose.connect(config.database, { useMongoClient: true },()=>
{
    console.log('connected to db')
});
// mongoose.connect('mongodb+srv://test123:qwerty.66@cluster0-ywbpt.mongodb.net/test?retryWrites=true&w=majority',() => 
// console.log('connected to db'),
// useMongoClient: true
// );

//listen to server
app.listen(3000);
