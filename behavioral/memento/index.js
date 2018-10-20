// Memento object
class Memento {
    string1;
    string2;

    constructor (str1, str2) {
      this.string1 = str1
      this.string2 = str2
    }
}

// original object
class OriginalObject {
    string1;
    string2;
    memento;

    constructor (str1, str2) {
      this.string1 = str1
      this.string2 = str2
      this.memento = new Memento(str1, str2)
    }

    revert () {
      this.string1 = this.memento.string1
      this.string2 = this.memento.string2
    }
}

