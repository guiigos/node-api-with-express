const Auth = require('./auth');
const NotFound = require('./custom/404');
const InternalServerError = require('./custom/500');

const protected = require('./helper/auth.helper');

const V1 = require('./v.1');
const V2 = require('./v.2');

module.exports = (app) => {
  app
    .use(Auth)
    .use('/api/', protected, V1, V2)
    .use(NotFound)
    .use(InternalServerError);
};
