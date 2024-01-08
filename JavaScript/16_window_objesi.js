//Window Objesi

// Javascriptte hazır olarak var bir objedir.İçinde çok sayıda metod ve özellik barındırıyor.Window objesi yazdığımız kodların tarayıcıda nasıl göründüğünü gösteren bir objedir.

veri = window;
// bu kullanımda window un içine veriyi ilave ediyoruz ve artık veri global bir değişken yapıyoruz.
console.log(veri);

// alert

alert("Merhaba ben Alert!");

//prompt - kullanıcıdan veri isteme

var veri2 = prompt("Adınızı giriniz : ");

// confirm - evet,hayır sorusu

veri3 = confirm("Çıkmak istediğinizden emin misiniz ?");
if (veri3) {
  console.log("Çıkış yaptı.");
} else {
  console.log("İptal etti.");
}
console.log(veri3);

//location - tarayacının anlık özellikleri

veri = window.location;
veri = window.location.href;
veri = window.location.hostname;
veri = window.location.protocol;

// window.location.href="http://udemy.com";
//window.location.reload(); - siteyi sürekli yeniler.
// console da window.navigator yazdığımızda şu an kullandığımız tarayıcı özellikleri gösterir.
// console da window.document yazdığımızda sitenin html kodunu gösteriyor.

console.log(veri);
