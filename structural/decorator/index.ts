interface IUser {
  name: string;
  say(): void;
}

class User implements IUser {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public say() {
    console.log('User: ' + this.name);
  }
}

class DecoratedUser implements IUser {
  public name: string;
  private user: IUser;
  private street: string;
  private city: string;

  constructor(user: IUser, street: string, city: string) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;
  }

  public say() {
    console.log('Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city);
  }
}

function run() {
  const user = new User('Kelly');
  user.say();

  const decorated = new DecoratedUser(user, 'Broadway', 'New York');
  decorated.say();
}

run();
