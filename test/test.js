const assert = require('assert')

const factorials = require('../factorial').factorials
describe('factorial functions', function() {
  factorials.forEach(factorial => {
    it('should properly output the first 5 values', function() {
      const expected = [1, 2, 6, 24, 120]
      const actual = [1,2,3,4,5].map(factorial)

      expected.forEach((exp, i) => {
        assert.equal(exp, actual[i])
      })
    })
  })
})


const fibonaccis = require('../fibonacci').fibonaccis
describe('fibonacci functions', function() {
  fibonaccis.forEach(fibo => {
    it('should properly output the first 10 values', function() {
      const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
      const actual = Array.from(Array(10), (_, i) => i).map(fibo)

      expected.forEach((exp, i) => {
        assert.equal(exp, actual[i])
      })
    })
  })
})
