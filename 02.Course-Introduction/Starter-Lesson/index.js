"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
let age;
let ids = [1, 2, 3, 4, 5, 6,];
let arr = [1, 'cat', true];
arr.push(3);
console.log(arr);
// Tuple
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Dave'],
    [3, 'Rick'],
];
console.log(employee);
// Union
let pid;
pid = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
//let customerId = <number>cid;
let customerId = cid;
customerId = true;
// Functions
function addNumber(z, w) {
    return z + w;
}
console.log(addNumber(15, 16));
// Void
function log(message) {
    console.log(message);
}
log('Hello dear John!');
log(5);
const user1 = {
    id: 1,
    name: 'John',
};
console.log(user1.id);
user1.id = 2;
console.log(user1.id);
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
