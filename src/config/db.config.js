const { connect } = require('mongoose');
const { logInfos, logError } = require('../modules/logger');

const configuration = async (url) => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    const connection = await connect(url, connectionParams);
    logInfos(`Mongo DB is connected to ${connection.connection.host}`);
  } catch (err) {
    logError(`An error ocurred ${err}`);
  }
}

module.exports = configuration;
