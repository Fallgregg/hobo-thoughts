require('../src/api/data-access/blocks/db-connect')();	//connect to MongoDB

const Post = require('../src/models/post');	//import Post mongoose model

async function addNewPost (author, title, content) {
    let feedback = false;

    if (author && title && content)
        await Post.create({
            author: author,
            title: title,
            content: content,
            date: new Date()
        }).then(feedback = true);

    return feedback;
}

module.exports = addNewPost;