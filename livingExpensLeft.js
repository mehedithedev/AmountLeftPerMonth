let tuitionFee= prompt(`What's your tuition fee per Year? `)
let hourlyRate= prompt(`How much do you earn in an hour? `)
let yourStrength= prompt(`How many hours you can work when you are working full time in a day? `)
let familySupport= prompt(`How much money you can expect from during your studies for a year?`)

let partTime=(hourlyRate*4*5*4)*8;
let fullTime=(hourlyRate*yourStrength*5*4)*4;
let netWorth= partTime+fullTime+familySupport;

let ownCost=(netWorth-tuitionFee)/12;

if (typeof ownCost === NaN) {
    document.write(`Enter valid enput`)
} else {    
    document.write(`There will left approximately ${Math.floor(ownCost)}$ for your living expense and others for a month.`) 
}
console.log(typeof ownCost)
