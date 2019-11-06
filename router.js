const userController = require('./controller/userController');
const postController = require('./controller/postController');
const commentController = require('./controller/commentController');
const express = require('express');

module.exports = function (app) {
    
    const router = express.Router();
    //still needs work not fully functional

    router.get('/', postController.getposts);
    router.get('/:post_id/comment',commentController.getAllComments);
    router.post('/posts',postController.create_post);
    router.delete('/:post_id/delete',postController.delete_post,commentController.deleteAllComments);
    router.delete('/:post_id/:comment_id',commentController.deleteSingleComment);
    router.post('/user/createuser',userController.createUser);
    router.put('/user/:user_id',userController.editUser);
    router.delete('/:user_id/delete',userController.deleteUser);

    app.use('/', router);
};