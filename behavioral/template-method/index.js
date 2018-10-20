const datastore = {
  process () {
    this.connect()
    this.select()
    this.disconnect()
    return true
  },
}

function inherit (proto) {
  // eslint-disable-next-line no-empty-function
  const F = () => {}
  F.prototype = proto
  return new F()
}

function run () {
  const mySql = inherit(datastore)
  // implement template steps
  mySql.connect = () => {
    console.log('MySQL: connect step')
  }
  mySql.select = () => {
    console.log('MySQL: select step')
  }
  mySql.disconnect = () => {
    console.log('MySQL: disconnect step')
  }
  mySql.process()
}
run()
