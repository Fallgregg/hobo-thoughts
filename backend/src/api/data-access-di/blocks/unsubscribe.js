'use strict';

const unsubscribe = async data => {
  let feedback = false;

  data = JSON.parse(data);

  await relSubscriptions.deleteOne( data )
  .then(() => {
    log('%s unsubscribed from %s', 'unsubscribe', data.follower, data.followed);
    feedback = true;
  })
  .catch( err => log(err.message, "err:unsubscribe" ));

  return feedback;
}

module.exports = unsubscribe;
