/* NUMBERS */

let veri;

/* 

veri = Number("5");
veri = parseInt("5");
veri = parseFloat("5.5");
veri = parseInt("5c"); //sadece 5 çalışır
veri = parseInt("c5"); // NuN hatası verir
veri = isNaN("c5"); // true değeri verir

*/

var sayi = 15.240923022423423;
veri = sayi.toPrecision(5); /*  kaç tane basamak istersek  */
veri = sayi.toFixed(3); /* virgülden sonra kaç tane basamak istersek */
veri = Math.PI;
veri = Math.round(3.5);/* yuvarlar */
veri = Math.ceil(3.2); /* hep yukarı yuvarlar */
veri = Math.floor(8.9); /* hep aşağı yuvarlar */

veri = Math.pow(2,3); /* üs alma */
veri = Math.sqrt(81); /* kök alma */
veri = Math.abs(-50); /* pozitife çevirir */
veri = Math.min(1,3,4,5,6,3,2,4,6,9);
veri = Math.max(12,3243,0,4242,123,42321,1,4,35,46,);
veri = Math.random();
veri = Math.random()*10; /* 0 ile 10 arasında*/
veri = Math.floor(Math.random()*10); /*  0 ile 10 arasında tam sayı */

console.log(veri);
console.log(typeof veri);