"use strict";
const userDetails = (id, user) => {
    console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
};
userDetails(1, { name: "Ariful Islam", age: 27 });
sayHello({ name: "Abdullah Al Zarif", age: 2.3 });
