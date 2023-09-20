function exam(input) {
    let priceForOnePage = Number(input[0]);
    let priceForOneCover = Number(input[1]);
    let discountPercentage = Number(input[2]);
    let priceForDesigner = Number(input[3]);
    let percentageForTotalPrice = Number(input[4]);
    const bookPages = 899;
    
    let startingPrice = priceForOnePage * bookPages + priceForOneCover * 2;
    let priceWithDiscount=startingPrice-(discountPercentage / 100)*startingPrice;
    let designerPaycut = priceWithDiscount + priceForDesigner;
    let money = designerPaycut - (percentageForTotalPrice/100)* designerPaycut;

    console.log(`Avtonom should pay ${money.toFixed(2)} BGN.`);
}
exam(["0.01",
    "1",
    "10",
    "20",
    "20"])
