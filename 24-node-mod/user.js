//ex1
 const john = {
  name: "John",
  age: 20
};

 const pete = {
  name: "Pete",
  age: 20
};

 const bob = {
  name: "Bob",
  age: 20
};

function logUser (user) {
  console.log(`My name is ${user.name}. I am ${user.age}`)
}

module.exports = {
  john: john,
  pete: pete,
  bob: bob,
  logUser: logUser,
}