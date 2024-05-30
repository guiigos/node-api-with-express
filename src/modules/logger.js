const debug = require('debug');

module.exports = {
  logInfos: debug('server:infos'),
  logError: debug('server:error'),
  logRoute: debug('server:route'),
};
