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
  
  
  





















// function primeX(n: number): number | string {
//     if (n < 1) {
//         return "Harus Bilangan Asli yang Lebih Besar Dari Angka 1"; 
//     }
//     let BP1: number[] = [2];
//     let BP2 = 3;
//     while (BP1.length < n) {
//       let bilPrima = true;
  
//       for (let i = 0; i < BP1.length; i++) {
//         if (BP2 % BP1[i] === 0) {
//           bilPrima = false;
//         }
//       }
//       if (bilPrima) {
//         BP1.push(BP2++ );
//       }
//       BP2 += 2;
//     }
//     return BP1[n - 1];
//   }
  
//   console.log(primeX(1))  // 2
//   console.log(primeX(5))  // 11
//   console.log(primeX(10))  // 29
//   console.log(primeX(15))  // 47
//   console.log(primeX(20)) // 71
  
  










// function primeX(n: number): number | string {
//     if (n < 1) {
//       throw new Error("Input tidak valid. n harus lebih besar dari atau sama dengan 1");
//     }
  
//     const primes: number[] = [];
//     let BP2 = 3;
  
//     for (let count = 0; count < n; currentNum++) {
//       let isPrime = true;
  
//       for (let i = 2; i <= Math.sqrt(currentNum); i++) {
//         if (currentNum % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
  
//       if (isPrime) {
//         primes.push(currentNum);
//         count++;
//       }
//     }
  
//     if (n > primes.length) {
//       return "Tidak ada bilangan prima yang ke-" + n;
//     }
  
//     return primes[n - 1];
//   }
  
//   // Test Cases
//   console.log(primeX(1));  // Output: 2
//   console.log(primeX(5));  // Output: 11
//   console.log(primeX(10));  // Output: 29
//   console.log(primeX(15));  // Output: 47
//   console.log(primeX(20)); // Output: 71
// //   console.log(primeX(0));  // Output: Input tidak valid. n harus lebih besar dari atau sama dengan 1
// //   console.log(primeX(-5));  // Output: Input tidak valid. n harus lebih besar dari atau sama dengan 1
//   console.log(primeX(25));  // Output: Tidak ada bilangan prima yang ke-25
//   console.log(primeX(4));  // Output: Tidak ada bilangan prima yang ke-25
  
















// function primeX(number: number): number | string {
//     if (number < 1) return "Harus bilangan asli yang lebih besar dari angka 1, Kata soalnya!";
  
//     let currentNum = 3;
//     let bilanganPrima: number[] = [2];

  
//     while (bilanganPrima.length < number) {
//       let isPrime = true;
  
//       for (let i = 0; i < bilanganPrima.length; i++) {
//         if (currentNum % bilanganPrima[i] === 0) {
//           isPrime = false;
//           break;
//         }
//       }
  
//       if (isPrime) bilanganPrima.push(currentNum);
  
//       currentNum += 2;
//     }
  
//     return bilanganPrima[number - 1];
//   }


//   console.log(primeX(-1))  // 2
//   console.log(primeX(4))  // 11
//   console.log(primeX(10))  // 29
//   console.log(primeX(15))  // 47
//   console.log(primeX(20)) // 71
  