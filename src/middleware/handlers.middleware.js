const httpStatus = require('http-status');

module.exports = () => (_, res, next) => {
  res.ok = (data) => res
    .status(httpStatus.OK)
    .send(data);

  res.bad_request = (error) => res
    .status(httpStatus.BAD_REQUEST)
    .send(error.message);

  res.unauthorized = () => res
    .status(httpStatus.UNAUTHORIZED)
    .send('unauthorized');

  res.payment_required = (validators) => res
    .status(httpStatus.PAYMENT_REQUIRED)
    .send(validators);

  res.not_found = () => res
    .status(httpStatus.NOT_FOUND)
    .send('not found...');

  res.internal_server_error = (error) => res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .json(error);

  return next();
};
