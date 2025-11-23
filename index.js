//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work


// Conversion helper functions
function toCelsius(tempF) {
  return (tempF - 32) * 5 / 9;
}

function toFahrenheit(tempC) {
  return (tempC * 9 / 5) + 32;
}

// Define the 30 days of temperature data
let day1TempF = 32;
let day2TempC = 25;
let day3TempF = 70;
let day4TempC = 18;
// ... continue until day30TempC = 29;

// Initialize totals
let tot_temperature_in_celsius = 0;
let tot_temperature_in_fahrenheit = 0;

// Add each day’s temperature to totals (using conversions)
// ... code from earlier to sum all 30 days

// Calculate averages
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

// Debug logs (optional)
console.log("Total Celsius:", tot_temperature_in_celsius);
console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Average Celsius:", avg_temperature_in_celsius);
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit);

// Export variables for tests
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};
