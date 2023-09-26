



//Function will check whether a credit card number is valid
function validCard(card) {
    //From the rightmost digit, which is the check digit, moving left, double the value of every second digit;
    const cardArray = card.split(" ");
    let sectionFour = cardArray[3].split('').reverse();
    let sectionThree = cardArray[2].split('').reverse();
    let sectionTwo = cardArray[1].split('').reverse();
    let sectionOne = cardArray[0].split('').reverse();


};