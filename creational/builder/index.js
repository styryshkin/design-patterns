/**
 * Represents a product created by the builder
 */
class Car {
  constructor (make, model, numDoors, color) {
    this.make = make
    this.model = model
    this.numDoors = numDoors
    this.color = color
  }
}

/**
 * Concrete builder implementation
 */
class FerrariBuilder {
  getResult () {
    return this.numDoors === 2 ? new Car('Ferrari', '488 Spider', this.numDoors, this.color) : null
  }
}

/**
 * The director
 */
class SportsCarBuildDirector {
  constructor (builder) {
    this.builder = builder
  }

  construct () {
    this.builder.color = 'Red'
    this.builder.numDoors = 2
  }
}

/**
 * Usage example
 */
(function () {
  const builder = new FerrariBuilder()
  const director = new SportsCarBuildDirector(builder)

  director.construct()
  const car = builder.getResult()

  return car
})()
