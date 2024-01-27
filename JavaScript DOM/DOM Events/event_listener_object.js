//event listener and event object

//delete all button

const btn = document.querySelector("#btnDeleteAll");

// btn.addEventListener("click",function () {
//     console.log("button is clicked");
// });
function clicked() {
    console.log("button is clicked");
}

btn.addEventListener("click",clicked);

const addbutton = document.querySelector("#btnAddNewTask");

addbutton.addEventListener("click",clicked);

// böyle yaptığımızda sayfa her tıklamada en yukarı atıyor kendisini

// çözümü 


btn.addEventListener("click",function(a){

    let value;

    value = a;
    value = a.target;//hedef göster
    value = a.target.id;//hedefin id'si
    value = a.target.classList;//hedefin class ı 
    value = a.type;//button un tipi


    a.preventDefault(); // varsayılan engelle(çözüm)
    console.log(value);
});