var moment = require('moment');
const { sqrt } = require('mathjs');

console.log("Hello from JS");

var currentDateTime = moment().format('LLLL');
console.log(currentDateTime);

console.log(sqrt(-4).toString())

var name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);


// var bob = {
//   _name: "Bob",
//   _friends: [],
//   printFriends() {
//     this._friends.forEach(f =>
//       console.log(this._name + " knows " + f));
//   }
// };
// console.log(bob);