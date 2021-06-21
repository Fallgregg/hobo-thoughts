'use strict'; 

const Comment = require('../models/db-models').comment;	//import Comment mongo model
const { log } = require('../../../utils/utils'); //logger import

const deleteComment = async id => {
    let feedback = false;

    await Comment.deleteOne({ _id: id })
            .then(() => {
                log('Comment %s was deleted', "delete-comment", id);
                feedback = true;
            })
            .catch( err => log(err.message, "err:delete-comment" ) );

    return feedback;
}

module.exports = deleteComment;
