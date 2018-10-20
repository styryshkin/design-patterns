type Noop = () => void;
interface IDatastore {
  process(): boolean;
}

const datastore: IDatastore = {
  process(): boolean {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  },
};

function inherit(proto) {
  const F: Noop = () => {};
  F.prototype = proto;
  return new F();
}

function run() {
  const mySql = inherit(datastore);

  // implement template steps

  mySql.connect = () => {
    console.log('MySQL: connect step');
  };

  mySql.select = () => {
    console.log('MySQL: select step');
  };

  mySql.disconnect = () => {
    console.log('MySQL: disconnect step');
  };

  mySql.process();
}

run();
