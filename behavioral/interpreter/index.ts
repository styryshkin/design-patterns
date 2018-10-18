// "Context"
class Context {}

// "AbstractExpression"
abstract class AbstractExpression {
  public abstract interpret(context: Context): void;
}

// "TerminalExpression"
class TerminalExpression extends AbstractExpression {
  public interpret(context: Context): void {
    console.log('Called Terminal.Interpret()');
  }
}

// "NonterminalExpression"
class NonterminalExpression extends AbstractExpression {
  public interpret(context: Context): void {
    console.log('Called Nonterminal.Interpret()');
  }
}

function run() {
  const context = new Context();
  // Usually a tree
  const list: AbstractExpression[] = [];

  // Populate 'abstract syntax tree'
  list.push(new TerminalExpression());
  list.push(new NonterminalExpression());
  list.push(new TerminalExpression());
  list.push(new TerminalExpression());

  // Interpret
  for (const exp of list) {
    exp.interpret(context);
  }
}

run();
