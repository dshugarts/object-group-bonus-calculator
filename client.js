var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

console.log(employees);

function calcBonus(employeeArray) {

for (var i = 0; i < employeeArray.length; i++){
  var bonusPerc = 0;
  if (employeeArray[i].reviewRating <=2){
    bonusPerc = 0;
  } else if (employeeArray[i].reviewRating === 3) {
    bonusPerc = 0.04;
  } else if (employeeArray[i].reviewRating === 4) {
    bonusPerc = 0.06;
  } else {
    bonusPerc = 0.10;
  }
  if (employeeArray[i].employeeNumber < 10000) {
    bonusPerc += 0.05;
  }
  if (employeeArray[i].annualSalary >= 65000) {
    bonusPerc -= 0.01;
  }
  if (bonusPerc >= 0.13) {
    bonusPerc = 0.13;
  } else if (bonusPerc <= 0) {
    bonusPerc = 0;
  }
  var subBonus = (bonusPerc*employeeArray[i].annualSalary);
  var tBonus = Math.round(subBonus);
  var totalComp = (parseInt(employeeArray[i].annualSalary)+subBonus);

  // console.log(bonusPerc);
  // console.log(totalComp);
  // console.log(totalBonus);
  var empBonus = {
    name: employeeArray[i].name,
    bonusPercentage: bonusPerc,
    totalCompensation: totalComp,
    totalBonus: tBonus
  };
console.log(empBonus);
}
}
