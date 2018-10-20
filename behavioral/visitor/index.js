class Employee {
  constructor (name, salary, vacation) {
    this.name = name
    this.salary = salary
    this.vacation = vacation
  }
  accept (visitor) {
    visitor.visit(this)
  }
  getName () {
    return this.name
  }
  getSalary () {
    return this.salary
  }
  setSalary (salary) {
    this.salary = salary
  }
  getVacation () {
    return this.vacation
  }
  setVacation (vacation) {
    this.vacation = vacation
  }
}

class ExtraSalary {
  visit (emp) {
    emp.setSalary(emp.getSalary() * 2)
  }
}

class ExtraVacation {
  visit (emp) {
    emp.setVacation(emp.getVacation() + 2)
  }
}

function run () {
  const employees = [
    new Employee('John', 10000, 10),
    new Employee('Mary', 20000, 21),
    new Employee('Boss', 250000, 51),
  ]
  const visitorSalary = new ExtraSalary()
  const visitorVacation = new ExtraVacation()
  employees.forEach(emp => {
    emp.accept(visitorSalary)
    emp.accept(visitorVacation)
    console.log(`${ emp.getName() }: $${ emp.getSalary() } and ${ emp.getVacation() } vacation days.`)
  })
}

run()
