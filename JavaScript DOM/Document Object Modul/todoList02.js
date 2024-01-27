// Tek Element Seçimi Metodları
//          document.getElementsById();
//          document.querySelector();


//  ---- Çoklu Element Seçimi ----
//          document.getElementsByClassName();

let veri ;

// veri = document.getElementsByClassName("list-group-item");
// veri = document.getElementsByClassName("list-group-item")[0];
// veri = document.getElementsByClassName("list-group-item")[3];
// veri = veri[2];  (başka bir kullanım)

// veri[3].style.fontSize = "30px";
// veri[3].style.color = "red";
// veri[2].textContent = "new item";
// veri[3].textContent = "new item2";

// for (let index = 0; index < veri.length; index++) {
//     console.log(veri[index].style.color = "orange");
//     console.log(veri[index].textContent = "new item");
// }


//          document.getElementsByTagName();

// veri = document.getElementsByTagName("li");
// veri = document.getElementsByTagName("a");
//bütün a ları gösterir.

// veri = document.getElementsById("task-list").getElementsByTagName("a");
//task-listteki a ları gösterir.


//         document.querySelectorAll();

veri = document.querySelectorAll("li"); //forEach kullanımı sağlar.

veri.forEach(function(item) {
    console.log(item);   //liste elemanlarını tek tek sıralar.
});


//forEach kullanarak liste elemanlarına sayı ekleyebiliriz.

veri = document.querySelectorAll("li");

veri.forEach(function(item,index) {
    item.textContent=`${index} - item`; 
});



console.log(veri);