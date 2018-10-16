class Flyweight {
  constructor (make, model, processor) {
    this.make = make
    this.model = model
    this.processor = processor
  }
}

class FlyweightFactory {
  static get (make, model, processor) {
    if (!FlyweightFactory.flyweights[make + model])
      FlyweightFactory.flyweights[make + model] = new Flyweight(make, model, processor)

    return FlyweightFactory.flyweights[make + model]
  }
  static getCount () {
    return Object.keys(FlyweightFactory.flyweights).length
  }
    static flyweights = {};
}

class Computer {
  constructor (make, model, processor, memory, tag) {
    this.flyweight = FlyweightFactory.get(make, model, processor)
    this.memory = memory
    this.tag = tag
  }
  getMake () {
    return this.flyweight.make
  }
}

class ComputerCollection {
    computers = {};
    count = 0;

    add (make, model, processor, memory, tag) {
      this.computers[tag] = new Computer(make, model, processor, memory, tag)
      this.count++
    }
    get (tag) {
      return this.computers[tag]
    }

    getCount () {
      return this.count
    }
}

function run () {
  const computers = new ComputerCollection()

  computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P')
  computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T')
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80')
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'NT777')
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', '0J88A')
  computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701')
  computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283')

  console.log('Computers: ' + computers.getCount())
  console.log('Flyweights: ' + FlyweightFactory.getCount())
}

run()
