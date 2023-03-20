// *******************  Challenge 3: Net Salary Calculator (Toy Problem) *************************
// This challenge is solved using callback function, this is made possible by declaring three functions
// These functions are calculated in respect to their values which generates Net salaries, in respect
// to Gross salary value. this code contains functions PayeCalculator, NHIF calculator and NSSF calculator.
// These functions are used to generate Net salaries. 

payeCalculator = (grossPay) => { // Calculates tax to be paid
    // PAYE calculation
    let personalRelief = 2400;
    let taxedIncome;
    // let paye;
    let afterTax;
    if(grossPay < 24000) {
       afterTax = grossPay; //paye value = null
    } else if(grossPay === 24000) {
       taxedIncome = grossPay / 10
       paye = taxedIncome - personalRelief;
       afterTax = grossPay - paye; // After tax amount
    } else if(grossPay > 24000 && grossPay <=  32333) {
        taxedIncome = (grossPay * 25) /100;
        paye = taxedIncome - personalRelief;
        afterTax = grossPay - paye; // After tax amount
    } else {
        taxedIncome = (grossPay * 30) /100;
        paye = taxedIncome - personalRelief;
        afterTax = grossPay - paye; // After tax amount
    }
    return afterTax;
}


nhifCalculator = (afterTaxinput) => { // calculates NHIF to be paid
    let nhifDeduction;

    if(afterTaxinput < 5999) {
        nhifDeduction = afterTaxinput;
    } else if(afterTaxinput == 5999) {
        nhifDeduction = afterTaxinput - 150;
    } else if(afterTaxinput >= 6000 && afterTaxinput <= 7999) {
        nhifDeduction = afterTaxinput - 300;
    } else if(afterTaxinput >= 8000 && afterTaxinput <= 11999) {
        nhifDeduction = afterTaxinput - 400;
    } else if(afterTaxinput >= 12000 && afterTaxinput <= 14999) {
        nhifDeduction = afterTaxinput - 500;
    } else if(afterTaxinput >= 15000 && afterTaxinput <= 19999) {
        nhifDeduction = afterTaxinput - 600;
    } else if(afterTaxinput >= 20000 && afterTaxinput <= 24999) {
        nhifDeduction = afterTaxinput - 750;
    } else if(afterTaxinput >= 25000 && afterTaxinput <= 29999) {
        nhifDeduction = afterTaxinput - 850;
    } else if(afterTaxinput >= 30000 && afterTaxinput <= 34999) {
        nhifDeduction = afterTaxinput - 900;
    } else if(afterTaxinput >= 35000 && afterTaxinput <= 39999) {
        nhifDeduction = afterTaxinput - 950;
    } else if(afterTaxinput >= 40000 && afterTaxinput <= 44999) {
        nhifDeduction = afterTaxinput - 1000;
    } else if(afterTaxinput >= 45000 && afterTaxinput <= 49999) {
        nhifDeduction = afterTaxinput - 1100;
    } else if(afterTaxinput >= 50000 && afterTaxinput <= 59999) {
        nhifDeduction = afterTaxinput - 1200;
    } else if(afterTaxinput >= 60000 && afterTaxinput <= 69999) {
        nhifDeduction = afterTaxinput - 1300;
    } else if(afterTaxinput >= 70000 && afterTaxinput <= 79999) {
        nhifDeduction = afterTaxinput - 1400;
    } else if(afterTaxinput >= 80000 && afterTaxinput <= 89999) {
        nhifDeduction = afterTaxinput - 1500;
    } else if(afterTaxinput >= 90000 && afterTaxinput <= 99999) {
        nhifDeduction = afterTaxinput - 1600;
    } else {
        nhifDeduction = afterTaxinput - 1700;
    }

    return nhifDeduction
}

nssfCalculator = (nhifInput) => { // Calculates NSSF and Net salary
   let netSalary = nhifInput - 400
   return netSalary;
}


let afterTax = payeCalculator(7000) // afterTax deduction
let afternhifDeduction = nhifCalculator(afterTax) // after nhifDeduction
console.log(nssfCalculator(afternhifDeduction))