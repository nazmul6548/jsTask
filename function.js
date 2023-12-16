// no perameter
const great = () => "hello";
console.log(great());

// single perameter
const squre = x=> x * x;
console.log(squre(5));

// multiple perameter
const add =(a,b) => a+b;
console.log(add(5,5));

// function body with multiple satatements
const person = name => {
    const greeting = "hello," + name + "!";
    return greeting;
}
console.log(person("alice"));
// return object

// returning object literals
const makeperson =(firstName, lastName) => (
    { first:firstName, last:lastName}
);
console.log(makeperson("john","doe"));


const jwl = (value) => {
    console.log(value);
};
jwl('nazmul islam jewel')


function scroll() {
    window.scrollTo(0,0);
}
console.log(scroll);


const text=undefined;
const defultMe ="its me default value";
const result = text ?? defultMe;
console.log(result);