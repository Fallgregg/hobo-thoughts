'use strict';

const showSubscriptions = async id => {
  let res = {};

  await relSubscriptions.find({ followed: id }, "follower")
  .then(follower => { !!follower ?
      res.follower = follower     
    :
      res.follower = 0;
  })
  .catch( err => log(err.message, "err:show-subscriptions" ));

  await relSubscriptions.find({ follower: id }, "followed")
  .then(followed => { !!followed ?
      res.followed = followed    
    :
      res.followed = 0;
  })
  .catch( err => log(err.message, "err:show-subscriptions" ));

  return res;
}

module.exports = showSubscriptions;
