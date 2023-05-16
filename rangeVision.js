function range_vision(number) {
    const digits = Array.from(String(number), Number);
    let minValue = Infinity;
  
    for (let i = 0; i < digits.length; i++) {
      const leftRange = digits.slice(0, i).reverse();
      const rightRange = digits.slice(i + 1);
  
      const visionValue = digits[i] + sumArray(leftRange) + sumArray(rightRange);
      if (visionValue < minValue) {
        minValue = visionValue;
      }
    }
  
    return digits.includes(1) && minValue === digits[0];
  }
  
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }