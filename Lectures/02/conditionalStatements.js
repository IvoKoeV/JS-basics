function conditionalStatements(input){
 let number = Number(input[0]);

 if(number <=10){
    console.log('slow');
 }else if(10< number && number <=50){
    console.log('average');
}else if( 50 < number && number <= 150){
    console.log('fast')
 }else if(150 < number && number <=1000){
    console.log('ultra fast');
 }else{
    console.log('extremely fast');
 }


}
conditionalStatements(["10"]);