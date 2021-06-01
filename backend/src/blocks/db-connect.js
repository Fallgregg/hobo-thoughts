const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

function dbConnect () {
    mongoose.connect('mongodb://localhost/hobo-thoughts', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log("Congrats, the connection successfully set :)");
    });
}

module.exports = dbConnect;