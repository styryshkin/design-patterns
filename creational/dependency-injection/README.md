# Dependency Injection Pattern

**Dependency injection** is a technique whereby one object (or static method) supplies the dependencies of another object. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it. The service is made part of the client's state. Passing the service to the client, rather than allowing a client to build or find the service, is the fundamental requirement of the pattern.

This fundamental requirement means that using values (services) produced within the class from new or static methods is prohibited. The client should accept values passed in from outside. This allows the client to make acquiring dependencies someone else's problem.

## Overview

The Dependency Injection design pattern solves problems like:

- How can an application or class be independent of how its objects are created?
- How can the way objects are created be specified in separate configuration files?
- How can an application support different configurations?

Dependency injection separates the creation of a client's dependencies from the client's behavior, which allows program designs to be loosely coupled and to follow the dependency inversion and single responsibility principles. It directly contrasts with the service locator pattern, which allows clients to know about the system they use to find dependencies.

An injection, the basic unit of dependency injection, is not a new or a custom mechanism. It works in the same way that "parameter passing" works. Referring to "parameter passing" as an injection carries the added implication that it's being done to isolate the client from details.

Any object that may be used can be considered a `service`. Any object that uses other objects can be considered a `client`. The names have nothing to do with what the objects are for and everything to do with the role the objects play in any one injection.

The `interfaces` are the types the client expects its dependencies to be.

The `injector` introduces the services into the client.
