class WinButton {
  paint () {
    // Render a button in a Windows style
  }
}

class OSXButton {
  paint () {
    // Render a button in a Mac OS X style
  }
}

class WinFactory {
  createButton () {
    return new WinButton()
  }
}

class OSXFactory {
  createButton () {
    return new OSXButton()
  }
}

const Appearance = {
  Win: 'Win',
  OSX: 'OSX',
}

/**
 * Usage example
 */

const settings = {
  appearance: Appearance.Win,
}

function main () {
  let factory

  switch (settings.appearance) {
  case Appearance.Win:
    factory = new WinFactory()
    break
  case Appearance.OSX:
    factory = new OSXFactory()
    break
  default:
    throw new Error('Not Implemented Exception')
  }

  const button = factory.createButton()

  button.paint()
}

main()
