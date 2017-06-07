exports.handler = (event, context, callback) => {
    console.log("hello");
    callback(null, {
        statusCode: '200'
    });
};