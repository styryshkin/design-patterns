const Singleton = (() => {
  let instance: object;

  function createInstance() {
    const object: object = new Object('I am the instance');
    return object;
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    },
  };
})();

function run() {
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();

  console.log('Same instance? ' + (instance1 === instance2));
}

run();
