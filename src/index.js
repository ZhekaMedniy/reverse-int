module.exports = function reverse(n) {
    let x = Math.abs(n)
    if (x % 10 === 0) x = x / 10
    x = x.toString().split('').reverse().join('')
    return x
}
