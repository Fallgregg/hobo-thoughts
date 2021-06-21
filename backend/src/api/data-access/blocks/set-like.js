'use strict'; 

const Like = require('../models/db-models').like;	//import Like mongo model
const { log } = require('../../../utils/utils'); //logger import

const setLike = async (author, post_id, value) => {
    let feedback = false;
    let setAllow = false;
    const existingMark = {};

    value == "true" ? value = true : value = false;

    await Like.findOne({ author: author, post_id: post_id })
        .then( like => {
            if (like)
                Object.assign(existingMark, like._doc)
        });

    if (existingMark === {})
        setAllow = true;
    else
        await Like.deleteOne({ author: author, post_id: post_id })
            .then(() => {
                existingMark.value !== value ?
                    setAllow = true
                :
                    log('Mark %s by %s deleted', "set-like", existingMark._id, existingMark.author);
                feedback = true;
            })
            .catch( err => log(err.message, "err:set-like" ) );

    if (setAllow)
        await Like.create({
            author: author,
            post_id: post_id,
            value: value,
        })
        .then(() => {
            log(`New ${ value ? '' : 'dis' }like was set`, "set-like"); 
            feedback = true;
        })
        .catch( err => log(err.message, "err:set-like" ));
    
    return feedback;
}

module.exports = setLike;
