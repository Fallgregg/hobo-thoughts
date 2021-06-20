'use strict';

const cropText = (text, to) =>
  //const exp = '\^(.{' + to + '}[^\s]*).*';
  //const regex = new RegExp(exp);
  text
    .slice(0, to)
    .concat('..')
;

module.exports = cropText;
