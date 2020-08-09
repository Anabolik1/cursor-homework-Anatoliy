const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// function #1
function getMyTaxes(salary) {
  return this.tax * salary;
}

console.log(getMyTaxes.call(ukraine, 10000));

// function #2
function getMiddleTaxes(country) {
  return this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(ukraine));

// function #3
function getTotalTaxes(country) {
  return this.tax * this.middleSalary * this.vacancies;
}

console.log(getTotalTaxes.call(latvia));


// function#4
function getMySalary(country) {
  let salary = Math.round(1500 + Math.random() * (2000 - 1500));
  let taxes = Math.round(this.tax * salary);
  let profit = Math.round(salary - taxes);

  return { 
    salary,
    taxes,
    profit
  };
}

console.log(getMySalary.call(ukraine));
const result = setInterval(() => console.log(getMySalary.call(ukraine)), 10000);