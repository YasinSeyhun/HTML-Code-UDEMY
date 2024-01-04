// Switch Koşul Yapısı

let islem = 1;

switch (islem) {
  case 1:
    console.log("1 nolu işlem tamamlandı .");
    break;
  case 2:
    console.log("2 nolu işlem tamamlandı .");
    break;
  case 3:
    console.log("3 nolu işlem tamamlandı .");
    break;
  case 4:
    console.log("4 nolu işlem tamamlandı .");
    break;
  default:
    console.log("işlem yapılmadı .");
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Pazar";
    break;
  case 1:
    day = "Pazartesi";
    break;
  case 2:
    day = "Salı";
    break;
  case 3:
    day = "Çarşamba";
    break;
  case 4:
    day = "Perşembe";
    break;
  case 5:
    day = "Cuma";
    break;
  case 6:
    day = "Cumartesi";
    break;

  default:
    break;
}

console.log(day);

let times = 16;

switch (times) {
  case times >= 6 && times <= 12:
    console.log("Günaydın");
    break;
  case times >= 13 && times <= 17:
    console.log("İyi Günler");
    break;
  case times >= 18 && times <= 24:
    console.log("İyi Akşamlar");
  default:
    console.log("Yanlış zaman dilimi değeri girdiniz.");
    break;
}
