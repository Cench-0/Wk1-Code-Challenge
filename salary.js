
function netSalary() {
  const basicSalary = parseFloat(prompt("Enter the basic salary:"));
  const benefits = parseFloat(prompt("Enter the benefits:"));

  if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
    alert("Please enter valid numbers for basic salary and benefits.");
    return;
  }

  // PAYE (Pay As You Earn) Calculation:
  const monthlyTaxableIncome = basicSalary + benefits;
  let paye;
  if (monthlyTaxableIncome <= 24000) {
    paye = monthlyTaxableIncome * 0.1;
  } else if (monthlyTaxableIncome <= 32333) {
    paye = 2400 + (monthlyTaxableIncome - 24000) * 0.25;
  } else if (monthlyTaxableIncome <= 500000) {
    paye = 5833.25 + (monthlyTaxableIncome - 32333) * 0.3;
  } else if (monthlyTaxableIncome <= 800000) {
    paye = 147500 + (monthlyTaxableIncome - 500000) * 0.325;
  } else {
    paye = 230000 + (monthlyTaxableIncome - 800000) * 0.35;
  }

  // NHIF Deduction:
  let nhifDeduction;
  if (monthlyTaxableIncome <= 5999) {
    nhifDeduction = 150;
  } else if (monthlyTaxableIncome <= 7999) {
    nhifDeduction = 300;
  } else if (monthlyTaxableIncome <= 11999) {
    nhifDeduction = 400;
  } else if (monthlyTaxableIncome <= 14999) {
    nhifDeduction = 500;
  } else if (monthlyTaxableIncome <= 19999) {
    nhifDeduction = 600;
  } else if (monthlyTaxableIncome <= 24999) {
    nhifDeduction = 750;
  } else if (monthlyTaxableIncome <= 29999) {
    nhifDeduction = 850;
  } else if (monthlyTaxableIncome <= 34999) {
    nhifDeduction = 900;
  } else if (monthlyTaxableIncome <= 39999) {
    nhifDeduction = 950;
  } else if (monthlyTaxableIncome <= 44999) {
    nhifDeduction = 1000;
  } else if (monthlyTaxableIncome <= 49999) {
    nhifDeduction = 1100;
  } else if (monthlyTaxableIncome <= 59999) {
    nhifDeduction = 1200;
  } else if (monthlyTaxableIncome <= 69999) {
    nhifDeduction = 1300;
  } else if (monthlyTaxableIncome <= 79999) {
    nhifDeduction = 1400;
  } else if (monthlyTaxableIncome <= 89999) {
    nhifDeduction = 1500;
  } else if (monthlyTaxableIncome <= 99999) {
    nhifDeduction = 1600;
  } else {
    nhifDeduction = 1700;
  }

  // NSSF Deduction
  const nssfTierIContribution = Math.min(basicSalary, 7000) * 0.06;
  const nssfTierIIContribution = Math.max(0, Math.min(basicSalary, 36000) - 7000) * 0.06;
  const nssfDeduction = nssfTierIContribution + nssfTierIIContribution;

  // Gross Salary
  const grossSalary = basicSalary + benefits;

  // Net Salary
  const netSalary = grossSalary - paye - nhifDeduction - nssfDeduction;

  return {
    paye,
    nhifDeduction,
    nssfDeduction,
    grossSalary,
    netSalary
  };
}

const result = netSalary(10000,5000);
console.log(result);
