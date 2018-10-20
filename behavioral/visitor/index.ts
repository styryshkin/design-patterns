interface IVisitor {
  visit(emp: Employee): void;
}

class Employee {
  private name: string;
  private salary: number;
  private vacation: number;

  constructor(name: string, salary: number, vacation: number) {
    this.name = name;
    this.salary = salary;
    this.vacation = vacation;
  }

  public accept(visitor: IVisitor) {
    visitor.visit(this);
  }

  public getName() {
    return this.name;
  }

  public getSalary() {
    return this.salary;
  }

  public setSalary(salary: number) {
    this.salary = salary;
  }

  public getVacation() {
    return this.vacation;
  }

  public setVacation(vacation: number) {
    this.vacation = vacation;
  }
}

class ExtraSalary implements IVisitor {
  public visit(emp) {
    emp.setSalary(emp.getSalary() * 2);
  }
}

class ExtraVacation implements IVisitor {
  public visit(emp) {
    emp.setVacation(emp.getVacation() + 2);
  }
}

function run() {
  const employees = [
    new Employee('John', 10000, 10),
    new Employee('Mary', 20000, 21),
    new Employee('Boss', 250000, 51),
  ];

  const visitorSalary = new ExtraSalary();
  const visitorVacation = new ExtraVacation();

  employees.forEach(emp => {
    emp.accept(visitorSalary);
    emp.accept(visitorVacation);

    console.log(`${emp.getName()}: $${emp.getSalary()} and ${emp.getVacation()} vacation days.`);
  });
}

run();
