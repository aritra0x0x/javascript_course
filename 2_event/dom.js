const para =document.createElement('p');
para.setAttribute("id","j");
para.classList.add("k")
// para.classList.remove("k")
para.textContent="this is created usiing dom api";
// para.innerHTML="<b>this is created usiing dom api<b>";
console.log(para.getAttribute("id"));
// document.body.removeChild(para);
document.body.appendChild(para);


const span= document.createElement('span');
span.id="span-id";
span.className="blue";
span.textContent="the span created";
span.style.background="yellow";
document.body.appendChild(span);

const hobbies =["coding","swimming","jogging"];
const list=document.createElement("ul");
// for(let hobby of hobbies) {
//     list.innerHTML += "<li class='blue'>"+ hobby +"</li>";
// }

// OR
// Array.from(hobbies).forEach(element => {
//     list.innerHTML += "<li class='blue'>"+ element +"</li>";
// });

// OR
hobbies.forEach(element => {
    list.innerHTML += "<li class='blue'>"+ element +"</li>";
});
document.body.appendChild(list);

console.log(document.getElementById("first-para").textContent);
// console.log(document.getElementsByClassName("blue").textContent);
// console.log(document.querySelector("#p"));

