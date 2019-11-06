var mongoose = require("mongoose");
var post = require("../models/posts"); /* Imports the Bugs module. It contains the bug schema we need. */
mongoose.connect('mongodb+srv://test123:qwerty66@cluster0-ywbpt.mongodb.net/test?retryWrites=true&w=majority'); //Test is the database name. 

var db = mongoose.connection;
 
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function(callback) {
   console.log("Connection Succeeded."); /* Once the database connection has succeeded, the code in db.once is executed. */
});
 
var Post = mongoose.model("post", post.PostSchema); //This creates the postmodel.
 
module.exports.Post = Post; /* Export the post model so index.js can access it. */