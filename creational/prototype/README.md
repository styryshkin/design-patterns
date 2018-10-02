# Prototype Pattern

The **prototype pattern** is a creational design pattern in software development. It is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects. This pattern is used to:

- avoid subclasses of an object creator in the client application, like the factory method pattern does.
- avoid the inherent cost of creating a new object in the standard way (e.g., using the 'new' keyword) when it is prohibitively expensive for a given application.

To implement the pattern, declare an abstract base class that specifies a pure virtual `clone()` method. Any class that needs a "polymorphic constructor" capability derives itself from the abstract base class, and implements the `clone()` operation.

The client, instead of writing code that invokes the "new" operator on a hard-coded class name, calls the `clone()` method on the prototype, calls a factory method with a parameter designating the particular concrete derived class desired, or invokes the `clone()` method through some mechanism provided by another design pattern.

## Overview

**The Prototype design pattern solves problems like:**

- How can objects be created so that which objects to create can be specified at run-time?
- How can dynamically loaded classes be instantiated?

Creating objects directly within the class that requires (uses) the objects is inflexible because it commits the class to particular objects at compile-time and makes it impossible to specify which objects to create at run-time.

**The Prototype design pattern describes how to solve such problems:**

- Define a Prototype object that returns a copy of itself.
- Create new objects by copying a Prototype object.
