function accountBalance(input){
  let index = 0 ;
  let currentElement = input[index];
  let totalMoney = 0;
  
  while(currentElement !=='NoMoreMoney'){
    let elementAsNumber=Number(currentElement);
    if(elementAsNumber <0){
      console.log(`Invalid operation!`)
      break;
    } 
    totalMoney += elementAsNumber;
    console.log(`Increase: ${elementAsNumber.toFixed(2)}`);   
    
    currentElement = input[++index];
  }
  console.log(`Total: ${totalMoney.toFixed(2)}`);

}
accountBalance(["120",
"45.55",
"-150"])

