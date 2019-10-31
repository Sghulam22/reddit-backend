const express  = require('express');
const app = express();

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

//listen to server
app.listen(3000);
