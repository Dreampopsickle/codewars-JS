function to24hourtime(hour, minute, period) {
    let amToPm24 = (period === 'pm') ? hour + 12 : hour;//translates 12 hour format to 24 hour format
    let formatHour = (amToPm24 < 10) ? `${'0' + amToPm24}`: `${amToPm24}`;//adds zero string if hour is less than 10
    let clockMinutes = (minute < 10) ? `${'0' + minute}` : `${minute}`;//adds zero string if minute is less than 10
    let timeDisplay24Hour; //displays time in 24 hour format

    if (Number.isInteger(hour) && (hour >= 1 || hour <= 12) && Number.isInteger(minute) && (minute >= 0 || minute <= 59 )) { // checks hour/minutes are integers and between clock time inclusively
        if (hour === 12 && period === "am") {//midnight time
            timeDisplay24Hour = `${'00'}${clockMinutes}`;
        } else if (hour === 12 && period === "pm") { // noontime
          timeDisplay24Hour = `${'12'}${clockMinutes}`;
        } else {
            timeDisplay24Hour = `${formatHour}${clockMinutes}`; // every other time
        }
    };
    return timeDisplay24Hour;//dispalys 24 hour clock
}
