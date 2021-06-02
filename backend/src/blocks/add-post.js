const Post = require('../models/post');	//import Post mongoose model

async function addNewPost (author, title, content, tags) {
    let feedback = false;

    await Post.create({
        author: author,
        title: title,
        content: content,
        date: new Date()
    }).then(feedback = true);

    return feedback;
}

module.exports = addNewPost;