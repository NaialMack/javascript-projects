// Declare and assign the variables below
let shuttleName = "Determination";
let speedMph = 17500;
let distMarsKm = 225000000;
let distMoonKm = 384400;
let mPKM = .621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof speedMph);
console.log(typeof distMarsKm);
console.log(typeof distMoonKm);
console.log(typeof mPKM);
// Calculate a space mission below
//1 

let distMarsMiles = distMarsKm * mPKM;
//2
let hoursToMars = distMarsMiles/speedMph;
//3
let daysToMars = hoursToMars/24;
// Print the results of the space mission calculations below
console.log(shuttleName, "will take", daysToMars, "days to reach Mars.");
// Calculate a trip to the moon below
let distMoonMiles = distMoonKm * mPKM;
let hoursToMoon = distMoonMiles/speedMph;
let daysToMoon = hoursToMoon/24;
// Print the results of the trip to the moon below
console.log(shuttleName, "will take", daysToMoon, "days to reach the Moon");