// Empty vocabulary of actual object
interface IPerson {
  getName(): string;
}

interface IFactory {
  getPerson(type: PersonType): IPerson;
}

class Villager implements IPerson {
  public getName() {
    return 'Village Person';
  }
}

class CityPerson implements IPerson {
  public getName() {
    return 'City Person';
  }
}

enum PersonType {
  Rural,
  Urban,
}

/**
 * Implementation of Factory - Used to create objects
 */
class Factory implements IFactory {
  public getPerson(type: PersonType): IPerson {
    switch (type) {
      case PersonType.Rural:
        return new Villager();
      case PersonType.Urban:
        return new CityPerson();
      default:
        throw new Error('Unknown Person Type');
    }
  }
}

/**
 * Usage example
 */
const factory = new Factory();
const person: IPerson = factory.getPerson(PersonType.Urban);
person.getName();
