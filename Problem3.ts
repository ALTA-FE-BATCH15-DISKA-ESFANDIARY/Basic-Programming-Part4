function primaSegiEmpat(wide: number, high: number, start: number) {
    function BilPrima(num: number): boolean {
      if (num === 2) return true;
      if (num < 2 ) return false;
  
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    let Persegi: number[][] = [];
    let Prima: number[] = [];
    let num: number = start;
  
    for (let i = 0; i < high; i++) {
      let row: number[] = [];
      for (let j = 0; j < wide; j++) {
        while (!BilPrima(num)) {
          num++;
        }
        row.push(num);
        Prima.push(num);
        num++;
      }
      Persegi.push(row);
    }
  
    let sum: number = Prima.reduce((a, b) => a + b, 0);
    Persegi.push([sum]);
  
    for (let i = 0; i < Persegi.length; i++) {
      console.log(Persegi[i].join(' '));
    }
  }
  
  primaSegiEmpat(2, 3, 13);
  primaSegiEmpat(5, 2, 1);
  