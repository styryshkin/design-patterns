interface IButton {
  paint(): void;
}

interface IGUIFactory {
  createButton(): IButton;
}

class WinFactory implements IGUIFactory {
  public createButton(): IButton {
    return new WinButton();
  }
}

class OSXFactory implements IGUIFactory {
  public createButton(): IButton {
    return new OSXButton();
  }
}

class WinButton implements IButton {
  public paint(): void {
    // Render a button in a Windows style
  }
}

class OSXButton implements IButton {
  public paint(): void {
    // Render a button in a Mac OS X style
  }
}

enum Appearance {
  Win,
  OSX,
}

/**
 * Usage example
 */

const settings = {
  appearance: Appearance.Win,
};

function main() {
  let factory: IGUIFactory;

  switch (settings.appearance) {
    case Appearance.Win:
      factory = new WinFactory();
      break;
    case Appearance.OSX:
      factory = new OSXFactory();
      break;
    default:
      throw new Error('Not Implemented Exception');
  }

  const button: IButton = factory.createButton();

  button.paint();
}
