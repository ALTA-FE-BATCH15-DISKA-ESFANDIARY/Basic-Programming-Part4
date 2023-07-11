function primeX(n: number): number | string {
    if (n < 1) {
      return("Input tidak valid. n harus lebih besar dari atau sama dengan 1");
    }
  
    let BP1: number[] = [2];
    let BP2: number = 3;
  
    while (BP1.length < n) {
      let isPrime = true;
  
      for (let i = 0; i < BP1.length; i++) {
        if (BP2 % BP1[i] === 0) {
          isPrime = false;
        }
      }
  
      if (isPrime) {
        BP1.push(BP2);
      }
  
      BP2++;
    }
    return BP1[n - 1];
  }
  
  // Test Cases
  console.log(primeX(1));  // Output: 2
  console.log(primeX(5));  // Output: 11
  console.log(primeX(10));  // Output: 29
  console.log(primeX(15));  // Output: 47
  console.log(primeX(20)); // Output: 71
  console.log(primeX(25));  // Output: 97
  