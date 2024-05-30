const colors = require('colors');
const { logError } = require('../../modules/logger');

module.exports = (err, req, res, next) => {
  const { code, message } = err;

  if (message) {
    logError(colors.red(message));
  }

  res.internal_server_error({
    code,
    message,
  });
};
