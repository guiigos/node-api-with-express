const { Router } = require('express');
const userController = require('../../controllers/user.controller');
const validator = require('../helper/validator.helper');
const schema = require('./user.schema');

module.exports = () => {
  const v = validator(schema);

  const router = Router();
  router.get('/', userController.index);
  router.get('/:_id', userController.show);
  router.post('/', v, userController.create);
  router.put('/:_id', v, userController.update);
  router.delete('/:_id', userController.remove);
  return router;
};
