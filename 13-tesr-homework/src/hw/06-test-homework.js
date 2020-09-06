

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

function getMiddleTaxes(country) {
  return this.tax * this.middleSalary;
}
let r = getMiddleTaxes.call(ukraine);

export default r;


