'use strict'

module.exports = function (lambdaModule) {
    if(!lambdaModule['handler']) throw 'No handler function within given parameter.'

    var handler = lambdaModule.handler;
    var _request = {};
    var _context = null;
    let obj = {
        with: (request, context = null) => {
            _request = request;
            _context = context;
            return obj;
        },
        soThat: (responseCallback) => {
            handler(_request, _context, responseCallback);
        }
    };
    return obj;
};