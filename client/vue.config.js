// 72: import path module
const path = require('path');

// 73: export the proxy - devServer
module.exports = {
    // 73.1: Creating Dist or Publishing
        outputDir: path.resolve(__dirname, '../server/public'),
    // 73.2: Creating proxy for devServer
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5005'
            }
        }
    }
};