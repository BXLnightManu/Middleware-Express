const express = require('express');
const app = express();
const { superMiddlewareRoutes } = require('./routes')
const port = 3000;

superMiddlewareRoutes(app);

app.listen(port, (err) => {
    if(err) {
        const err = new Error('Not Found !');
        err.status = 404;
        throw err;
    } else {
        console.log(`Listening on port ${port}`);
    }
})