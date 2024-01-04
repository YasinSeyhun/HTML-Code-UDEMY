//  ARRAYS


let names = ["yasin","enes","alper","yunus"];
let years = [1998,1990,2000,1978];
let mix = ["arda", "yilmaz", 1990 ,null ,undefined,["futbol","yazılım"]];



console.log(names);
console.log(names.length); //eleman sayısı
console.log(typeof names); // object

console.log(years);

console.log(mix);

// get array item 

console.log(names[8]); //eğer dizi elemanlarını aşan sayı yazarsak undefined değer verir.


//set array item 

names[0] = "yasinn";
console.log(names);

names[names.length] = "kubilay";
console.log(names);

// add item 

names.push("eda");
console.log(names); // sonuna ekler

names.unshift("yaren");
console.log(names); // başına ekler

//remove item

names.pop();
console.log(names); //sonu siler

names.shift();
console.log(names); //başı siler

//indexOf method

let index = names.indexOf("yasinn");
console.log("index : " + index);

// sıralamayı tersine çevirme 

names.reverse();
console.log(names);

// büyükten küçüğe vs. veya alfabeye göre çevirme 

years.sort();
console.log(years);

names.sort();
console.log(names);

// dizileri birleştirmek istersek

let veri = names.concat(years);
console.log(veri);

names.splice(2,0,"ahmet");
console.log(names);