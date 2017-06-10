const factorials = []

// named recursion
const f1 = (n) => n < 2 ? 1 : n * f1(n - 1)
factorials.push(f1)


// pass in the recursive function as an argument
const f2 = (f, n) => {
  return n < 2 ? 1 : n * f(f, n - 1)
}
factorials.push(n => f2(f2, n))


// curried factorial
const f3 = (f) => (n) => {
  return n < 2 ? 1 : n * f(f)(n - 1)
}
factorials.push(f3(f3))


// make the inner factorial calculation point free
const f4 = (f) => (n) => {
  return ((g, n) => n < 2 ? 1 : n * g(g)(n - 1))(f, n)
}
factorials.push(f4(f4))




module.exports = {factorials}
