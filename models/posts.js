var mongoose = require('mongoose');


var PostSchema = new mongoose.Schema({
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
        post_id:this.post_id,
        name:this.name,
        author:this.author,
        upvotes:this.upvotes,
        downvotes:this.downvotes,
        comment:this.comment,
        date:this.date,
    }
    };
    // var new_post = mongoose.model("post", PostSchema);
    // module.exports = mongoose.model('post', PostSchema);
    module.exports.PostSchema=PostSchema;
