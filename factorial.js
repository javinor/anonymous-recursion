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


// rename & reorder arguments in inner factorial function
const f5 = (f) => (n) => {
  return ((rec, n) => n < 2 ? 1 : n * rec(n - 1))(f(f), n)
}
factorials.push(f5(f5))


// curry inner factorial function
const f6 = (f) => (n) => {
  return ((rec) => (n) => n < 2 ? 1 : n * rec(n - 1))(f(f))(n)
}
factorials.push(f6(f6))


// name inner function
const f7 = (f) => (n) => {
  const q = (rec) => (n) => n < 2 ? 1 : n * rec(n - 1)
  return q(f(f))(n)
}
factorials.push(f7(f7))




module.exports = {factorials}
