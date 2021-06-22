'use strict';

const bcrypt = require('bcrypt');

const updateSettings = async newSettings => {
  let feedback = false;

  newSettings = JSON.parse(newSettings);

  if (newSettings.hasOwnProperty('password')) {
    const salt = bcrypt.genSaltSync(10);
    const passwordEnc = bcrypt.hashSync(newSettings.password, salt);

    newSettings.password = passwordEnc;
    newSettings.salt = salt;
  }
  
  await User.updateOne(
      { 'login': newSettings.login },
      newSettings,
      { upsert: false }
    )
    .then(() => {
      feedback = true;
      log('Settings info updated', 'update-settings');
    })
    .catch( e => log(e.message, 'err:update-settings') );

  return feedback;
}

module.exports = updateSettings;
