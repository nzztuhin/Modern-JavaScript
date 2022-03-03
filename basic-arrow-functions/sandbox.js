//1st one
// const calArea = radius => {
//     return 3.14 * radius**2;
// };

// const area = calArea(5);
// console.log(area);

//2nd one
// const greet = () => 'Hello, World';

// const result = greet();
// console.log(result);

//3rd one

const bill = (products, tax) => {
    let total = 0;
    for(let i=0; i < products.length; i++ ){
        total += products[i] + products[i] * tax;
    }
    return total;
};
 console.log(bill([10, 15, 30], 0.2));