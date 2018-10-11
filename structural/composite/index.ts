// Component
interface IGraphic {
  print(): void;
}

// Leaf
class Ellipse implements IGraphic {
  public print() {
    console.log('Ellipse');
  }
}

// Composite
class CompositeGraphic implements IGraphic {
  // Collection of Graphics.
  private readonly graphics: IGraphic[];

  constructor() {
    // initialize generic Collection(Composition)
    this.graphics = new Array();
  }

  // Adds the graphic to the composition
  public add(graphic: IGraphic): void {
    this.graphics.push(graphic);
  }

  // Adds multiple graphics to the composition
  public addRange(graphics: IGraphic[]): void {
    this.graphics.push(...graphics);
  }

  // Prints the graphic.
  public print() {
    this.graphics.forEach(graphic => graphic.print());
  }
}

function run() {
  // initialize variables
  const compositeGraphic = new CompositeGraphic();
  const compositeGraphic1 = new CompositeGraphic();
  const compositeGraphic2 = new CompositeGraphic();

  // Add 1 Graphic to compositeGraphic1
  compositeGraphic1.add(new Ellipse());

  // Add 2 Graphic to compositeGraphic2
  compositeGraphic2.addRange([new Ellipse(), new Ellipse()]);

  /**
   * Add 1 Graphic, compositeGraphic1, and
   * compositeGraphic2 to compositeGraphic
   */
  compositeGraphic.addRange([new Ellipse(), compositeGraphic1, compositeGraphic2]);

  compositeGraphic.print();
}

run();
