//require('./db-connect')();	//connect to MongoDB

const User = require('../models/user');	//import User mongoose model

async function checkData(login, password) {
    let res;

    await User.findOne({"login": login, "password": password}, "login password", (err, user) => {
        res = (user != null);
    });

    return res;
}

module.exports = checkData;