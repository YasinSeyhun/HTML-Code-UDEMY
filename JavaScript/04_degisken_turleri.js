/* DEĞİŞKEN TÜRLERİ  */

/* Primitive Types */

/* 1.String */

let firstName = "Yasin";
console.log(typeof firstName);
/* typeof metodu değişkenin türünü yazar. */

/* 2.Number */

let age = 30;
console.log(typeof age);

/* 3.Boolean */

let kredi_kullanimi = false;
console.log(typeof kredi_kullanimi);

/* undefined */

let phone ;
console.log(phone);


/* Reference Types : Objects */

/* 1.Array */

let liste = ["aslı","yasin","enes","alper"];
console.log(typeof liste);
/* konsolda object  yazar */


/* Object Literals */

let address = {
    city: "İstanbul",
    country: "Türkiye",
}
console.log(typeof address);

var hesapla = function(){
    return 0;
}
console.log( typeof hesapla);