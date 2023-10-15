function dayRate(hourlyRate) {
    return hourlyRate * 8;
  }
  
  function daysInBudget(budget, hourlyRate) {
    return Math.floor(budget / (hourlyRate * 8));
  }
  
  function priceWithMonthlyDiscount(hourlyRate, projectDays, discountRate) {
    const fullMonths = Math.floor(projectDays / 22);
    const remainingDays = projectDays % 22;
    const fullMonthCost = fullMonths * 22 * hourlyRate * 8;
    const remainingCost = Math.ceil(remainingDays * hourlyRate * 8);
    const totalCost = fullMonthCost * (1 - discountRate) + remainingCost;
  
    return totalCost;
  }
  
  console.log(dayRate(89)); // Output: 712
  console.log(daysInBudget(20000, 89)); // Output: 28
  console.log(priceWithMonthlyDiscount(89, 230, 0.42)); // Output: 97972
  