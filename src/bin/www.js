require('dotenv').config();

const http = require('http');
const figlet = require('figlet');
const colors = require('colors');

const { logError, logInfos } = require('../modules/logger');
const app = require('../app');

const server = http.createServer(app);

const error = (err) => {
  logError(`An error has occurred on start server\n ${err.message}`);
  throw err;
};

const listening = () => {
  figlet.text('GuiigO`s', (err, data) => {
    if (!err) {
      console.log(colors.red(data), '\n');
    }

    logInfos(colors.bold.red('Developer'), 'Guilherme Alves');
    logInfos(colors.bold.red('E-mail'), 'guiigos.alves@gmail.com');

    logInfos(colors.yellow(`Server running on port ${process.env.PORT}`));
  });
};

server.listen(process.env.PORT);
server.on('error', error);
server.on('listening', listening);
