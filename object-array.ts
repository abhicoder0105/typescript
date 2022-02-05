// const person :{
//   name: string,
//   age: number,
//   hobbies:string[],
//   role: [number, string];
// } = {
//   name: "ABhishek",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role:[2, "monu" ]
// }

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "ABhishek",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
  }
  

let favouriteActivities: string[];


let otherActivities: any[];
favouriteActivities = ['sports'];

// console.log(person.name);

// for(const hobby of person.hobbies) {
//   console.log(hobby);
// }

