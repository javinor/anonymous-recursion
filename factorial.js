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


// extract (point-free) inner function
const f8_helper = (rec) => (n) => n < 2 ? 1 : n * rec(n - 1)
const f8 =
  (f) =>
    (n) => {
      return f8_helper(f(f))(n)
    }
factorials.push(f8(f8))


// pass inner function as argument
const f9_helper = (rec) => (n) => n < 2 ? 1 : n * rec(n - 1)
const f9 = (helper) => {
  // the returned value is equivalent to the previous `f8(f8)`
  return (
    (f) =>
      (n) =>
        helper(f(f))(n)
  )(
    (f) =>
      (n) =>
        helper(f(f))(n)
  )
}
factorials.push(f9(f9_helper)) // instead of passing f9, we pass the helper!


// extract "function calling itself" to HOF
const f10_helper = (rec) => (n) => n < 2 ? 1 : n * rec(n - 1)
const f10 = (helper) => {
  return (
    (g) => g(g)
  )(
    (f) =>
      (n) =>
        helper(f(f))(n)
  )
}
factorials.push(f10(f10_helper))


// renaming and cleanup
const curriedRecursiveFactorial = (rec) => (n) => n < 2 ? 1 : n * rec(n - 1)
const Y = (helper) => {
  return (g => g(g))(
    f => n => helper(f(f))(n)
  )
}
factorials.push(Y(curriedRecursiveFactorial))


// starting again from f2
factorials.push(n => f2(f2, n))
factorials.push(
  m =>
    ((f, n) => n < 2 ? 1 : n * f(f, n - 1))
    ((f, n) => n < 2 ? 1 : n * f(f, n - 1), m)
)
factorials.push(
  m =>
    (g => g(g, m))(
      (f, n) => n < 2 ? 1 : n * f(f, n - 1)
    )
)
factorials.push(m => (g => g(g, m))((f, n) => n < 2 ? 1 : n * f(f, n - 1)))


// starting again from f3
// f => n => n < 2 ? 1 : n * f(f)(n - 1)
factorials.push(f3(f3))
factorials.push(
  (f => n => n < 2 ? 1 : n * f(f)(n - 1))(
    f => n => n < 2 ? 1 : n * f(f)(n - 1)
  )
)
factorials.push(
  (g => g(g))(
    f => n => n < 2 ? 1 : n * f(f)(n - 1)
  )
)
factorials.push((g => g(g))(f => n => n < 2 ? 1 : n * f(f)(n - 1)))


module.exports = {factorials}
