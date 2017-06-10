const fibonaccis = []

// start from named recursion
const f1 = (n) => n < 2 ? n : f1(n - 1) + f1(n - 2)
fibonaccis.push(f1)

// pass recursive function as argument
const f2 = (f, n) => n < 2 ? n : f(f, n - 1) + f(f, n - 2)
fibonaccis.push(n => f2(f2, n))

// curry
const f3 = (f) => (n) => n < 2 ? n : f(f)(n - 1) + f(f)(n - 2)
fibonaccis.push(f3(f3))

// refertial transperancy
fibonaccis.push(
  (f => n => n < 2 ? n : f(f)(n - 1) + f(f)(n - 2))(
    f => n => n < 2 ? n : f(f)(n - 1) + f(f)(n - 2)
  )
)
// extract common function
fibonaccis.push((g => g(g))(f => n => n < 2 ? n : f(f)(n - 1) + f(f)(n - 2)))


module.exports = {fibonaccis}
