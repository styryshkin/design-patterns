class Red {
  constructor (light) {
    this.light = light
  }
  go () {
    console.log('Red --> for 1 minute')
    // eslint-disable-next-line no-use-before-define
    this.light.change(new Green(this.light))
  }
}

class Yellow {
  constructor (light) {
    this.light = light
  }
  go () {
    console.log('Yellow --> for 1 minute')
    this.light.change(new Red(this.light))
  }
}

class Green {
  constructor (light) {
    this.light = light
  }
  go () {
    console.log('Green --> for 1 minute')
    this.light.change(new Yellow(this.light))
  }
}

class TrafficLight {
  constructor () {
    this.count = 0
    this.currentState = new Red(this)
  }
  change (state) {
    // limits number of changes
    if (this.count++ >= 10) return

    this.currentState = state
    this.currentState.go()
  }
  start () {
    this.currentState.go()
  }
}

function run () {
  const light = new TrafficLight()
  light.start()
}
run()
