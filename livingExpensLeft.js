let tuitionFee= prompt(`What's your tuition fee per Year? `)
let hourlyRate= prompt(`How much do you earn in an hour? `)
let yourStrength= prompt(`How many hours you can work when you are working full time in a day? `)

let partTime=(hourlyRate*4*5*4)*8
let fullTime=(hourlyRate*yourStrength*5*4)*4
let netWorth= partTime+fullTime

let ownCost=(netWorth-tuitionFee)/12

if (typeof ownCost === NaN) {
    document.write(`Enter valid enput`)
} else {    
    document.write(`You will have ${Math.floor(ownCost)}$ left for your living expense and other for a month.`) 
}
console.log(typeof ownCost)