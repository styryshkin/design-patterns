// Real Object
class Car {
  driveCar () {
    console.log('Car has been driven!')
  }
}

// Proxy Object
class ProxyCar {
  constructor (driver) {
    this.driver = driver
    this.realCar = new Car()
  }

  driveCar () {
    if (this.driver.age < 16)
      console.log('Sorry, the driver is too young to drive.')
    else
      this.realCar.driveCar()

  }
}

class Driver {
  constructor (age) {
    this.age = age
  }
}

function run () {
  let car = new ProxyCar(new Driver(15))
  car.driveCar()

  car = new ProxyCar(new Driver(25))
  car.driveCar()
}

run()
