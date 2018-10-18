enum LogLevel {
  None = 0,
  Info = 1,
  Debug = 2,
  Warning = 4,
  Error = 8,
  FunctionalMessage = 16,
  FunctionalError = 32,
  All = 63,
}

abstract class Logger {
  // The next Handler in the chain
  protected next: Logger;
  protected logMask: LogLevel;

  constructor(mask: LogLevel) {
    this.logMask = mask;
  }

  public setNext(nextLogger: Logger): Logger {
    this.next = nextLogger;
    return nextLogger;
  }
  public message(msg: string, severity: LogLevel): void {
    if ((severity & this.logMask) !== 0) {
      this.writeMessage(msg);
    }
    if (this.next) {
      this.next.message(msg, severity);
    }
  }
  protected abstract writeMessage(msg: string): void;
}

class ConsoleLogger extends Logger {
  constructor(mask: LogLevel) {
    super(mask);
  }
  protected writeMessage(msg: string): void {
    console.log('Writing to console: ' + msg);
  }
}

class EmailLogger extends Logger {
  constructor(mask: LogLevel) {
    super(mask);
  }
  protected writeMessage(msg: string): void {
    console.log('Sending via email: ' + msg);
  }
}

class FileLogger extends Logger {
  constructor(mask: LogLevel) {
    super(mask);
  }
  protected writeMessage(msg: string): void {
    console.log('Writing to Log File: ' + msg);
  }
}

function run() {
  const logger = new ConsoleLogger(LogLevel.All);
  const logger1 = logger.setNext(
    new EmailLogger(LogLevel.FunctionalMessage | LogLevel.FunctionalError),
  );
  const logger2 = logger1.setNext(new FileLogger(LogLevel.Warning | LogLevel.Error));

  // Handled by ConsoleLogger since the console has a logLevel of all
  logger.message('Entering function ProcessOrder().', LogLevel.Debug);
  logger.message('Order record retrieved.', LogLevel.Info);

  // Handled by ConsoleLogger and FileLogger since fileLogger implements Warning & Error
  logger.message('Customer Address details missing in Branch DataBase.', LogLevel.Warning);
  logger.message('Customer Address details missing in Organization DataBase.', LogLevel.Error);

  // Handled by ConsoleLogger and EmailLogger as it implements functional error
  logger.message(
    'Unable to Process Order ORD1 Dated D1 For Customer C1.',
    LogLevel.FunctionalError,
  );

  // Handled by ConsoleLogger and EmailLogger
  logger.message('Order Dispatched.', LogLevel.FunctionalMessage);
}

run();
