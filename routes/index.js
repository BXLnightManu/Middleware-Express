const { superMiddlewareRouter } = require('./superMiddlewareRouter');

function superMiddlewareRoutes(app) {
    app.use('/', superMiddlewareRouter);
}

module.exports = {
    superMiddlewareRoutes
}