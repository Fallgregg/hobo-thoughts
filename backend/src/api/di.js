'use strict';

const PARSING_TIMEOUT = 1000;
const EXECUTION_TIMEOUT = 5000;

const fs = require('fs');
const vm = require('vm');
const models = require('./data-access/models/db-models');
const { cropTextTo, log } = require('../utils/utils');

const initDI = async filePath => {
    let res = {};

    const context = {
        module: {},
        require: name => {
          if (name === 'fs') {
            console.log('Module fs is restricted');
            return null;
          }
          return require(name);
        },
        models: {
            Post: models.post,
            User: models.user,
            relSubscriptions: models.relSubscriptions,
            Comment: models.comment,
            Like: models.like
        }
    };

    context.global = context;
    const sandbox = vm.createContext(context);

    const api = { cropTextTo, log };

    const fileName = 'api.js';
    fs.readFile(filePath + fileName, 'utf8', async (err, src) => {
        if (err)
            console.log('|--err:di--| ', err.message);

        src = `api => { ${src} };`;

        let script;
        try {
            script = new vm.Script(src, { timeout: PARSING_TIMEOUT });
        } catch (e) {
            log(e.message, 'err:di');
            process.exit(1);
        }

        try {
            const f = script.runInNewContext(sandbox, { timeout: EXECUTION_TIMEOUT });
            f(api);
            res = sandbox.module.exports;
            console.log(await res.registerUser('{"login":"test03","password":"test02","nameSurname":"Name Surname v2"}'));      
        } catch (e) {
            log(e.message,'err:di');
            process.exit(1);
        }

    });

    return res;

}

module.exports = initDI;
