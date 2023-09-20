function godzillaVSKong(input){
    let budget = Number(input[0]);
    let actorsCount = Number(input[1]);
    let clothesPricePerActor = Number(input[2]);

    let decorPrice = 0.10 * budget;
    let totalClothesPrice = actorsCount * clothesPricePerActor;

    if(actorsCount > 150){
        totalClothesPrice = 0.9 * totalClothesPrice;
    }

    let totalPrice = decorPrice + totalClothesPrice;

    if(totalPrice > budget){
        let moneyNeeded = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }else{
        let moneyLeft = budget - totalPrice;
        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }

}
godzillaVSKong(["20000","120","55.5"])