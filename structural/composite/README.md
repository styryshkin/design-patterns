# Composite pattern

The **composite pattern** is a partitioning design pattern. The composite pattern describes a group of objects that is treated the same way as a single instance of the same type of object. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies. Implementing the composite pattern lets clients treat individual objects and compositions uniformly.

## Overview

**What problems can the Composite design pattern solve?**

- A part-whole hierarchy should be represented so that clients can treat part and whole objects uniformly.
- A part-whole hierarchy should be represented as tree structure.

**What solution does the Composite design pattern describe?**

- Define a unified `Component` interface for both part (`Leaf`) objects and whole (`Composite`) objects.
- Individual `Leaf` objects implement the `Component` interface directly, and `Composite` objects forward requests to their child components.

This enables clients to work through the `Component` interface to treat `Leaf` and `Composite` objects uniformly: `Leaf` objects perform a request directly, and `Composite` objects forward the request to their child components recursively downwards the tree structure. This makes client classes easier to implement, change, test, and reuse.

## When to use

Composite should be used when clients ignore the difference between compositions of objects and individual objects. If programmers find that they are using multiple objects in the same way, and often have nearly identical code to handle each of them, then composite is a good choice; it is less complex in this situation to treat primitives and composites as homogeneous.
