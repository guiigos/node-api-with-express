const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const { logRoute } = require('./modules/logger');
const handler = require('./middleware/handlers.middleware');
const async = require('./middleware/async.middleware');
const builder = require('./routes/builder');
const connect = require('./config/db.config');

require('dotenv').config();
connect(process.env.DATABASE);

const app = express();

app.use(handler());
app.use(async());
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev', { stream: { write: logRoute } }));

builder(app);

module.exports = app;
