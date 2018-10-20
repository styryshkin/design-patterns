// original object
class OriginalObject {
  public string1: string;
  public string2: string;

  private memento: Memento;

  constructor(str1: string, str2: string) {
    this.string1 = str1;
    this.string2 = str2;
    this.memento = new Memento(str1, str2);
  }

  public revert(): void {
    this.string1 = this.memento.string1;
    this.string2 = this.memento.string2;
  }
}

// Memento object
class Memento {
  public string1: string;
  public string2: string;

  constructor(str1: string, str2: string) {
    this.string1 = str1;
    this.string2 = str2;
  }
}
