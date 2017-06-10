const pascals = []

const p1 = n => m => n === 1 ? m : m === 1 ? n : p1(n)(m - 1) + p1(n - 1)(m)
pascals.push(p1)

const a2 = f => n => m => n === 1 ? m : m === 1 ? n : f(f)(n)(m - 1) + f(f)(n - 1)(m)
const p2 = a2(a2)
pascals.push(p2)

const a3 = f => n => m => n === 1 ? m : m === 1 ? n : f(f)(n)(m - 1) + f(f)(n - 1)(m)
const ycomb = f => f(f)
const p3 = (ycomb)(a3)
pascals.push(p3)

const p4 = (f => f(f))(f => n => m => n === 1 ? m : m === 1 ? n : f(f)(n)(m - 1) + f(f)(n - 1)(m))
pascals.push(p4)

module.exports = {pascals}
