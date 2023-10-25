class Employees {
  #salary;
  #isHired = true;
  static #allEmployees = [];
  static #totalPayRoll = 0;

  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    Employees.#allEmployees.push(this);
  }
  // (Re
  getSalary() {
    return this.#salary;
  }
  setSalary(amount) {
    this.#salary = amount;
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    if (command === "fire") {
      this.#isHired = false;
      Employees.#totalPayRoll += this.#salary;
    } else {
      this.#isHired = true;
    }
  }
  static getEmployees() {
    return Employees.#allEmployees;
  }

  static getTotalPayroll() {
    for (const employee of Employees.#allEmployees) {
      if (employee.getStatus()) {
        Employees.#totalPayRoll += employee.getSalary();
      }
    }
    return Employees.#totalPayRoll;
  }
}

module.exports = {
  Employees,
};
