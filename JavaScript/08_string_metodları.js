/* STRINGS */

const firstName = "Yasin";
const lastName = "Seyhun";
const age = "23";
let hobbies = "futbol sinema spor kitap yazılım"

let veri ;

// string concatenations (string birleştirme)

veri = firstName + "" + lastName;
veri = "Yasin";
veri += " Seyhun";

veri = 'Benim Adım ' + firstName + '' + lastName + ' Yaşım ' + age + ' ve İstanbul\'da yaşıyorum.';

veri = firstName.concat('',lastName);

veri = veri.toUpperCase(firstName);
veri = veri.toLowerCase(lastName);

//veri = veri.substring(3,7); /* 3 ile 7 arasındaki harfleri aldı */
//veri = veri.slice(1,8); 

// veri = veri.indexOf("e");

//veri = veri.replace("Yasin","yasinn");

//veri = veri.length;

veri = hobbies.split(' ');




console.log(veri);
console.log(typeof veri);