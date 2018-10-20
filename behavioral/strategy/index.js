// Normal billing strategy (unchanged price)
class NormalStrategy {
  getPrice (rawPrice) {
    return rawPrice
  }
}
// Strategy for Happy hour (50% discount)
class HappyHourStrategy {
  getPrice (rawPrice) {
    return rawPrice * 0.5
  }
}
class Customer {
  constructor (strategy) {
    this.drinks = []
    this.strategy = strategy
  }
  add (price, quantity) {
    this.drinks.push(this.strategy.getPrice(price * quantity))
  }
  // Payment of bill
  printBill () {
    const sum = this.drinks.reduce((result, i) => result + i)
    console.log('Total due: ' + sum)
    this.drinks = []
  }
}
function run () {
  // Prepare strategies
  const normalStrategy = new NormalStrategy()
  const happyHourStrategy = new HappyHourStrategy()
  const customer = new Customer(normalStrategy)
  // Normal billing
  customer.add(1.0, 1)
  // Start Happy Hour
  customer.strategy = happyHourStrategy
  customer.add(1.0, 2)
  // End Happy Hour
  customer.strategy = normalStrategy
  customer.add(1.3, 2)
  customer.add(2.4, 1)
  // The Customer pays
  customer.printBill() // "Total due: 7"
}
run()
