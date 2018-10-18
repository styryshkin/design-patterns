# JavaScript Design Patterns

## What Are Design Patterns?

Design patterns are reusable solutions to commonly occurring problems in software design.

During any language’s lifespan, many such reusable solutions are made and tested by a large number of developers from that language’s community. It is because of this combined experience of many developers that such solutions are so useful because they help us write code in an optimized way while at the same time solving the problem at hand.

The main benefits we get from design patterns are the following:

- **They are proven solutions**: Because design patterns are often used by many developers, you can be certain that they work. And not only that, you can be certain that they were revised multiple times and optimizations were probably implemented.
- **They are easily reusable**: Design patterns document a reusable solution which can be modified to solve multiple particular problems, as they are not tied to a specific problem.
- **They are expressive**: Design patterns can explain a large solution quite elegantly.
- **They ease communication**: When developers are familiar with design patterns, they can more easily communicate with one another about potential solutions to a given problem.
- **They prevent the need for refactoring code**: If an application is written with design patterns in mind, it is often the case that you won’t need to refactor the code later on because applying the correct design pattern to a given problem is already an optimal solution.
- **They lower the size of the codebase**: Because design patterns are usually elegant and optimal solutions, they usually require less code than other solutions.

## Design Pattern Categorization

Design patterns can be categorized in multiple ways, but the most popular one is the following:

- **Creational** design patterns
- **Structural** design patterns
- **Behavioral** design patterns

### Creational Design Patterns

**Creational design patterns** are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or in added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

Creational design patterns are composed of two dominant ideas. One is encapsulating knowledge about which concrete classes the system uses. Another is hiding how instances of these concrete classes are created and combined.

Five well-known design patterns that are parts of creational patterns are the:

- Factory Method
  > This makes an instance of several derived classes based on interfaced data or events.
- Abstract Factory
  > Creates an instance of several families of classes without dealing concrete classes.
- Builder
  > Separates object construction from its representation, always creates the same type of object.
- Dependency Injection
  > A class accepts the objects it requires from an injector instead of creating the objects directly.
- Prototype
  > A fully initialized instance used for copying or cloning.
- Singleton
  > A class with only a single instance with global access point.

### Structural Design Patterns

These patterns are concerned with class and object composition. They help structure or restructure one or more parts without affecting the entire system. In other words, they help obtain new functionalities without tampering with the existing ones. The most popular patterns in this category are:

- Adapter
  > Match interfaces of different classes therefore classes can work together despite incompatible interfaces.
- Bridge
  > Separates an object's interface from its implementation so the two can vary independently.
- Composite
  > A structure of simple and composite objects which makes the total object more than just sum of its parts.
- Decorator
  > Dynamically add alternate processing to objects.
- Facade
  > A single class that hides the complexity of an entire subsystem.
- Flyweight
  > A fine-grained instance used for efficient sharing of information that is contained elsewhere.
- Proxy
  > A place holder object representing the true object.

### Behavioral Design Patterns

These patterns are concerned with improving communication between dissimilar objects. Popular examples of these patterns are:

- Chain of responsibility
  > Delegates commands to a chain of processing objects.
  > -Command
  > Creates objects which encapsulate actions and parameters.
- Interpreter
  > Implements a specialized language.
- Iterator
  > Accesses the elements of an object sequentially without exposing its underlying representation.
- Mediator
  > Allows loose coupling between classes by being the only class that has detailed knowledge of their methods.
- Memento
  > Provides the ability to restore an object to its previous state (undo).
- Observer
  > Publish/subscribe pattern which allows a number of observer objects to see an event.
- State
  > Allows an object to alter its behavior when its internal state changes.
- Strategy
  > Allows one of a family of algorithms to be selected on-the-fly at runtime.
- Template
  > Method defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior.
- Visitor
  > Separates an algorithm from an object structure by moving the hierarchy of methods into one object.
