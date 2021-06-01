const User = require('../models/user');	//import User mongoose model

async function checkData(login, password) {
    await User.findOne({"login": 'login', "password": password}, "login password" , async (err, user) => {
        console.log(user);
        return (user != null);
    });
}

module.exports = checkData;