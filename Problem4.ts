function maxSequence(n: number[]): number {
    let jmlMax: number = 0;
    let jmlAwal: number = 0;
  
    for (const num of n) {
      jmlAwal = Math.max(num, jmlAwal + num);
      jmlMax = Math.max(jmlMax, jmlAwal);
    }
  
    return jmlMax;
  }
  
  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
  console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6]));   // 7
  console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3]));   // 7
  console.log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6]));   // 8
  console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6]));    // 12
  