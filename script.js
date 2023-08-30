//Q1: 

//1. Create an array called grades and put the following values: 56, 87, 99, 40
const grades = [56, 87, 99, 40];

//2. Add another element at the end of the array with value: 68
grades.splice(4, 1, 68);

//3. Remove the 1st element of the array
grades.slice(0,1);

//4. Change 40 to 60.
grades.shift();

//5. Create a variable called average and compute for the average of the grades array.
const avg = grades.reduce((a, b) => a + b, 0)/grades.length;

//    Tip: you can create another variable as a placeholder for the sum first.
console.log(avg)

/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
*/

let vehicle = {
    name: "Corolla",
    brand: "Toyota",
    year: 2010,
    wheelAmount: 4,
    isEnvironmentFriendly: false
}

//2. Use the for-in loop to display both the properties and values of the object.

for (const key in vehicle) {

    console.log(`${key}: ${vehicle[key]}`);
}