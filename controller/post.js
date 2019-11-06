//import { request } from '../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/express';

var post = require('../connections/post');
var mongoose = require('mongoose');


// Display list of all Authors.
exports.getposts = function(req, res) {
    res.send('NOT IMPLEMENTED: get post');
};

// Display detail page for a specific Author.
exports.get_specific_post = function(req, res) {
    res.send('NOT IMPLEMENTED: specific post ' + req.params.id);
};

// Display Author create form on GET.
exports.delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
exports.edit_post = function(req, res) {
    res.send(req.body);

};

exports.create_post = function(req, res) {

        var new_post= new post.Post({
            post_id:req.body.post_id,
            name:req.body.name,
            author:req.body.author,
            upvotes:req.body.upvotes,
            downvotes:req.body.downvotes,
            comment: req.body.comment 
        });

        new_post.save(function(error) { //This saves the information you see within that Bee declaration (lines 4-6).
            console.log("Your bee has been saved.");
            if (error) {
             console.error(error);
            }
         });
    
        // try{
        //     const saved_post =  new_post.save(); 
        //     res.json(saved_post);
        // }
    
        // catch(err){
        //    res.json({message:err});
        // };
    
    //res.send(req.body);
    console.log(req.body);
};


