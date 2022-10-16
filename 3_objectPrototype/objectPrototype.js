function MyDetails(name, job, yearOfBirth){    
    this.name= name;
    this.job= job;
    this.yearOfBirth= yearOfBirth;
}
console.log(MyDetails.prototype)

function Student() {
    this.name = 'Harry';
    this.gender = 'Male';
    }
    Student.prototype.sayHi = function(){
    console.log("Hello World!");
    };
    let std = new Student();
   console.log (std);
//    console.log (std.toString());
    


let obj = {
    name: "harry",
    channel: "Code With Harry",
    address: "Mars"
}

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}
// Object.prototype.getName  don't do that it update in all prototype of object literal
Obj.prototype.setName = function (newName){
  this.name = newName;
}
// to call this in console --> obj2.setName("qww"); obj2;

let obj2 = new Obj("Rohan Das");
console.log(obj2);