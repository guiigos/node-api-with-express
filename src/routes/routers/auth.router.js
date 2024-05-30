const { Router } = require('express');
const userController = require('../../controllers/user.controller');
const tokenController = require('../../controllers/token.controller');
const validator = require('../helper/validator.helper');
const schema = require('./auth.schema');

module.exports = () => {
  const router = Router();

  router.post('/login', validator(schema));
  router.post('/login', userController.login, tokenController.generate);

  return router;
};
