//Scope Kavramı

// Oluşturduğumuz bir değişkeni nerelerde var olduğunu belirtiyor.

//Global Scope

//Function Scope

//Block (if-else) Scope

var veri = 5; //Global Scope
let veri2 = 10; //
const veri3 = 15; //

function fonksiyon() {
  //function scope
  var veri1 = 30;
  let veri2 = 40;
  const veri3 = 50;
  console.log(veri1, veri2, veri3);
}
fonksiyon(); // console da function scope daki değerler yazılır.

console.log(veri1, veri2, veri3); //console da global scopedaki değerler yazılır.

if (true) {
  //block scope
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // var değişkeni console da yazılır.
console.log(b); // hata verir.(let)
console.log(c); // hata verir.(const)

if (true) {
  //block scope
  var veri1 = 30;
  let veri2 = 40;
  const veri3 = 50;

  console.log(veri1, veri2, veri3);
  //console değerleri 30,40,50 olacak şekilde yazılır.
}

console.log(veri1, veri2, veri3);
// console değerleri 30,10,15 olacak şekilde yazılır. a değeri var değişkeni olduğu için değişmedi.

var admin_password = "1111111";

if (true) {
  var admin_password = "222222";
}
// program akışında var değişkeni olduğu için admin_password değişecek ve güvenlik sorunu oluşacak. block scope da bu tür bir sorunla karşılaşmamak için var değişkeni yerine let veya const kullanmamız gerekiyor.
