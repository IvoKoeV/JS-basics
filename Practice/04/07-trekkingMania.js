function trekkingMania(input) {
 
    let numOfGrups = Number(input[0]);
 
    let grup1 = 0;
    let grup2 = 0;
    let grup3 = 0;
    let grup4 = 0;
    let grup5 = 0;
 
    let total = 0;
 
    for (let i = 1; i <= numOfGrups; i++) {
        let curCount = Number(input[i]);
 
        total = total + curCount;
 
 
 
        if (curCount <= 5) {
            grup1 += curCount;
 
        } else if (curCount <= 12) {
            grup2 += curCount;
 
 
        } else if (curCount <= 25) {
            grup3 += curCount;
 
 
        } else if (curCount <= 40) {
            grup4 += curCount  ;
 
 
        } else if (curCount >= 41) {
            grup5 += curCount;
 
        }
 
    }
 
 
 
    let p1 = (grup1 / total) * 100;
    let p2 = (grup2 / total) * 100;
    let p3 = (grup3 / total) * 100;
    let p4 = (grup4 / total) * 100;
    let p5 = (grup5 / total) * 100;
 
    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
 
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
;
