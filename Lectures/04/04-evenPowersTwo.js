function evenPowersTwo(input){
    let n = Number(input[0]);

    for (let i = 0; i <= n; i++) {
        let power = 2 * i;
        if (power <= n) {
          console.log(Math.pow(2, power));
        }
      }
}
evenPowersTwo(['5'])