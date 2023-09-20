function depositCalculator(input){
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestPercent = Number(input[2]);
    
    let annualInterestDecimal= annualInterestPercent/100;
    let finalSum = depositedSum  + depositPeriod * ((depositedSum*annualInterestDecimal)/12);
    
    console.log(finalSum);
}
depositCalculator(['2350','6','7']);