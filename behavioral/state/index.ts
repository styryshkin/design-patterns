interface ILight {
  light: TrafficLight;
  go(): void;
}

interface ITrafficLight {
  change(state: ILight): void;
  start(): void;
}

class TrafficLight implements ITrafficLight {
  private count = 0;
  private currentState: ILight;

  constructor() {
    this.currentState = new Red(this);
  }

  public change(state: ILight) {
    // limits number of changes
    if (this.count++ >= 10) {
      return;
    }
    this.currentState = state;
    this.currentState.go();
  }

  public start() {
    this.currentState.go();
  }
}

class Red implements ILight {
  public light: TrafficLight;
  constructor(light: TrafficLight) {
    this.light = light;
  }

  public go() {
    console.log('Red --> for 1 minute');
    this.light.change(new Green(this.light));
  }
}

class Yellow implements ILight {
  public light: TrafficLight;
  constructor(light: TrafficLight) {
    this.light = light;
  }

  public go() {
    console.log('Yellow --> for 1 minute');
    this.light.change(new Red(this.light));
  }
}

class Green implements ILight {
  public light: TrafficLight;
  constructor(light: TrafficLight) {
    this.light = light;
  }

  public go() {
    console.log('Green --> for 1 minute');
    this.light.change(new Yellow(this.light));
  }
}

function run() {
  const light = new TrafficLight();

  light.start();
}

run();
