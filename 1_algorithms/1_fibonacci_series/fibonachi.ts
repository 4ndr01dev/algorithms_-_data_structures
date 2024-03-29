const getFibonacciSeries = (n: number) => {
  let fibonacciSeries: Array<number> = [0, 1]
  if (n === 2) {
    return fibonacciSeries
  }
  for (let i = 2; i < n; i++) {
    fibonacciSeries = [
      ...fibonacciSeries,
      fibonacciSeries[i - 1] + fibonacciSeries[i - 2],
    ]
  }
  return fibonacciSeries
}

console.log('Fibonacci de 5 ', getFibonacciSeries(5))
console.log('Fibonacci de 7 ', getFibonacciSeries(7))
console.log('Fibonacci de 13 ', getFibonacciSeries(13))

// Algorithmic complexity O(n) -linear 