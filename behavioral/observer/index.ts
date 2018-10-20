type Handler = (event: string) => void;

interface IClick {
  handlers: Handler[];
  subscribe(fn: Handler): void;
  unsubscribe(fn: Handler): void;
  fire(event: string, scope: object): void;
}

class Click implements IClick {
  public handlers = [];

  public subscribe(fn: Handler) {
    this.handlers.push(fn);
  }

  public unsubscribe(fn: Handler) {
    this.handlers = this.handlers.filter(item => item !== fn);
  }

  public fire(event, scope = window) {
    this.handlers.forEach(handler => handler.call(scope, event));
  }
}

function run() {
  const clickHandler: Handler = event => console.log(`fired: ${event}`);

  const click = new Click();

  click.subscribe(clickHandler);
  click.fire('event #1');

  click.unsubscribe(clickHandler);
  click.fire('event #2');

  click.subscribe(clickHandler);
  click.fire('event #3');
}

run();
