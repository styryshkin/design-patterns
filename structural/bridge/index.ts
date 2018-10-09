// Helps in providing truly decoupled architecture
interface IBridge {
  function1(): void;
  function2(): void;
}

class Bridge1 implements IBridge {
  public function1() {
    console.log('Bridge1.function1');
  }
  public function2() {
    console.log('Bridge1.function2');
  }
}

class Bridge2 implements IBridge {
  public function1() {
    console.log('Bridge2.function1');
  }
  public function2() {
    console.log('Bridge2.function2');
  }
}

interface IAbstractBridge {
  callMethod1(): void;
  callMethod2(): void;
}

class AbstractBridge implements IAbstractBridge {
  public bridge: IBridge;

  constructor(bridge: IBridge) {
    this.bridge = bridge;
  }

  public callMethod1() {
    this.bridge.function1();
  }

  public callMethod2() {
    this.bridge.function2();
  }
}
