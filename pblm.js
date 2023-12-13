// function convertTocelandkel(temp, unit) {
//   if (unit === "celsius") {
//     let fahrenheit = (temp * 9) / 5 + 32;
//     let celsius = ((fahrenheit - 32) * 5) / 9;
//     const kelvin = celsius + 273.15;
//     return `${fahrenheit}-fahrenheit,,${celsius}-celsius,,${kelvin}-kelvin`;
//   } else if (unit === "fahrenheit") {
//     let celsius = ((temp - 32) * 5) / 9;
//     let fahrenheit = (celsius * 9) / 5 + 32;
//     let kelvin = celsius + 273.15;
//     return `${celsius}celsius!
//         ${fahrenheit}fahrenheit!
//         ${kelvin}kelvin!`;
//   } else if (unit === "kelvin") {
//     // modify//
//     let kelvin = temp;
//     let celsius = kelvin - 273.15;
//     let fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
//     return `${kelvin} kelvin${celsius} celsius${fahrenheit} fahrenheit`;
//   } else {
//     return "invalid!";
//   }
// }
// console.log(convertTocelandkel(100, "celsius"));


function multiple(param) {
  for (let i = 0;i <= 10;i++) {
    console.log(`13*${i}=${13*i}`);;
    
  }
}
multiple()