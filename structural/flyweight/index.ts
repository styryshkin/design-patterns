interface IFlyweight {
  make: string;
  model: string;
  processor: string;
}

class Flyweight implements IFlyweight {
  public make: string;
  public model: string;
  public processor: string;

  constructor(make: string, model: string, processor: string) {
    this.make = make;
    this.model = model;
    this.processor = processor;
  }
}

class FlyweightFactory {
  public static get(make: string, model: string, processor: string): IFlyweight {
    if (!FlyweightFactory.flyweights[make + model]) {
      FlyweightFactory.flyweights[make + model] = new Flyweight(make, model, processor);
    }
    return FlyweightFactory.flyweights[make + model];
  }
  public static getCount(): number {
    return Object.keys(FlyweightFactory.flyweights).length;
  }
  private static flyweights = {};
}

interface IComputer {
  flyweight: IFlyweight;
  memory: string;
  tag: string;
  getMake(): string;
}

class Computer implements IComputer {
  public flyweight: IFlyweight;
  public memory: string;
  public tag: string;
  constructor(make: string, model: string, processor: string, memory: string, tag: string) {
    this.flyweight = FlyweightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
  }
  public getMake(): string {
    return this.flyweight.make;
  }
}

interface IComputerCollection {
  add(make: string, model: string, processor: string, memory: string, tag: string): void;
  get(tag: string): IComputer;
  getCount(): number;
}

class ComputerCollection implements IComputerCollection {
  private computers = {};
  private count = 0;

  public add(make: string, model: string, processor: string, memory: string, tag: string) {
    this.computers[tag] = new Computer(make, model, processor, memory, tag);
    this.count++;
  }
  public get(tag: string): IComputer {
    return this.computers[tag];
  }

  public getCount(): number {
    return this.count;
  }
}

function run() {
  const computers = new ComputerCollection();

  computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P');
  computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T');
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80');
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'NT777');
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', '0J88A');
  computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701');
  computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283');

  console.log('Computers: ' + computers.getCount());
  console.log('Flyweights: ' + FlyweightFactory.getCount());
}

run();
