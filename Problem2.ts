function fibonacci(number: number): number {
    if (number === 0) {
      return 0;
    } else if (number === 1) {
      return 1;
    } else {
      return fibonacci(number - 1) + fibonacci(number - 2);
    }
  }
  const deretFibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946];

  console.log(fibonacci(0)); 
  console.log(fibonacci(2)); 
  console.log(fibonacci(9)); 
  console.log(fibonacci(10)); 
  console.log(fibonacci(12)); 
  