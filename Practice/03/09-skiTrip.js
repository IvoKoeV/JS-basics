function skiTrip(input){
    let days = Number(input[0]);
    let placeType = input[1];
    let feedback = input[2];

    let totalPrice = 0;
    let nights = days - 1;

    switch(placeType){
        case 'room for one person':
          totalPrice = nights * 18;  
          break;
        case 'apartment':
            totalPrice = nights * 25;

            if(nights <10 ){
                totalPrice *= 0.70;
            }else if(nights <=15){
                totalPrice *= 0.65;
            }else{
                totalPrice *= 0.50;
            }
            break;
        case 'president apartment':
            totalPrice = nights * 35;
            if(nights <10 ){
                totalPrice *= 0.90;
            }else if(nights <=15){
                totalPrice *= 0.85;
            }else{
                totalPrice *= 0.80;
            }
            break;
        
    }

    if(feedback === 'positive'){
        totalPrice *= 1.25;
    }else{
        totalPrice *= 0.90;
    }
    console.log(totalPrice.toFixed(2));

}
skiTrip(['2','apartment','positive']);