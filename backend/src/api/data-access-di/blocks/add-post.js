'use strict'; 

const addNewPost = async data => {
    let feedback = false;

    data = JSON.parse(data);

    if (data.content == "" || data.title == "") {
        log('Invalig input data', "err:posting" );
        return feedback;
    }

    await Post.create({
        author: data.author,
        title: data.title,
        content: data.content,
        date: new Date(),
        tags: data.tags,
    })
    .then(() => {
        log("New post was registered", "posting"); 
        feedback = true;
    })
    .catch( err => log(err.message, "err:posting" ));

    return feedback;
}

module.exports = addNewPost;
