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
- **Concurrency** design patterns
- **Architectural** design patterns

### Creational Design Patterns
These patterns are for handling object creational mechanisms. A Creational Pattern basically solves a problem by controlling the creation process of an object. Some of the popular design patterns in this category are:

- Factory method
    > This makes an instance of several derived classes based on interfaced data or events.
- Abstract factory
    > Creates an instance of several families of classes without dealing concrete classes.
- Builder
    > Separates object construction from its representation, always creates the same type of object.
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

- Interpreter
    > A way to include language elements in an application to match the grammar of the intended language.
- Template Method
    > Creates the shell of an algorithm in a method, then defer the exact steps to a subclass.
- Chain of responsibility
    > A way of passing a request between a chain of objects to find the object that can handle the request. 
- Command
    > Encapsulate a command request as an object to enable, logging and/or queuing of requests, and provides error-handling for unhandled requests.
- Iterator
    > Sequentially access the element of a collection without knowing the inner workings of the collection.
- Mediator
    > Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other.
- Memento
    > Capture an object's internal state to be able to restore it later.
- Observer
    > A way of notifying change to a number of classes to ensure consistency between classes.
- State
    > Alter an object's behavior when its state changes.
- Strategy
    > Encapsulates an algorithm inside a class separating the selection from the implementation.
- Visitor
    > Adds a new operation to a class without changing the class.

### Concurrency Design Patterns

These types of design patterns deal with multi-threaded programming paradigms. Some of the popular ones are:

- Active object
- Nuclear reaction
- Scheduler

### Architectural Design Patterns

Design patterns which are used for architectural purposes. Some of the most famous ones are:

- MVC (Model-View-Controller)
- MVP (Model-View-Presenter)
- MVVM (Model-View-ViewModel)
