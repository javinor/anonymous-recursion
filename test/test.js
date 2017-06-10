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
