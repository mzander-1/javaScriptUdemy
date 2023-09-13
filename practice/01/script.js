




const country = "Germany";
const continent = "Europe";
let population = 81
let isIsland = false;
const language = "german";
let countrySplit = population / 2;
let popFinland = 6;
let isCountryBigger = population > popFinland;
let averageCountryPop = 33
let lesserPopulation = population < averageCountryPop;
const desciption = country+" is in "+continent+", and its "+population+" million people who speak "+language;
const deutschland = `${country} is in ${continent} and its ${population} million people who speak ${language}`;


console.log(country);
console.log(continent);
console.log(population);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(countrySplit);
console.log(isCountryBigger);
console.log(desciption);
console.log(deutschland);

if(population > averageCountryPop){
    console.log("Germanys population is above average.");
} else{
    console.log("Germanys population is " + (averageCountryPop - population) + " million below average." );
}