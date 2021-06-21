'use strict'; 

const Comment = require('../models/db-models').comment;	//import Comment mongo model
const { log } = require('../../../utils/utils'); //logger import

const addNewComment = async (author, post_id, content) => {
    let feedback = false;

    await Comment.create({
        author: author,
        content: content,
        date: new Date(),
        post_id: post_id,
    })
    .then(() => {
        log("New comment was created", "add-comment"); 
        feedback = true;
    })
    .catch( err => log(err.message, "err:add-comment" ));

    return feedback;
}

module.exports = addNewComment;
