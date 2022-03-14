// slowMath.add(6,2).then(num => {
//     console.log(num);
//     return slowMath.multiply(num, 2);
// }).then(num => {
//     console.log(num);
//     return slowMath.divide(num, 4);
// }).then(num => {
//     console.log(num);
//     return slowMath.subtract(num, 3);
// }).then(num => {
//     console.log(num);
//     return slowMath.add(num, 98);
// }).then(num => {
//     console.log(num);
//     return slowMath.remainder(num, 2);
// }).then(num => {
//     console.log(num);
//     return slowMath.multiply(num, 50);
// }).then(num => {
//     console.log(num);
//     return slowMath.remainder(num, 40);
// }).then(num => {
//     console.log(num);
//     return slowMath.add(num, 32);
// }).then(num => {
//     console.log(`The final num is ${num}.`);
// }).catch(err => {
//     console.log(err);
// });


const doMath = async () => {
    try {
        
        let num = await slowMath.add(6, 2);
        console.log(num);
        num = await slowMath.multiply(num, 2);
        console.log(num);
        num = await slowMath.divide(num, 4);
        console.log(num);
        num = await slowMath.subtract(num, 3);
        console.log(num);
        num = await slowMath.add(num, 98);
        console.log(num);
        num = await slowMath.remainder(num, 2);
        console.log(num);
        num = await slowMath.multiply(num, 50);
        console.log(num);
        num = await slowMath.remainder(num, 40);
        console.log(num);
        num = await slowMath.add(num, 32);
        console.log(`The final num is ${num}.`);

    } catch (err) {
        console.log(err);
    }
};

doMath();