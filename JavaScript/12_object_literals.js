// OBJECT LİTERALS

// let firstName = "Yasin";
// let lastName = "Seyhun";

// let firstName2 = "Enes";
// let lastName2 = "Tayboğa";

// let yasin = ["Yasin","Seyhun",23];
// let enes = ["Enes","Tayboğa",21];

let veri;
let user = {
  userName: "yasinseyhun",
  firstName: "Yasin",
  lastName: "Seyhun",
  age: 23,
  hobbies: ["futbol", "yazılım", "kitap okumak"],
  address: {
    city: "İstanbul",
    country: "Türkiye",
    phone: "050000000",
  },
};

veri = user;
veri = user.firstName;
veri = user.lastName;
veri = user.hobbies;
veri = user.hobbies.length;
veri = user.address.country;

console.log(veri);
console.log(typeof user);
