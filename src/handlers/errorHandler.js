const handleError = require('../functions/handleError');

module.exports = (client) => {
    process.on('unhandledRejection', (error) => {
        handleError(client, null, error);
    });

    process.on('uncaughtException', (error) => {
        handleError(client, null, error);
    });
};