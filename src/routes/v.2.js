const { Router } = require('express');

const routers = Router();

module.exports =
  Router()
    .use('/v1/', routers);
