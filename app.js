// const express  = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const config = require('./config/config');
// const parser = require('body-parser');

// const router = require('./router');
// app.listen(3000);


// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// MongoClient.Promise = global.Promise
// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'myproject';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);

//   client.close();
// });


// app.use(parser.json()); 

// //middle wear
//  app.use('/posts',post_route);
// //  app.use(app.router);
// //  post_route.initialize(app);
// // app.use('/comments',comments_route);




// We will declare all our dependencies here
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/config');
const router = require('./router');
const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.json());


// app.use('/posts', () => {
//     console.log('this is a middleware running');
// })

//IMPORT ROUTES

//app.use('/posts', postsRoute)

//connect to DB
mongoose.connect('mongodb+srv://test123:qwerty66@cluster0-ywbpt.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true },
  () => console.log('connected to DB!')
);


//How do we start listening to the server


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.listen(config.port, () => {
    console.log(`Starting the server at port ${config.port}`);
});
// app.use('/post',pos)
    
router(app);