// old interface

interface IShipping {
  request(zipStart: string, zipEnd: string, weight: string): string;
}
class Shipping implements IShipping {
  public request(zipStart: string, zipEnd: string, weight: string) {
    // ...
    return weight;
  }
}

// new interface
interface ICredentials {
  token: string;
}
interface IAdvancedShipping {
  login(credentials: ICredentials): void;
  setStart(start: string): void;
  setDestination(destination: string): void;
  calculate(weight: string): string;
}

class AdvancedShipping implements IAdvancedShipping {
  public login(credentials: ICredentials) {
    /* ... */
  }
  public setStart(start: string) {
    /* ... */
  }
  public setDestination(destination: string) {
    /* ... */
  }
  public calculate(weight: string) {
    // ...
    return weight;
  }
}

// adapter interface
interface IShippingAdapter {
  request(zipStart: string, zipEnd: string, weight: string): string;
}

class ShippingAdapter implements IShippingAdapter {
  private shipping: IAdvancedShipping;
  constructor(credentials) {
    this.shipping = new AdvancedShipping();

    this.shipping.login(credentials);
  }

  public request(zipStart: string, zipEnd: string, weight: string): string {
    this.shipping.setStart(zipStart);
    this.shipping.setDestination(zipEnd);

    return this.shipping.calculate(weight);
  }
}

function run() {
  const shipping = new Shipping();
  const credentials: ICredentials = { token: '30a8-6ee1' };
  const adapter = new ShippingAdapter(credentials);

  // original shipping object and interface
  let cost = shipping.request('78701', '10010', '2 lbs');
  console.log('Old cost: ' + cost);

  // new shipping object with adapted interface
  cost = adapter.request('78701', '10010', '5 lbs');
  console.log('New cost: ' + cost);
}

run();
