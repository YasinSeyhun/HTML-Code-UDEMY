//fonksiyonlar (functions)

function merhaba() {
  console.log("Merhaba Dünya!");
}

merhaba();
merhaba();
merhaba();
//artık istediğimiz yerde kullanabiliriz.

function merhaba2(name, age) {
  console.log(`İsim : ${name} Yaşınız : ${age}`);
}

merhaba2("yasin", 23);

function yasHesapla(dogumYili) {
  return 2024 - dogumYili;
}

let ageYasin = yasHesapla(2000);

console.log(ageYasin);

function ehliyetHesapla(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  let ehliyet = 18 - yas;

  if (ehliyet > 0) {
    console.log(`${isim} ehliyet alabilmenize ${ehliyet} yıl kaldı`);
  } else {
    console.log(`${isim} zaten ehliyetiniz var.`);
  }
}

ehliyetHesapla(2000, "yasin");
