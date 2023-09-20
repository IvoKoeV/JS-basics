function maxNumber(input) {
    let index = 0;
    let num = input[index];
    
    let maxNum = Number(num); 
  
    while (num !== "Stop") {
      num = Number(input[index]);
      if (num > maxNum) {
        maxNum = num;
      }
      
      index++;
      num = input[index];
    }
    
    console.log(maxNum);
  }
maxNumber(["-10",
"20",
"-30",
"Stop"])
;
