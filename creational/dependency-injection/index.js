/* eslint-disable no-unused-vars */
class Service {
  getName () {
    return 'World'
  }
}

// An example without dependency injection
class Client {
  constructor () {
    // Internal reference to the service used by this client
    this.service = new Service()
  }

  // Method within this client that uses the services
  greet () {
    return `Hello + ${ this.service.getName() }`
  }
}

/**
 * Constructor injection
 * This method requires the client to provide a parameter in a constructor for the dependency.
 */
class ClientConstructorInjection {
  constructor (service) {
    // Save the reference to the passed-in service inside this client
    this.service = service
  }
}

/**
 * Setter injection
 * This method requires the client to provide a setter method for the dependency.
 */
class ClientSetterInjection {
  // Setter method
  setService (service) {
    // Save the reference to the passed-in service inside this client.
    this.service = service
  }
}

/**
 * Interface injection
 * This is simply the client publishing a role interface to the setter methods of the client's dependencies.
 * It can be used to establish how the injector should talk to the client when injecting dependencies.
 */
class ServiceSetter {
  setService () {
    throw new Error('Not Implemented Exception')
  }
}

// Client class
class ClientInterfaceInjection extends ServiceSetter {
  // Set the service that this client is to use.
  setService (service) {
    // Internal reference to the service used by this client.
    this.service = service
  }
}
