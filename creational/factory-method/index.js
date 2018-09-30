/* eslint-disable class-methods-use-this */
class Person {
  name = 'Person';
  getName () {
    throw new Error('must be implemented')
  }
}
class Villager extends Person {
  name = 'Village Person';
  getName () {
    return this.name
  }
}

class CityPerson extends Person {
  name = 'City Person';
  getName () {
    return this.name
  }
}

const PersonType = {
  Rural: 'Rural',
  Urban: 'Urban',
}

class Factory {
  static getPerson (type) {
    switch (type) {
    case PersonType.Rural:
      return new Villager()
    case PersonType.Urban:
      return new CityPerson()
    default:
      break
    }
  }
}

/**
 * Usage example
 */
const person = Factory.getPerson(PersonType.Rural)

person.getName()
