// Leaf
class Ellipse {
  print () {
    console.log('Ellipse')
  }
}

// Composite
class CompositeGraphic {
  constructor () {
    // initialize generic Collection(Composition)
    this.graphics = new Array()
  }

  // Adds the graphic to the composition
  add (graphic) {
    this.graphics.push(graphic)
  }

  // Adds multiple graphics to the composition
  addRange (graphics) {
    this.graphics.push(...graphics)
  }

  // Prints the graphic.
  print () {
    this.graphics.forEach(graphic => graphic.print())
  }
}

function run () {
  // initialize variables
  const compositeGraphic = new CompositeGraphic()
  const compositeGraphic1 = new CompositeGraphic()
  const compositeGraphic2 = new CompositeGraphic()

  // Add 1 Graphic to compositeGraphic1
  compositeGraphic1.add(new Ellipse())

  // Add 2 Graphic to compositeGraphic2
  compositeGraphic2.addRange([ new Ellipse(), new Ellipse() ])

  /**
   * Add 1 Graphic, compositeGraphic1, and
   * compositeGraphic2 to compositeGraphic
   */
  compositeGraphic.addRange([ new Ellipse(), compositeGraphic1, compositeGraphic2 ])

  compositeGraphic.print()
}

run()
