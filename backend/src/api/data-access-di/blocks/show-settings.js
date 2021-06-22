'use strict';

const showSettings = async login => {
  const res = {};
  
  await User.findOne({ 'login': login }, 'login name_surname avatar')
    .then((user) => {
      Object.assign(res, user._doc);
      log('Settings info is out now', 'show-settings');
    })
    .catch( e => log(e.message, 'err:show-settings') );

  return res;
}

module.exports = showSettings;
