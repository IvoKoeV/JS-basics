
function worldSwimmingRecord(input){
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondForMeter = Number(input[2]);

    let distanceForSwimming = distanceInMeters * timeInSecondForMeter;
    let resistance = Math.floor(distanceInMeters /15) * 12.5;

    let totalTime = distanceForSwimming +resistance;

    if(totalTime >= recordInSeconds){
        let secondsNeeded= totalTime - recordInSeconds;
        console.log(` No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`)
    }else{
        
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }


}
worldSwimmingRecord(["10464",
"1500",
"20"])
;
