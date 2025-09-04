const countVowelsArrow = (str) => {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

// Example
console.log(countVowelsArrow("javascript"));  // Output: 3

