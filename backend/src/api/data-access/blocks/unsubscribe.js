'use strict';

const relSubscriptions = require('../models/db-models').relSubscriptions;	//import Subscriptions relation mongo model

const { log } = require('../../../utils/utils'); //import logger

const unsubscribe = async data => {
  let feedback = false;

  data = JSON.parse(data);

  if (data.follower.length == 0 || data.followed.length == 0) {
    log('Invalid input data', 'err:unsubscribe');
    return feedback;
  }

  await relSubscriptions.deleteOne( data )
  .then(() => {
    log('%s unsubscribed from %s', 'unsubscribe', data.follower, data.followed);
    feedback = true;
  })
  .catch( err => log(err.message, "err:unsubscribe" ));

  return feedback;
}

module.exports = unsubscribe;
