// //Math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //random numbers

// const random = Math.random();

// console.log(random);//0-1
// console.log(Math.round(random)); //0 or1
// console.log(Math.round(random * 100)); //1-100

//primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values

const userOne = {name: 'tuhin', age: 24};
const userTwo = userOne;

console.log(userOne, userTwo);

userTwo.age = 40;

console.log(userOne, userTwo);