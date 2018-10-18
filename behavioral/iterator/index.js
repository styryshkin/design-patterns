class Range {
  constructor (start, end) {
    this.start = start
    this.end = end
  }

  [Symbol.iterator] () {
    return this
  }

  next () {
    if (this.start < this.end)
      return { value: this.start++,
        done: false }

    return { done: true,
      value: this.end }
  }
}

function run () {
  const range = new Range(1, 5)

  for (const num of range)
    console.log(num)
}

run()