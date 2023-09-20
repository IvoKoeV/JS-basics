function graduation(input){
    let studentName = input[0];
    let grade = 1;
    let sumGrade = 0;
    let currentGrade = Number(input[grade]);
    let excluded = 0;

    while(grade <=12){
        if(currentGrade<4){
            excluded++;
        }
        if(excluded >1){
            console.log(`${studentName} has been excluded at ${grade -1} grade`);
            break;
        }

        sumGrade += currentGrade;
        grade++;
        currentGrade = Number(input[grade]);
    }
    let avrGrade = sumGrade / 12;
    if(excluded < 2){
        console.log(`${studentName} graduated. Average grade: ${avrGrade.toFixed(2)}`);
    }


}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);
