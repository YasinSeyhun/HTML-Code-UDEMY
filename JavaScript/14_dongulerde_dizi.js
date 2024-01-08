// Dizi ve Objelerde Döngü Kullanımı

let citys = ["istanbul ", "ankara", "izmir", "eskişehir ", "bursa"];

let users = [
  { firstName: "yasin", lastName: "seyhun" },
  { firstName: "enes", lastName: "tayboğa" },
  { firstName: "alper", lastName: "kandemir" },
  { firstName: "yunus", lastName: "muslukcu" },
  { firstName: "mert", lastName: "kopruvalı" },
  { firstName: "kubilay", lastName: "gül" },
];

// Array

for (let i = 0; i < citys.length; i++) {
  console.log(citys[i]);
}

// for-in metodu

for (let i in citys) {
  console.log(`index: ${i} value: ${citys[i]}`);
}

//for-each metodu

citys.forEach(function (item) {
  console.log(item);
});

//objelerde döngüler

for (let i = 0; i < array.length; i++) {
  console.log(users[i].lastName);
}

for (let i in users) {
  console.log(` index : ${i} value : ${users[i].lastName}`);
}

//map metodu : returns an array

let veri = users.map(function (item) {
  return item.firstName + " " + item.lastName;
});
console.log(veri);

let numbers = [1, 3, 5, 9, 12];

let num = numbers.map(function (n) {
  return n * n;
});

console.log(num);
