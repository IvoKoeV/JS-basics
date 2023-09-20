function tradeCommissions(input) {
    let city = input[0];
    let sales = Number(input[1]);

    switch (city) {
        case 'Sofia':
            if (0 <= sales && sales <= 500) {
                sales *= 0.05;
                console.log(sales.toFixed(2));
            } else if (500 < sales && sales <= 1000) {
                sales *= 0.07;
                console.log(sales.toFixed(2));
            } else if (1000 < sales && sales <= 10000) {
                sales *= 0.08;
                console.log(sales.toFixed(2));
            } else if(sales > 10000) {
                sales *= 0.12;
                console.log(sales.toFixed(2));
            }
            break;
        case 'Varna':
            if (0 <= sales && sales <= 500) {
                sales *= 0.045;
                console.log(sales.toFixed(2));
            } else if (500 < sales && sales <= 1000) {
                sales *= 0.075;
                console.log(sales.toFixed(2));
            } else if (1000 < sales && sales <= 10000) {
                sales *= 0.10;
                console.log(sales.toFixed(2));
            } else if(sales > 10000){
                sales *= 0.13;
                console.log(sales.toFixed(2));
            }
            break;
        case 'Plovdiv':
            if (0 <= sales && sales <= 500) {
                sales *= 0.055;
                console.log(sales.toFixed(2));
            } else if (500 < sales && sales <= 1000) {
                sales *= 0.08;
                console.log(sales.toFixed(2));
            } else if (1000 < sales && sales <= 10000) {
                sales *= 0.12;
                console.log(sales.toFixed(2));
            } else if(sales > 10000) {
                sales *= 0.145;
                console.log(sales.toFixed(2));
            }else{
                console.log('error')
            }
            break;
        default:
        if(city !=='Sofia'||city !=='Varna'||city !=='Plovdiv'){
            if(sales <0){
                console.log('error');
            }else{
                console.log('error');
            }
        }
    
            
    }
    
    
}

tradeCommissions(["Bourgas","1500"]);
