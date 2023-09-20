function minNumber(input){
    let index = 0;
    let num = input[index];
    
    let minNum = Number(num); 
  
    while (num !== "Stop") {
      num = Number(input[index]);
      if (num < minNum) {
        minNum = num;
      }
      
      index++;
      num = input[index];
    }
    
    console.log(minNum);

}
minNumber(["-10",
"20",
"-30",
"Stop"])
;
