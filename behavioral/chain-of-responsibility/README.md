# Chain-of-responsibility pattern

The **chain-of-responsibility** pattern is a design pattern consisting of a source of command objects and a series of processing objects. Each processing object contains logic that defines the types of command objects that it can handle; the rest are passed to the next processing object in the chain. A mechanism also exists for adding new processing objects to the end of this chain. Thus, the chain of responsibility is an object oriented version of the `if ... else if ... else if ....... else ... endif` idiom, with the benefit that the condition–action blocks can be dynamically rearranged and reconfigured at runtime.

_Frequency of use (in JavaScript): ![medium](../../assets/frequency/medium.png) medium_

## Overview

**What problems can the Chain of Responsibility design pattern solve?**

- Coupling the sender of a request to its receiver should be avoided.
- It should be possible that more than one receiver can handle a request.

Implementing a request directly within the class that sends the request is inflexible because it couples the class to a particular receiver and makes it impossible to support multiple receivers.

**What solution does the Chain of Responsibility design pattern describe?**

- Define a chain of receiver objects having the responsibility, depending on run-time conditions, to either handle a request or forward it to the next receiver on the chain (if any).

## Diagram

![chain of responsibility](../../assets/diagrams/chain-of-responsibility.png)
