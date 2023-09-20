function walking(input){
    let stepGoal=10000;
    let totalSteps = 0;
    let index=0;
    let currSteps = input[index];
    index++; 

    while(currSteps !== 'Going home'){
        currSteps=Number(currSteps);

        totalSteps+=currSteps;

        if(totalSteps>=stepGoal){
            break;
        }

        currSteps=input[index];
        index++;
    }
    if(currSteps==='Going home'){
        let stepsToHome = Number(input[index]);
        totalSteps += stepsToHome;
        if(totalSteps>=stepGoal){
            console.log("Goal reached! Good job!");
            console.log(`${totalSteps-stepGoal} steps over the goal!`);
        }else{
            console.log(`${stepGoal-totalSteps} more steps to reach goal.`);

        }

    }else{
        console.log("Goal reached! Good job!");
        console.log(`${totalSteps-stepGoal} steps over the goal!`);
    }

}
walking(["1000",
"1500",
"2000",
"6500"]);
