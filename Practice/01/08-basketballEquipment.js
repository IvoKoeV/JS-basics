function basketballEquipment(input){
  let basketballFeePerYear = Number(input[0]);

  let baskballShoes =basketballFeePerYear * 0.6;
  let basketballJersey = baskballShoes * 0.8;
  let ball=basketballJersey/4;
  let accessories =ball/5;

  let totalSum=basketballFeePerYear +baskballShoes + basketballJersey + ball + accessories;
  
  console.log(totalSum);

}
basketballEquipment(["365"]);