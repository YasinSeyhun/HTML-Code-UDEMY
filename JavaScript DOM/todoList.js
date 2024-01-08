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
//document.getElementById() Metodu

let veri;
veri = document.getElementById("header");
veri = document.getElementById("header").id;
veri = document.getElementById("header").className;

veri = document.getElementById("header");
// veri = veri.id;
//veri = veri.className; (böyle daha pratik)
console.log(veri);
