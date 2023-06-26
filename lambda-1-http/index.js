const fs = require('fs');

/**
 * Returns an HTML page containing an interactive Web-based
 * tutorial. Visit the function URL to see it and learn how
 * to build with lambda.
 */
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: '<h1>My Page</h1>',
    };
    return response;
};
