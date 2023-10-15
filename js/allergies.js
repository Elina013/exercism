function getAllergies(score) {
    const allergens = {
      'eggs': 1,
      'peanuts': 2,
      'shellfish': 4,
      'strawberries': 8,
      'tomatoes': 16,
      'chocolate': 32,
      'pollen': 64,
      'cats': 128,
    };
  
    const result = {
      allergicTo: [],
    };
  
    for (let allergen in allergens) {
      if (score & allergens[allergen]) {
        result.allergicTo.push(allergen);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const allergyScore = 34;
  const tomAllergies = getAllergies(allergyScore);
  console.log(tomAllergies.allergicTo); // Output: ["peanuts", "chocolate"]
  