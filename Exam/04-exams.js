function exam(input){
    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);

    let result = "";

    for (let i = M; i >= N; i--) {
      if (i%2==0 && i %3==0) {
        if(i===S){
            break;
        }
        result += i + " ";
        
      }
    }
  
    console.log(result.trim());
}
exam(["1",
"36",
"12"])

