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

interface PersonInterface {  
    id: number               
    name: string 
    register(): string       
}



// Classes

class Person implements PersonInterface{                          // classes are used to create object
    id: number                          // in this example this property is public, and we can acces it outside the class
    name: string                        // in this example this property is public, and we can acces it outside the class
                                        //private id: number  if we want it private 

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, "Mike Jordan")
console.log(brad, mike);
brad.id = 5
console.log(brad, mike);
console.log(brad.register());


// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}
const emp = new Employee(3, 'George', 'manager')
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['brad', 'mike', 'george'])

numArray.push(12)














