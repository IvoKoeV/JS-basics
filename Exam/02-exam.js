function exam(input){
    let processorsNum = Number(input[0]);
    let workersNum = Number(input[1]);
    let workDays = Number(input[2]);
    const workHoursForDay = 8;
    const timeForOneProcessor = 3;
    const priceForOneProcessor = 110.10;

    let totalWorkingHours = workersNum *workDays*workHoursForDay;
    let totalProcessorsMade = Math.floor(totalWorkingHours/timeForOneProcessor);
    
    if(totalProcessorsMade < processorsNum){
        let processorsShortage = processorsNum - totalProcessorsMade;
        let loses = processorsShortage * priceForOneProcessor;
        console.log(`Losses: -> ${loses.toFixed(2)} BGN`);
    }else{
        let processorsOver = totalProcessorsMade-processorsNum;
        let profit = processorsOver * priceForOneProcessor;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    }
}
exam(['150',
'7',
'18'])