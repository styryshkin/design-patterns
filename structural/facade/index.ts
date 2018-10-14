class CarModel {
  public setModel(): void {
    console.log('CarModel - setModel');
  }
}

class CarEngine {
  public setEngine(): void {
    console.log('CarModel - setEngine');
  }
}

class CarBody {
  public setBody(): void {
    console.log('CarModel - setBody');
  }
}

class CarAccessories {
  public setAccessories(): void {
    console.log('CarModel - setAccessories');
  }
}

class CarFacade {
  private accessories: CarAccessories;
  private body: CarBody;
  private engine: CarEngine;
  private model: CarModel;

  constructor() {
    this.accessories = new CarAccessories();
    this.body = new CarBody();
    this.engine = new CarEngine();
    this.model = new CarModel();
  }

  public createCompleteCar() {
    console.log('******** Creating a Car **********');
    this.model.setModel();
    this.engine.setEngine();
    this.body.setBody();
    this.accessories.setAccessories();
    console.log('******** Car creation is completed. **********');
  }
}

function run() {
  const facade = new CarFacade();

  facade.createCompleteCar();
}

run();
