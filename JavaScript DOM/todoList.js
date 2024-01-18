// veri = window.document;
// veri = window.document.head;
// veri = window.document.body;
// veri = window.document.URL;
// veri = window.document.domain;
// veri = window.document.images;
// veri = window.document.forms;
// veri = window.document.forms[0].id;
// veri = window.document.forms[0].method;
// veri = window.document.forms[0].action;
// veri = window.document.scripts;
// veri = window.document.scripts[2];
//---------------------------------------------------------

// Elementlerin Seçilmesi

// ------Tek Element Seçimi------
//document.getElementById() Method

let veri;
veri = document.getElementById("header");
veri = document.getElementById("header").id;
veri = document.getElementById("header").className;

veri = document.getElementById("header");
// veri = veri.id;
// veri = veri.className; (böyle daha pratik)

veri.style.color = "blue";
veri.style.fontSize = "50px";
veri.style.fontWeight = "bold";
// veri.style.display = "none"; (Todo List yazısı görünmez olur.)


document.getElementById("header").innerText = "To do List Two"; // text is change.

document.getElementById("header").innerHTML = "<b> To do List Three </b>"; //text in html code.
console.log(veri);

//document.querySelector() Method

console.log(document.querySelector("#header")); //id
console.log(document.querySelector(".card-header")); //class
console.log(document.querySelector("div")); // etiket

document.querySelector("li").style.color = "yellow";
document.querySelector("li:last-child").style.color = "green";
document.querySelector("li:nth-child(2)").style.color = "red";

document.querySelector("li").className = "list-group-item list-group-item-danger"; // className değiştirerek özellik yeniledik.
document.querySelector("li").classList.add = "active"; // class add
 