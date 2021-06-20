'use strict'; 

const Post = require('../models/db-models').post;	//import Post mongoose model
const { log } = require('../../../utils/utils'); //logger import

const addNewPost = async (author, title, content, tags) => {
    let feedback = false;

    await Post.create({
        author: author,
        title: title,
        content: content,
        date: new Date(),
        tags: tags,
    })
    .then(() => {
        log("New post was registered", "posting"); 
        feedback = true;
    })
    .catch( err => log(err.message, "err:posting" ));

    return feedback;
}

module.exports = addNewPost;
