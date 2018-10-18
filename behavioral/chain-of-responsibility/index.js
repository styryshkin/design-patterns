const LogLevel = {
  None: 0,
  Info: 1,
  Debug: 2,
  Warning: 4,
  Error: 8,
  FunctionalMessage: 16,
  FunctionalError: 32,
  All: 63,
}

class Logger {
  constructor (mask) {
    this.logMask = mask
  }
  setNext (nextLogger) {
    this.next = nextLogger
    return nextLogger
  }
  message (msg, severity) {
    if ((severity & this.logMask) !== 0)
      this.writeMessage(msg)

    if (this.next)
      this.next.message(msg, severity)

  }
}

class ConsoleLogger extends Logger {
  writeMessage (msg) {
    console.log('Writing to console: ' + msg)
  }
}

class EmailLogger extends Logger {
  writeMessage (msg) {
    console.log('Sending via email: ' + msg)
  }
}

class FileLogger extends Logger {
  writeMessage (msg) {
    console.log('Writing to Log File: ' + msg)
  }
}

function run () {
  const logger = new ConsoleLogger(LogLevel.All)
  const logger1 = logger.setNext(
    new EmailLogger(LogLevel.FunctionalMessage | LogLevel.FunctionalError),
  )
  logger1.setNext(new FileLogger(LogLevel.Warning | LogLevel.Error))
  // Handled by ConsoleLogger since the console has a logLevel of all
  logger.message('Entering function ProcessOrder().', LogLevel.Debug)
  logger.message('Order record retrieved.', LogLevel.Info)
  // Handled by ConsoleLogger and FileLogger since fileLogger implements Warning & Error
  logger.message('Customer Address details missing in Branch DataBase.', LogLevel.Warning)
  logger.message('Customer Address details missing in Organization DataBase.', LogLevel.Error)
  // Handled by ConsoleLogger and EmailLogger as it implements functional error
  logger.message(
    'Unable to Process Order ORD1 Dated D1 For Customer C1.',
    LogLevel.FunctionalError,
  )
  // Handled by ConsoleLogger and EmailLogger
  logger.message('Order Dispatched.', LogLevel.FunctionalMessage)
}
run()
