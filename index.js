// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
function namta(math) {
    for (let i = 0; i <= 10; i++) {
        console.log(`13 x ${i} = ${13 * i}`);
    }
}
namta();

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
function math(input) {
    return input.toLowerCase();
}
let any = math;

// console.log(any("NAZMUL"));

// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

function name(firstName,lastName) {
    var fullName = firstName + " " +lastName;
    return fullName;
}
var first="hablu";
var last ="kanta";
var fullNam=name(first,last);
// console.log(fullNam);

// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  
function square(number) {
    let calculate = number * number;
    return calculate;
}
const numSquare = 7;
const result =square(numSquare);
// console.log(result);

// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
// const pizza = {
//  toppings: ['cheese', 'sauce', 'pepperoni'],
//  crust: 'deep dish',
//  serves: 2
// }
// এবং pepperoni প্রিন্ট করবা।

const pizza = {
    toppings:['cheese','sauce','pepperoni'],
    crust:'deep dish',
    serves: 2
}
// console.log(pizza.toppings[2]);

// ৬) Function for Celsius to fahrenheit conversion. and another function for Fahrenheit to celsius conversion. (search the math formula for conversion)
function convertToFarenheit(celsius) {
    let fahrenheit =celsius*(9/5) + 32;
    return fahrenheit;
}
let celsius = 32;
let fahrenheitTemp = convertToFarenheit(celsius);
// console.log(fahrenheitTemp);

function convertToCelsius(fahrenheit) {
    const celsius=(fahrenheit-32) * 5/9;
    return celsius;
}
const fahrenheit = 400;
const celsiusTemp = convertToCelsius(fahrenheit);
// console.log(celsiusTemp);


// ৭) Function for Simple interest calculation. (I = Pnr)
// we are know that
// i=pnr
function Interest(params) {
const r = 7/100;
const i = p*n*r;
return i;
}
const p=5000;
const n=5;
const r=7;
const simpleInterest =Interest(p,n,r)
var result =simpleInterest.toFixed(0);
// console.log(result);
