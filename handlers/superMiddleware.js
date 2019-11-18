function getConsole(req, res, next) {
    console.log(`hello middleware ! Time: ${Date.now()}`);
    next();
};

function getResponse(req, res) {
    res.send(`hello world ! Time: ${Date.now()}`);
}

module.exports = {
    getConsole,
    getResponse
}