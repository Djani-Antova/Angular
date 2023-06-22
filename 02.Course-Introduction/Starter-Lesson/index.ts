// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';
let age: number;
let ids: number[] = [1, 2, 3, 4, 5, 6,];
let arr: any[] = [1, 'cat', true];
arr.push(3);
console.log(arr);

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Brad'],
    [2, 'Dave'],
    [3, 'Rick'],
]
console.log(employee);

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction1);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2);

// Objects
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John',
}

// Type Assertion
let cid: any = 1;
//let customerId = <number>cid;

let customerId = cid as boolean;
customerId = true;

// Functions
function addNumber(z: number, w: number): number {
    return z + w
}
console.log(addNumber(15, 16));

// Void

function log(message: string | number): void {  // 'void' because the function doesn't do anything
    console.log(message);    
}
log('Hello dear John!');
log(5);

//Interfaces

interface UserInterface {  // interface can't be used for primitives or unions
    id: number              // interface is used mainly for objets and functions 
    name: string
    age?: number            // '?' is for optional property
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}
console.log(user1.id);
user1.id = 2;
console.log(user1.id);

type Point = number | string;
const p1: Point = 1; 

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes













