// Tarayıcıların Depolama Alanları

// Local Storage
// Value js kodundan silinmedikce kalıcı olarak saklanır.

// setItem

localStorage.setItem("Programlama","JS");
localStorage.setItem("Bilgisayar",7000);

// GetItem

const value = localStorage.getItem("Programlama");
console.log(value);
console.log(typeof value);

// clear local storage
// local.storage.clear();

console.log(localStorage.getItem("Klavye")); //Null degeri döner.

if (localStorage.getItem("Klavye") == null) {
    console.log("Sorgulanan veri bulunamadı.")
}else{
    console.log("Sorgulanan veri bulundu.")
}