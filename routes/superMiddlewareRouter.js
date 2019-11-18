const express = require('express');
const superMiddlewareRouter = express.Router();
const { getConsole, getResponse } = require('../handlers/superMiddleware');

superMiddlewareRouter.get('/superMiddleware', getConsole, getResponse);

module.exports = {
    superMiddlewareRouter
}