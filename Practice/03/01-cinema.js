function cinema(input){
    let filmType = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let profit = 0;
    
    let ticketsCount = rows * cols;

    if(filmType === 'Premiere'){
        profit = ticketsCount * 12;

    }else if(filmType === 'Normal'){
        profit = ticketsCount * 7.5;
    }else if(filmType === 'Discount'){
        profit = ticketsCount * 5;
    }
    console.log(`${profit.toFixed(2)} leva`);

}
cinema(['Premiere','10','12']);