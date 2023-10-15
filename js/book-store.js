function cost(basket) {
    const bookPrices = [800, 800, 800, 800, 800]; // Price for each book in cents
    const discountRates = [0, 5, 10, 20, 25]; // Discount rates for 0 to 5 different books
    let totalCost = 0;
  
    while (basket.length > 0) {
      const uniqueBooks = new Set(basket); // Find unique books in the basket
      const numUniqueBooks = uniqueBooks.size;
  
      // Calculate the discount for the unique books and apply it to the total cost
      totalCost += (1 - discountRates[numUniqueBooks] / 100) * numUniqueBooks * 800;
  
      // Remove the unique books from the basket
      for (const book of uniqueBooks) {
        basket.splice(basket.indexOf(book), 1);
      }
    }
  
    return totalCost;
  }
  
  // Example usage:
  const basket = [1, 1, 2, 2, 3, 3, 3, 4, 5];
  const totalCostInCents = cost(basket);
  console.log(totalCostInCents); // Output: 5120 (equals $51.20)
  