function exams(input) {
    let locationsCount = Number(input.shift());
  
    for (let i = 0; i < locationsCount; i++) {
      let expectedAverage = Number(input.shift());
      let days = Number(input.shift());
      let totalGold = 0;
  
      for (let j = 0; j < days; j++) {
        let goldPerDay = Number(input.shift());
        totalGold += goldPerDay;
      }
  
      let averageGold = totalGold / days;
  
      if (averageGold >= expectedAverage) {
        console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);
      } else {
        let neededGold = (expectedAverage - averageGold).toFixed(2);
        console.log(`You need ${neededGold} gold.`);
      }
    }
  }
  
exams(["1",
"5",
"3",
"10",
"1",
"3"])

