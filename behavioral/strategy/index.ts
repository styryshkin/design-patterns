interface IBillingStrategy {
  getPrice(rawPrice: number): number;
}

// Normal billing strategy (unchanged price)
class NormalStrategy implements IBillingStrategy {
  public getPrice(rawPrice: number) {
    return rawPrice;
  }
}

// Strategy for Happy hour (50% discount)
class HappyHourStrategy implements IBillingStrategy {
  public getPrice(rawPrice: number) {
    return rawPrice * 0.5;
  }
}

class Customer {
  public strategy: IBillingStrategy;
  private drinks: number[];

  constructor(strategy: IBillingStrategy) {
    this.drinks = [];
    this.strategy = strategy;
  }

  public add(price: number, quantity: number) {
    this.drinks.push(this.strategy.getPrice(price * quantity));
  }

  // Payment of bill
  public printBill() {
    const sum = this.drinks.reduce((result, i) => result + i);

    console.log('Total due: ' + sum);
    this.drinks = [];
  }
}

function run() {
  // Prepare strategies
  const normalStrategy: IBillingStrategy = new NormalStrategy();
  const happyHourStrategy: IBillingStrategy = new HappyHourStrategy();

  const customer: Customer = new Customer(normalStrategy);

  // Normal billing
  customer.add(1.0, 1);

  // Start Happy Hour
  customer.strategy = happyHourStrategy;
  customer.add(1.0, 2);

  // End Happy Hour
  customer.strategy = normalStrategy;
  customer.add(1.3, 2);
  customer.add(2.4, 1);

  // The Customer pays
  customer.printBill(); // "Total due: 7"
}

run();
