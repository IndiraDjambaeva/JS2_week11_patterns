// //ex1
// console.log(john);
// logUser(john);


// //ex2
// import { john } from "./user.js";
// console.log(john);


// //ex3
// import john from "./user.js";
// console.log(john);


// //ex4
// import { john } from "./user.js";
// import logUser from "./user.js";
// logUser(john);


//ex5
import logUser, { john, pete, bob } from "./user.js";
logUser(john);
logUser(pete);
logUser(bob);

