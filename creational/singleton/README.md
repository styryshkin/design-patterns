# Singleton pattern

The **singleton pattern** is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system. The concept is sometimes generalized to systems that operate more efficiently when only one object exists, or that restrict the instantiation to a certain number of objects. The term comes from the mathematical concept of a singleton.

## Overview

**The singleton design pattern solves problems like:**

- How can it be ensured that a class has only one instance?
- How can the sole instance of a class be accessed easily?
- How can a class control its instantiation?
- How can the number of instances of a class be restricted?

**The singleton design pattern describes how to solve such problems:**

- Hide the constructor of the class.
- Define a public static operation (`getInstance()`) that returns the sole instance of the class.
