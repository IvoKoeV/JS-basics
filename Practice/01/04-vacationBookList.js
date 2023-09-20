function vacationBookList(input){
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
  
    let totalTimeOfReading = numberOfPages / pagesPerHour;
    let hoursPerDay = totalTimeOfReading / days;
     
    console.log(hoursPerDay);
  }
  
  vacationBookList(['212', '20', '2']);