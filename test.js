// const user = {
//   name: "John Doe",
//   age: 30,
//   address: {
//     street: "123 Main Street",
//     city: "New York",
//   },
// };

// //shallow copy

// const shallowUser = { ...user };
// console.log("shallow copy: ", user === user);

// // stringfy then parse
// const stringifyUser = JSON.parse(JSON.stringify(user));
// stringifyUser.address.city = "San Fransico";
// console.log("stringify deep copy: ", stringifyUser === user);

// //


// Object.assign
const user = { name: "John Doe", age: 30 };
const address = { street: "123 Main Street", city: "New York" };

const userWithAddress = Object.assign({}, user, {...address});
// console.log(userWithAddress);
console.log(userWithAddress.street === address.street)