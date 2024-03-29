const getFibonacciSeries = (n: number) => {
  let fibonacciSeries: Array<number> = [0, 1]
  if (n === 2) {
    return fibonacciSeries
  }
  for (let i = 2; i < n; i++) {
    fibonacciSeries = [...fibonacciSeries, i]
  }
  return fibonacciSeries
}

console.log(getFibonacciSeries(5))
