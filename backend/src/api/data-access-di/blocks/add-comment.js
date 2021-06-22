'use strict'; 

const addNewComment = async data => {
    let feedback = false;

    data = JSON.parse(data);

    if (!data.content.length) return feedback;

    await Comment.create({
        author: data.author,
        content: data.content,
        date: new Date(),
        post_id: data.post_id,
    })
    .then(() => {
        log("New comment was created", "add-comment"); 
        feedback = true;
    })
    .catch( err => log(err.message, "err:add-comment" ));

    return feedback;
}

module.exports = addNewComment;
