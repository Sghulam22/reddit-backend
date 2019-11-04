const express = require('express');
const router = express.Router();
const post =require('../models/posts');


//gets all the posts
router.get('/',async (req,res) => 
{
    try{
        const all_posts= await post.find();
        res.json(all_posts);
    }
    catch(err)
    {
        res.json({message:err});
    }
    
});

//submit post
router.post('/', async(req,res)=>
{
    //console.log(req.body);
    const new_post= new post({
        link:req.body.link,
        post_id:req.body.post_id,
        name:req.body.name,
        author:req.body.author,
        upvotes:req.body.upvotes,
        downvotes:req.body.downvotes,
        comment: req.body.comment 

    });

    try{
    const saved_post =  await new_post.save(); 
    res.json(saved_post);
    }

    catch(err){
       res.json({message:err});
    };

});

//get specific post
router.get('/:post_id',async(req,res)=>{
   try{ const temp = await post.findById(req.params.post_id);
    res.json(post);
   }
   catch(err){
    res.json({message:err});
   }
});


//delete a post
router.delete('/:post_id',async(req,res)=>{
    try{
    const removed = await post.remove({_post_id:req.params.post_id});
    }
    catch(err){
        res.json({message:err});
    }
});



module.exports = router;