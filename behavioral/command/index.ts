interface ICommand {
  execute(): void;
}

/* The Invoker class */
class Switch {
  public closedCommand: ICommand;
  public openedCommand: ICommand;

  constructor(closedCommand: ICommand, openedCommand: ICommand) {
    this.closedCommand = closedCommand;
    this.openedCommand = openedCommand;
  }

  // Close the circuit / power on
  public close(): void {
    this.closedCommand.execute();
  }

  // Open the circuit / power off
  public open(): void {
    this.openedCommand.execute();
  }
}

/* An interface that defines actions that the receiver can perform */
interface ISwitchable {
  powerOn(): void;
  powerOff(): void;
}

/* The Receiver class */
class Light implements ISwitchable {
  public powerOn() {
    console.log('The light is on');
  }
  public powerOff() {
    console.log('The light is off');
  }
}

/* The Command for turning off the device - ConcreteCommand #1 */
class CloseSwitchCommand implements ICommand {
  private switchable: ISwitchable;

  constructor(switchable: ISwitchable) {
    this.switchable = switchable;
  }

  public execute() {
    this.switchable.powerOff();
  }
}

/* The Command for turning on the device - ConcreteCommand #2 */
class OpenSwitchCommand implements ICommand {
  private switchable: ISwitchable;

  constructor(switchable: ISwitchable) {
    this.switchable = switchable;
  }

  public execute() {
    this.switchable.powerOn();
  }
}

function run(arg) {
  const lamp: ISwitchable = new Light();

  // Pass reference to the lamp instance to each command
  const switchClose: ICommand = new CloseSwitchCommand(lamp);
  const switchOpen: ICommand = new OpenSwitchCommand(lamp);

  // Pass reference to instances of the Command objects to the switch
  const switcher: Switch = new Switch(switchClose, switchOpen);

  if (arg === 'ON') {
    switcher.open();
  } else if (arg === 'OFF') {
    switcher.close();
  } else {
    console.log('Argument "ON" or "OFF" is required.');
  }
}

run('ON');
