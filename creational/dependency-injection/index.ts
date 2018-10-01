class Service {
  public getName(): string;
}

// An example without dependency injection
class Client {
  // Internal reference to the service used by this client
  private service: Service;

  constructor() {
    this.service = new Service();
  }

  // Method within this client that uses the services
  public greet(): string {
    return `Hello + ${this.service.getName()}`;
  }
}

/**
 * Constructor injection
 * This method requires the client to provide a parameter in a constructor for the dependency.
 */
class Client {
  constructor(service: Service) {
    // Save the reference to the passed-in service inside this client
    this.service = service;
  }
}

/**
 * Setter injection
 * This method requires the client to provide a setter method for the dependency.
 */
class Client {
  // Setter method
  public setService(service: Service): void {
    // Save the reference to the passed-in service inside this client.
    this.service = service;
  }
}

/**
 * Interface injection
 * This is simply the client publishing a role interface to the setter methods of the client's dependencies.
 * It can be used to establish how the injector should talk to the client when injecting dependencies.
 */
interface IServiceSetter {
  public setService(service: Service): void;
}

// Client class
class Client implements IServiceSetter {
  // Internal reference to the service used by this client.
  private service: Service;

  // Set the service that this client is to use.
  public setService(service: Service): void {
    this.service = service;
  }
}
