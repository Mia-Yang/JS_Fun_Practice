//1. Write a function identity that takes an argument and returns that argument
function identity(arg) {
    return arg;
}

//2. Write a binary function addb that takes two numbers and returns their sum
function addb(x, y) {
    return x + y;
}

//3. Write a binary function subb that takes two numbers and returns their difference
function subb(x, y) {
    return x - y;
}

//4. Write a binary function mulb that takes two numbers and returns their product
function mulb(x, y) {
    return x * y;
}

//5. Write a binary function minb that takes two numbers and returns the smaller one
function minb(x, y) {
    return x < y ? x : y;
}

//6. Write a binary function maxb that takes two numbers and returns the larger one
function maxb(x, y) {
    return x > y ? x : y;
}

// 7. Write a function add that is generalized for any amount of arguments
function add(...nums) {
    return nums.reduce((a, b) => a + b);
}

// 8.
function sub(...nums) {
    return nums.reduce((a, b) => a - b);
}

// 9.
function mul(...nums) {
    return nums.reduce((a, b) => a * b);
}

// 10.
function min(...nums) {
    return Math.min(...nums);
}

// 11.
function max(...nums) {
    return Math.max(...nums);
}

// 12.
function addRecuse(...nums) {
    if (nums.length === 1) return nums[0]
    return nums.pop() + addRecurse(...nums);
}

// 13.
function mulRecurse(...nums) {

}

// 14.
function minRecurse(...nums) {

}

// 15.
function maxRecurse(...nums) {

}

module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    sub,
    mul,
    min,
    max,
    addRecuse,
    mulRecurse,



}