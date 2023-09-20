function fishTank(input){
    let lenght =Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percent = Number(input[3]);

    let aquariumVolume = lenght * width * hight;
    let volumeInLiters = aquariumVolume*0.001;
    let occupiedSpace =0.17;
    
    let requaredLiters = volumeInLiters*(1-0.17);

    console.log(requaredLiters);

    

}
fishTank(["85 ","75 ","47 ","17 "]);

