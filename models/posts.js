var mongoose = require('mongoose');


var PostSchema = new mongoose.Schema({
    link:{type: String, required:true},
    post_id:{type: Number, required:true, unique:true},
    date:{type:Date,default:Date.now},
    name:String,
    author: String,
    upvotes:Number,
    downvotes:Number,
    comment:String,
});

PostSchema.methods.toJson = function () {
    return {
        link:this.link,
        post_id:this.post_id,
        name:this.name,
        author:this.author,
        upvotes:this.upvotes,
        downvotes:this.downvotes,
        comment:this.comment,
        date:this.date,
    }
    };

    module.exports = mongoose.model('post', PostSchema);
