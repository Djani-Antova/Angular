
let num: number = 5;
let str: string = '';
let list: Array<number> = [1,2,3];
let color: string = 'red';
color = 'blur'

type User = {
  name: string;
  age: Number;

};

const peshoUser = {
  name: "Pesho",
  age: 21,

} as User;

interface AnotherUser {
  firstName: string;
  id: Number;  
}

class AnotherUserClass implements AnotherUser {
    firstName: string;
    id: Number;
}

const anotherUserList: AnotherUser[] = [
    { firstName: "Ivan", id: 1 },
    { firstName: "Mitko", id: 2 },
    { firstName: "Maria", id: 3 },
  ] as AnotherUser[];

anotherUserList.forEach(({firstName, id}) => {   
    console.log(`${id}: ${firstName}`);
    
})

