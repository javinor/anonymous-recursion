const fibonaccis = []

const f1 = (n) => n < 2 ? n : f1(n - 1) + f1(n - 2)
fibonaccis.push(f1)

module.exports = {fibonaccis}
