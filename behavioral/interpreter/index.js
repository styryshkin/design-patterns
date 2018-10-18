// "Context"
class Context {}
// "AbstractExpression"
class AbstractExpression {}
// "TerminalExpression"
class TerminalExpression extends AbstractExpression {
  interpret (/* context*/) {
    console.log('Called Terminal.Interpret()')
  }
}
// "NonterminalExpression"
class NonterminalExpression extends AbstractExpression {
  interpret (/* context*/) {
    console.log('Called Nonterminal.Interpret()')
  }
}
function run () {
  const context = new Context()
  // Usually a tree
  const list = []
  // Populate 'abstract syntax tree'
  list.push(new TerminalExpression())
  list.push(new NonterminalExpression())
  list.push(new TerminalExpression())
  list.push(new TerminalExpression())
  // Interpret
  for (const exp of list)
    exp.interpret(context)

}
run()
