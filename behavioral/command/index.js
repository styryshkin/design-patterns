/* The Invoker class */
class Switch {
  constructor (closedCommand, openedCommand) {
    this.closedCommand = closedCommand
    this.openedCommand = openedCommand
  }
  // Close the circuit / power on
  close () {
    this.closedCommand.execute()
  }
  // Open the circuit / power off
  open () {
    this.openedCommand.execute()
  }
}

/* The Receiver class */
class Light {
  powerOn () {
    console.log('The light is on')
  }
  powerOff () {
    console.log('The light is off')
  }
}

/* The Command for turning off the device - ConcreteCommand #1 */
class CloseSwitchCommand {
  constructor (switchable) {
    this.switchable = switchable
  }
  execute () {
    this.switchable.powerOff()
  }
}

/* The Command for turning on the device - ConcreteCommand #2 */
class OpenSwitchCommand {
  constructor (switchable) {
    this.switchable = switchable
  }
  execute () {
    this.switchable.powerOn()
  }
}

function run (arg) {
  const lamp = new Light()
  // Pass reference to the lamp instance to each command
  const switchClose = new CloseSwitchCommand(lamp)
  const switchOpen = new OpenSwitchCommand(lamp)
  // Pass reference to instances of the Command objects to the switch
  const switcher = new Switch(switchClose, switchOpen)
  if (arg === 'ON')
    switcher.open()
  else if (arg === 'OFF')
    switcher.close()
  else
    console.log('Argument "ON" or "OFF" is required.')

}

run('ON')
