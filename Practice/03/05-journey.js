function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    
    let destination = '';
    let holidayKind = '';
    let price = 0;
    
    if(budget <=100 && season === 'summer'){
      destination = "Bulgaria";
      holidayKind = 'Camp';
      price = budget * 0.30;
    }else if(budget <=100 && season === 'winter'){
        destination = 'Bulgaria'
        holidayKind = 'Hotel';
       price = budget * 0.70;
    }else if(budget <= 1000 && season ==='summer'){
        destination = 'Balkans';
        holidayKind = 'Camp';
         price = budget * 0.40;
    }else if(budget <=1000 && season ==='winter'){
        destination = 'Balkans';
        holidayKind = 'Hotel';
        price = budget * 0.80;
    }else{
        destination = 'Europe';
        holidayKind = 'Hotel';
        price = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${holidayKind} - ${price.toFixed(2)}`);
}
journey(['75','winter']);