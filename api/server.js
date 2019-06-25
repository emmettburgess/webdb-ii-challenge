const express = require('express');
const helmet = require('helmet');
const server = express();

server.use(express.json());
server.use(helmet());

//endpoints
const zoosRouter = require('../zoos/zoosRouter'):
server.use('/api/zoos', zoosRouter);

module.exports = server;