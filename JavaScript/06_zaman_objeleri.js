
// DATE OBJECT

let zaman = new Date();

let birthday = new Date(2000,11,16);

/* Set Methods */
/* 
zaman.setDate(25);
zaman.setMonth(3);
zaman.setFullYear(2000);
zaman.setHours(20);
 */

/* Get Methods */

console.log(zaman.getMonth());
console.log(zaman.getDate());
console.log(zaman.getFullYear());
console.log(zaman.getDay());
console.log(zaman.getHours());
console.log(zaman.getMinutes());
console.log(zaman.getMilliseconds());

console.log(zaman.getFullYear()-birthday.getFullYear());
console.log(zaman.getMonth()-birthday.getMonth());


console.log(zaman);
console.log(typeof zaman);