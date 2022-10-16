const students = [
    {name: "harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]

function enrollStudent(student){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
    }, 2000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 1000);
}
 let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent);  //suny not passed as student pass after 1ms
getStudents();

// ---------------------After callback(can be syncronous or asyncro)-----

// function enrollStudent(student, callback){
//     setTimeout(function() {
//         students.push(student);
//         console.log("Student has been enrolled");
//         callback();
//     }, 2000);
// }

// function getStudents(){
//     setTimeout(function() {
//         let str = "";
//         students.forEach(function(student){
//             str += `<li> ${student.name}</li>`
//         });
//         document.getElementById('students').innerHTML = str;
//         console.log("Students have been fetched");
//     }, 1000);
// }

// let newStudent = {name:"Sunny", subject:"Python"}
// enrollStudent(newStudent, getStudents);

//------( no need of this we put in callback getStudents();)
