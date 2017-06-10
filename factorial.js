const factorials = []

// named recursion
const f1 = (n) => n < 2 ? 1 : n * f1(n - 1)
factorials.push(f1)


module.exports = {factorials}
