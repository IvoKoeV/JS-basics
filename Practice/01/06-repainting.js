function repainting(input){
   let nylonQuantity = Number(input[0]);
   let paintQuantity = Number(input[1]);
   let thinnerQuantity = Number(input[2]);
   let workHours = Number(input[3]);

   let additionalPaintQuantity = 0.10 * paintQuantity;
   let totalPaintQuantity = paintQuantity + additionalPaintQuantity;

   let totalNylonQuantity = nylonQuantity + 2;
   let totalMaterialPrice = totalPaintQuantity * 14.50 + totalNylonQuantity * 1.50 + thinnerQuantity * 5 + 0.40;

   let workersSumPerHour = 0.30 * totalMaterialPrice;
   let totalWorkersSum = workHours * workersSumPerHour;
   
   let totalSum = totalMaterialPrice + totalWorkersSum;

   console.log(totalSum);

}
repainting(['10','11','4','8']);