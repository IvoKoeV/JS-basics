function exams(input) {
    let adultsCount = 0;
    let kidsCount = 0;
    let toysPrice = 0;
    let sweatersPrice = 0;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "Christmas") {
        break;
      }
  
      let age = Number(input[i]);
  
      if (age <= 16) {
        kidsCount++;
        toysPrice += 5;
      } else {
        adultsCount++;
        sweatersPrice += 15;
      }
    }
  
    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${kidsCount}`);
    console.log(`Money for toys: ${toysPrice}`);
    console.log(`Money for sweaters: ${sweatersPrice}`);
  }
  
exams(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"])
