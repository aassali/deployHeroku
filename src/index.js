/* eslint-disable no-console */
const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const apiRouter = require('./services/api');
const frontRouter = require('./services/front');
const notFound = require('./middleware/notFound');
const errors = require('./middleware/errors');

const server = express();
// Middlware Généraux
server.use(helmet());
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.set('views', './src/views');
server.set('view engine', 'ejs');

// Middlware fonctionnels
server.use(frontRouter);
server.use(apiRouter);

// Last one
server.use(notFound);

// Middleware d'erreur
server.use(errors);

server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
});
