// We will declare all our dependencies here
const express = require('express');
const path = require('path');
//const bodyParser = require('body-parser');
//const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/default');
const router = require('./router');

const app = express();

mongoose.set('debug', true);
mongoose.Promise = global.Promise
mongoose.connect(config.database, { useMongoClient: true });

app.listen(3000);

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

//router(app);