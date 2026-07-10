"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  }

  if (d === 0) {
    const result = -b / (2 * a);
    arr.push(result);
    return arr;
  }

  if (d > 0) {
    const result1 = (-b + Math.sqrt(d)) / (2 * a);
    const result2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(result1, result2);
    return arr;
  }
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthRate = percent / 1200;
  let credit = amount - contribution;
  let p = monthRate;
  let n = countMonths;
  let s = credit;

  let denominator = ((1 + p) ** n) - 1;
  let total = s * (p + p / denominator);
  let totalAmount = total * countMonths;

  return Number(totalAmount.toFixed(2));
}