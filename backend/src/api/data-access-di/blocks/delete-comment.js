'use strict'; 

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
