function suppliesForSchool(input){
    let pencilsPackages = Number(input[0]);
    let markersPackages = Number(input[1]);
    let cleanerLiters = Number(input[2]);
    let discountPercentage = Number(input[3]);

    let pencilsPackagesPrice= pencilsPackages * 5.80;
    let markersPackagesPrice = markersPackages *7.20;
    let cleanerPrice = cleanerLiters * 1.20;
    let totalPrice = pencilsPackagesPrice + markersPackagesPrice + cleanerPrice;
    let priceWithDiscount = totalPrice - (totalPrice * 0.25);

    console.log(priceWithDiscount);


}
suppliesForSchool(["2 ","3 ","4 ","25 "]);