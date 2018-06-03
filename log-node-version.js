'use strict';

const getLogMessage = require('./get-log-message');

function logNodeVersion() {
    const logMessage = getLogMessage(process.version);

    console.log(logMessage);
    console.log('-'.repeat(logMessage.length));
}

module.exports = logNodeVersion;
