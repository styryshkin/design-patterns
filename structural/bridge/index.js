class Bridge1 {
  function1 () {
    console.log('Bridge1.function1')
  }
  function2 () {
    console.log('Bridge1.function2')
  }
}

class Bridge2 {
  function1 () {
    console.log('Bridge2.function1')
  }
  function2 () {
    console.log('Bridge2.function2')
  }
}

class AbstractBridge {
  constructor (bridge) {
    this.bridge = bridge
  }

  callMethod1 () {
    this.bridge.function1()
  }

  callMethod2 () {
    this.bridge.function2()
  }
}

function run () {
  const abstractBridge1 = new AbstractBridge(new Bridge1())
  const abstractBridge2 = new AbstractBridge(new Bridge2())

  abstractBridge1.callMethod1()
  abstractBridge2.callMethod2()
}

run()
