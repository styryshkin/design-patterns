class Click {
  constructor () {
    this.handlers = []
  }
  subscribe (fn) {
    this.handlers.push(fn)
  }
  unsubscribe (fn) {
    this.handlers = this.handlers.filter(item => item !== fn)
  }
  fire (event, scope = window) {
    this.handlers.forEach(handler => handler.call(scope, event))
  }
}

function run () {
  const clickHandler = event => console.log(`fired: ${ event }`)
  const click = new Click()
  click.subscribe(clickHandler)
  click.fire('event #1')
  click.unsubscribe(clickHandler)
  click.fire('event #2')
  click.subscribe(clickHandler)
  click.fire('event #3')
}

run()
