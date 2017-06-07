import should from 'should'
import test from './mocks/testLambda'

import lambdaFunction from '../functions/index'

describe('Sample lambda handler', () => {
    it('should exist', () => {
        should.exist(lambdaFunction.handler)
    })

    it('should return status code 200', () => {
        let request = {};
        test(lambdaFunction)
            .with(request)
            .soThat((err, result) => {
                should.exist(result.statusCode);
                result.statusCode.should.equal('200')
            })
    })
})