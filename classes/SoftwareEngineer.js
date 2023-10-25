const { Employees } = require("./Employees");

class SoftwareEngineer extends Employees {
  #programmingLanguages = [];

  constructor(name, position, salary, language) {
    super(name, position, salary);
    this.#programmingLanguages = language;
  }

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }
  setProgrammingLanguages(language) {
    this.#programmingLanguages.push(language);
  }
}

module.exports = {
  SoftwareEngineer,
};
