function numsSubsBy9(input){
    let sum = 0;
    let arr=[];    
    for(let i=Number(input[0]);i<=Number(input[1]);i++){
        if(i % 9===0){
           arr.push(i)
           sum +=i;
        }
    }
    console.log(`The sum: ${sum}`);
    for(let i = 0; i<arr.length;i++){
        console.log(arr[i]);
    }
    

}
numsSubsBy9(['100','200'])