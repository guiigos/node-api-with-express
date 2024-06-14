const { Router } = require('express');

const routers = Router();

module.exports =
  Router()
    .use('/v2/', routers);
