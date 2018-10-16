interface ICar {
  driveCar(): void;
}

// Real Object
class Car implements ICar {
  public driveCar() {
    console.log('Car has been driven!');
  }
}

// Proxy Object
class ProxyCar implements ICar {
  private driver: Driver;
  private realCar: ICar;

  constructor(driver: Driver) {
    this.driver = driver;
    this.realCar = new Car();
  }

  public driveCar() {
    if (this.driver.age < 16) {
      console.log('Sorry, the driver is too young to drive.');
    } else {
      this.realCar.driveCar();
    }
  }
}

class Driver {
  public age: number;
  constructor(age: number) {
    this.age = age;
  }
}

function run() {
  let car = new ProxyCar(new Driver(15));
  car.driveCar();

  car = new ProxyCar(new Driver(25));
  car.driveCar();
}

run();
