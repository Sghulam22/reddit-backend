const express = require('express');
const router = express.Router();
const post =require('../models/posts');



router.get('/',(req,res) => {
    res.send ('we are in post');
});


router.post('/',(req,res)=>
{
    console.log(req,body);
    
})

module.exports = router;