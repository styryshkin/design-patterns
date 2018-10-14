class CarModel {
  setModel () {
    console.log('CarModel - setModel')
  }
}

class CarEngine {
  setEngine () {
    console.log('CarModel - setEngine')
  }
}

class CarBody {
  setBody () {
    console.log('CarModel - setBody')
  }
}

class CarAccessories {
  setAccessories () {
    console.log('CarModel - setAccessories')
  }
}

class CarFacade {
  constructor () {
    this.accessories = new CarAccessories()
    this.body = new CarBody()
    this.engine = new CarEngine()
    this.model = new CarModel()
  }

  createCompleteCar () {
    console.log('******** Creating a Car **********')
    this.model.setModel()
    this.engine.setEngine()
    this.body.setBody()
    this.accessories.setAccessories()
    console.log('******** Car creation is completed. **********')
  }
}

function run () {
  const facade = new CarFacade()

  facade.createCompleteCar()
}

run()
