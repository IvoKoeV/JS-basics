function onTimeForExam(input){
    let startHours = Number(input[0]);
    let startMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = startHours * 60 + startMinutes
    let studenntTime = arrivalHour * 60 + arrivalMinute
    let diff = studenntTime - examTime

    hh = Math.trunc(Math.abs(diff) / 60)
    mm = Math.abs(diff) % 60

    if (diff < -30){
        console.log("Early")
        if (hh  > 0){
            if(mm < 10){
                console.log(`${hh}:0${mm} hours before the start`)
            }
            else{
                console.log(`${hh}:${mm} hours before the start`)
            }
        }else{
            console.log(`${mm} minutes before the start`)
            
        }
    }
    else if (diff <= 0){
        console.log("On time")
        if(diff !== 0){
            if ( hh > 0){
                if(mm < 10){
                    console.log(console.log(`${hh}:0${mm} hours before the start`))
                }else{
                    console.log(console.log(`${hh}:${mm} hours before the start`))
                }
            }else{
                console.log(`${mm} minutes before the start`)
            }
        }
    }
    else{
        console.log("Late")

        if ( hh > 0){
            if(mm < 10){
                console.log(console.log(`${hh}:0${mm} hours after the start`))
            }else{
                console.log(console.log(`${hh}:${mm} hours after the start`))
            }
        }else{
            console.log(`${mm} minutes after the start`)
        }
    }

    
}
onTimeForExam((["9",
"00",
"8",
"30"])

)