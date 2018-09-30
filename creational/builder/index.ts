/**
 * Represents a product created by the builder
 */
class Car {
  public make: string;
  public model: string;
  public numDoors: number;
  public color: string;
  constructor(make: string, model: string, numDoors: number, color: string) {
    this.make = make;
    this.model = model;
    this.numDoors = numDoors;
    this.color = color;
  }
}

/**
 * The builder abstraction
 */
interface ICarBuilder {
  color: string;
  numDoors: number;
  getResult(): Car;
}

/**
 * Concrete builder implementation
 */
class FerrariBuilder implements ICarBuilder {
  public color: string;
  public numDoors: number;
  public getResult() {
    return this.numDoors === 2 ? new Car('Ferrari', '488 Spider', this.numDoors, this.color) : null;
  }
}

/**
 * The director
 */
class SportsCarBuildDirector {
  private builder: ICarBuilder;

  constructor(builder: ICarBuilder) {
    this.builder = builder;
  }

  public construct(): void {
    this.builder.color = 'Red';
    this.builder.numDoors = 2;
  }
}

/**
 * Usage example
 */
function main() {
  const builder = new FerrariBuilder();
  const director = new SportsCarBuildDirector(builder);

  director.construct();
  const car: Car = builder.getResult();
}
