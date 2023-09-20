function oscars(input){
    let actorName = input[0];
    let pointsInAcademy = Number(input[1]);
    let n = Number(input[2]);
    let pointsForCongrats = 1250.50;
    let judge = '';
    let pointsByJudge = 0;
    
    input.shift();
    input.shift();
    input.shift();



    for(let i=0;i<n;i++){
        judge = input.shift();
        pointsByJudge = Number(input.shift());
        pointsInAcademy = pointsInAcademy + pointsByJudge * judge.length/2;
        
        if(pointsInAcademy > pointsForCongrats){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${pointsInAcademy.toFixed(1)}!`);
            break;
        }
    }
    
    if(pointsInAcademy < pointsForCongrats){
        let pointsNeeded = pointsForCongrats - pointsInAcademy;
        console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);
        
    }



}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]
)
