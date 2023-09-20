function exam(input) {
  let sweets = input[0];
  let numOfOrders = Number(input[1]);
  let dayOfDecember = Number(input[2]);
  let priceOfOneCake = 0;
  let priceOfCakes = 0;
  let priceOfOneSouffle = 0;
  let priceOfSouffles = 0;
  let priceOfOneBaklava = 0;
  let priceOfBaklavas = 0;

  switch (sweets) {
    case "Cake":
      if (dayOfDecember <= 15) {
        priceOfOneCake = 24;
        priceOfCakes = numOfOrders * priceOfOneCake;
        if (100 < priceOfCakes && priceOfCakes <= 200 && dayOfDecember <= 22) {
          priceOfCakes = priceOfCakes * 0.85;
          priceOfCakes = priceOfCakes * 0.9;
        } else if (priceOfCakes > 200 && dayOfDecember <= 22) {
          priceOfCakes = priceOfCakes * 0.75;
          priceOfCakes = priceOfCakes * 0.9;
        }

        console.log(priceOfCakes.toFixed(2));
      } else if (dayOfDecember > 15 && dayOfDecember <= 31) {
        priceOfOneCake = 28.7;
        priceOfCakes = numOfOrders * priceOfOneCake;
        if (100 < priceOfCakes && priceOfCakes <= 200 && dayOfDecember <= 22) {
          priceOfCakes = priceOfCakes * 0.85;
        } else if (priceOfCakes > 200 && dayOfDecember <= 22) {
          priceOfCakes = priceOfCakes * 0.75;
        }

        console.log(priceOfCakes.toFixed(2));
      }
      break;
    case "Souffle":
      if (dayOfDecember <= 15) {
        priceOfOneSouffle = 6.66;
        priceOfSouffles = numOfOrders * priceOfOneSouffle;
        if (
          100 < priceOfSouffles &&
          priceOfSouffles <= 200 &&
          dayOfDecember <= 22
        ) {
          priceOfSouffles = priceOfSouffles * 0.85;
          priceOfSouffles = priceOfSouffles * 0.9;
        } else if (priceOfSouffles > 200 && dayOfDecember <= 22) {
          priceOfSouffles = priceOfSouffles * 0.75;
          priceOfSouffles = priceOfSouffles * 0.9;
        }

        console.log(priceOfSouffles.toFixed(2));
      } else if (dayOfDecember > 15 && dayOfDecember <= 31) {
        priceOfOneSouffle = 9.8;
        priceOfSouffles = numOfOrders * priceOfOneSouffle;
        if (
          100 < priceOfSouffles &&
          priceOfSouffles <= 200 &&
          dayOfDecember <= 22
        ) {
          priceOfSouffles = priceOfSouffles * 0.85;
        } else if (priceOfSouffles > 200 && dayOfDecember <= 22) {
          priceOfSouffles = priceOfSouffles * 0.75;
        }

        console.log(priceOfSouffles.toFixed(2));
      }
      break;
    case "Baklava":
      if (dayOfDecember <= 15) {
        priceOfOneBaklava = 12.6;
        priceOfBaklavas = numOfOrders * priceOfOneBaklava;
        if (
          100 < priceOfBaklavas &&
          priceOfBaklavas <= 200 &&
          dayOfDecember <= 22
        ) {
          priceOfBaklavas = priceOfBaklavas * 0.85;
          priceOfBaklavas = priceOfBaklavas * 0.9;
        } else if (priceOfBaklavas > 200 && dayOfDecember <= 22) {
          priceOfBaklavas = priceOfBaklavas * 0.75;
          priceOfBaklavas = priceOfBaklavas * 0.9;
        }

        console.log(priceOfBaklavas.toFixed(2));
      } else if (dayOfDecember > 15 && dayOfDecember <= 31) {
        priceOfOneBaklava = 16.98;
        priceOfBaklavas = numOfOrders * priceOfOneBaklava;
        if (
          100 < priceOfBaklavas &&
          priceOfBaklavas <= 200 &&
          dayOfDecember <= 22
        ) {
          priceOfBaklavas = priceOfBaklavas * 0.85;
        } else if (priceOfBaklavas > 200 && dayOfDecember <= 22) {
          priceOfBaklavas = priceOfBaklavas * 0.75;
        }

        console.log(priceOfBaklavas.toFixed(2));
      }
      break;
    default:
      console.log("Invalid input");
  }
}
exam(["Baklava",
"50",
"1"])
;
