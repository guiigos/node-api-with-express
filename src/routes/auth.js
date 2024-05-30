const { Router } = require('express');
const authRouter = require('./routers/auth.router');

module.exports =
  Router()
    .use('/auth', authRouter());
