function fibonacci(number: number): number {
    if (number === 0) {
      return 0;
    } else if (number === 1) {
      return 1;
    } else {
      return fibonacci(number - 1) + fibonacci(number - 2);
    }
  }
  
  console.log(fibonacci(0)); // Output: 0
  console.log(fibonacci(2)); // Output: 1
  console.log(fibonacci(9)); // Output: 34
  console.log(fibonacci(10)); // Output: 55
  console.log(fibonacci(12)); // Output: 144
  