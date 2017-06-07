'use strict'

let test = function (lambdaModule) {
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

module.exports = test;

describe('TestLambda utility', () => {
    it('should throw an error with a parameter does not include handler function', () => {
        let target = {
            'kindler': () => {}
        };
        (() => test(target)).should.throw()
    })
})