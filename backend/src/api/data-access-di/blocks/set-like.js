'use strict'; 

const setLike = async data => {
    let feedback = false;
    let setAllow = false;
    const existingMark = {};

    data = JSON.parse(data);
    
    data.value == "true" ? data.value = true : data.value = false;

    await Like.findOne({ author: data.author, post_id: data.post_id })
        .then( like => {
            if (like)
                Object.assign(existingMark, like._doc)
        });

    if (existingMark === {})
        setAllow = true;
    else
        await Like.deleteOne({ author: data.author, post_id: data.post_id })
            .then(() => {
                existingMark.value !== data.value ?
                    setAllow = true
                :
                    log('Mark %s by %s deleted', "set-like", existingMark._id, existingMark.author);
                feedback = true;
            })
            .catch( err => log(err.message, "err:set-like" ) );

    if (setAllow)
        await Like.create({
            author: data.author,
            post_id: data.post_id,
            value: data.value,
        })
        .then(() => {
            log(`New ${ data.value ? '' : 'dis' }like was set`, "set-like"); 
            feedback = true;
        })
        .catch( err => log(err.message, "err:set-like" ));
    
    return feedback;
}

module.exports = setLike;
