function characterSequence(input) {
    let sum = 0;
    let word = input[0];
  
    for (let index = 0; index < word.length; index++) {
      let currentSymbol = word[index].toLowerCase();
      switch (currentSymbol) {
        case "a":
          sum = sum + 1;
          break;
        case "e":
          sum = sum + 2;
          break;
        case "i":
          sum = sum + 3;
          break;
        case "o":
          sum = sum + 4;
          break;
        case "u":
          sum = sum + 5;
          break;
      }
    }
    console.log(sum);
  
    
  }
characterSequence(["hello"]);