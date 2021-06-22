'use strict';

const subscribe = async data => {
  let feedback = false;
  let allowSubscribe = true;

  data = JSON.parse(data);

  await relSubscriptions.findOne( data )
    .then(subsc => {
        if (!!subsc) {
            allowSubscribe = false;
            log('%s already subscribed on %s', 'err:subscribe', data.follower, data.followed);
        }
    });
  
  if (allowSubscribe)
    await relSubscriptions.create( data )
    .then(() => {
      log('%s subscribed on %s', 'subscribe', data.follower, data.followed);
      feedback = true;
    })
    .catch( err => log(err.message, "err:subscribe" ));

  return feedback;
}

module.exports = subscribe;
