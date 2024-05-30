const { Router } = require('express');
const user = require('./routers/user.router');

const routers = Router()
  .use('/user', user());

module.exports =
  Router()
    .use('/v1/', routers);
