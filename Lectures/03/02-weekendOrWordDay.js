function weekendOrWorkday(input){
    let weekendOrWorkday = input[0];

    switch(weekendOrWorkday){
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            console.log('Working day');
            break;
        case 'Saturday':
        case 'Sunday':
            console.log('Weekend');
            break;
            default:
                console.log('Error');

    }

}
weekendOrWorkday(['April'])