function sumOfNum(input){
    let goalNum = Number(input[0]);
    let sumNum = 0;
    let index = 1;
    let currentNum = Number(input[index]);
    
    

    while(sumNum<goalNum){
     
      sumNum +=currentNum;
      index++;
      currentNum=Number(input[index]);  

    }
    console.log(sumNum);

}
sumOfNum(["100",
"10",
"20",
"30",
"40"]);
