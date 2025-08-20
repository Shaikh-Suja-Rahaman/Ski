let num = [1,2,4, "hello"]

// let num2: number[] = [2,2,1, "123"] //throws an error
let test: [string, number] = ["helloi", 22]

//enums
enum UserRoles {
  ADMIN = "admin",
  GUEST = "guest",
  SUPER_ADMIN = "super_admin"
}
enum StatusCodes {
  ABANDONED = "bruh",
}
// var UserRoles;
// (function (UserRoles) {
//     UserRoles["ADMIN"] = "admin";
//     UserRoles["GUEST"] = "guest";
//     UserRoles["SUPER_ADMIN"] = "super_admin";
// })(UserRoles || (UserRoles = {}));
// console.log(UserRoles.SUPER_ADMIN); //typescript converts that code ot js code


console.log(UserRoles.SUPER_ADMIN) //helps me do autocomplete
console.log(StatusCodes.ABANDONED);

let a: number; //i am gonna set type for a variable
a = 12 //noice

let b: unknown;
b = 12;
b = "hello"

if(typeof b == "string"){
  b.toUpperCase(); //wont work without checking if b=="string"
}

// function abcd(): void{ //colon and return type
//   console.log("hgello bhorld");
// }
// abcd();

let c: number | string;
c = 12
c = "hello"
// c = null  //error here

let k = "12" //inference, where i dont do anything and the code infers what the variable type is

// let a1 = b

//interfaces type

interface User { //I want the input object to have the following things, but i cant do that with
  //normal objects, thus that is when i start using interfaces
  name: string,
  email: string,
  password: number,
  gender?: string, //this is optional
}

// const obj = { //this is how my objects looks like. however i want typescript to be strict with
//   //how the info is handled, thus my USER interface basically is the face of my object
//   name : "harsh",
//   email : "harsh@gmail.com",
//   password : "1234",
// }

function getDataOfUser(obj: User){ //typescript wants to know what type of parameter is being entered
  console.log(obj.name);
  console.log(obj.gender); //gives undefined

}

getDataOfUser({name: "suja", email: "suja@123", password: 20});


interface Admin extends User {
  admin: boolean;
} //since admin extends users that is why i get all th efeatures of user and now i also need to add another
//property, that is admin : of type boolean

function aaa(obj: Admin){
  console.log(obj.admin);

}
aaa({name: "suja", email: "suja@123", password: 20, admin: true})

type sankhya = number | string | null;

let b1: sankhya; //now instead of defining it every single time, i can simply call sankhya as the type, will work for function argument as well

//CLASSES AND OBJECTS

class Device {
  name  = "lg";
  price  = "12000";
  category = "digital"
}

let d1 = new Device();
let d2 = new Device();

// d1.name = "hello my name is suja";
console.log(d1);


//constructor, ek aisi machine jo ki produce kar rahi hai final consumable product
class BottleMaker {
  age = 0;
  // name: string;

  constructor(public name: string, public price: number){ //public is important
  }
}

let b4 = new BottleMaker("Milton", 12000); //constructor works first and i have to send the parameters
console.log(b4);


class Music {
  constructor(public name: string, public artist: string, public thumbnail: string = "somethumbnail.jpg", public length: number){
    //writing it like this is saving me time and key presses
    //my thumbnail becomes my optional field
    if(!thumbnail){ //blank string is my false
      this.thumbnail = "something.jpg";
    }
  }
}
//i could've written like this
let m1 = new Music("hello", "adele", "", 23);
console.log((m1));


class Music2 {
  public name: string;
  public artist: string;
  constructor(name: string, artist: string){
    this.name = name;
    this.artist = artist;
  }
}

let m2 = new Music2("Good Song", "AR Rahaman");
console.log(typeof m2.name);


class ABCD{
  name = "Harsh"
  changeName(){ //class ke andar wale functions ko methods bolte hai

  }
}


//somehow even without creating an object, we get info of classes, like math.random() without creating a new instance
//here's where static keyword comes in

class Shery{
  static version = 1.0;

  static getRandomNumber() {
    return Math.random();
  }

}

let sh1 = new Shery();
console.log(sh1+" static members are not included in my instances");
// console.log(Shery.getRandomNumber());
//static makes it so that i can use the methods and properties without creating a new object


//ABSTRACT CLASSES

class Payment{ //base properties, essentials, we dont create objects from this class
  constructor(protected amount: number, protected account: number){}
  isPaymentValid(amount: number){
    return this.amount > 0;
  }
}

class Cheque extends Payment{ //my cheque will have all the properties of payment, that is acc number and account

}

//function types

//i want to pass a callback to a function, this is how i can do it
function cbFunction(name: string, cb: (value:string)=>void) { //represent it as a simple function which takes inpout parameters and return void
  cb("bruh mama"); //this is my callback
}

cbFunction("suja", (value:string)=>{ //calling the function and passing name and call back
  console.log(value);
})


//rest/spread operator

function sum(...arr: number[]){ //rest operator
  console.log(arr);

}

sum(1,2,3,4,5,6,7,9); //...arr just makes it so that we dont have to retype the arguements, everything gets stored inside of an array

let arr2 = [3,4,5];
arr2 = [...arr2, 6] //spread operator works here too
console.log(arr2);

let obj1 = {1:"hello", 2:"world"};
let obj2 = {...obj1, c:3}; //spread operator works here too :)

console.log(obj2);


//generics - functions ko use karte wakt bata sakte hai ki function arguements ko kis type se treat kare

function abcd<T>(a: T):void{
  // a.length();
};

abcd<string>("hello"); //a ka Type string hai, i can set the info about the types on the fly
//even while calling i dont need to write the <T> during function call. typescript is able to infer it

interface Halua <T>{
  name: string;
  age: number;
  key: T;
}

function testFunction001(obj: Halua<String> | string){
  // obj.key;
  console.log(123);
  
}

testFunction001({name: "foo", age: 25, key: "bruh"})

function aboutStrings<T>(a: T, b:T): T {
 //return "hey"; //this shows error bcoz anything inside of quotes is actually a string litereal, not exactly a string
  //yeahs, its wierd but it is what it is, you could return a/b, and it out work
  //you can bypass this by :
  return "hey" as T; //this works as so does "return <T>"hey" //this is type assertion
}

aboutStrings<String>("hey", "hello");
