function shopping(input) {
    let peterBudget = Number(input[0]);
    let graphicsCardNum = Number(input[1]);
    let processorsNum = Number(input[2]);
    let ramNum = Number(input[3]);
  
    let graphicsCardPrice = 250;
    let graphicsCardSum = graphicsCardNum * graphicsCardPrice;
  
    let processorsPrice = 0.35 * graphicsCardSum;
    let processorsSum = processorsNum * processorsPrice;
  
    let ramPrice = 0.1 * graphicsCardSum;
    let ramSum = ramNum * ramPrice;
  
    let totalSum = graphicsCardSum + processorsSum + ramSum;
    
    if (graphicsCardNum > processorsNum) {
      totalSum *= 0.85;
    }
  
    if (totalSum <= peterBudget) {
      let moneyLeft = peterBudget - totalSum;
      console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
      let moneyNeeded = totalSum - peterBudget;
      console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
  }
  

shopping(["920.45",
"3",
"1",
"1"])



;
