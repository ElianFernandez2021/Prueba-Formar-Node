function number_cardinality(number) {
    if (number % 10 === 0) {
      return "zero";
    } else if (number % 10 === 5) {
      return "five";
    } else if (number % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }