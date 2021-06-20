'use strict';

//args: message[, stepName, someConsoleAttributes]
const log = async (...args) =>
  console.log(
    `|--${args[1] || ''}--| ${args[0]}`,
    ...args.slice(2)
  );

module.exports = log;
