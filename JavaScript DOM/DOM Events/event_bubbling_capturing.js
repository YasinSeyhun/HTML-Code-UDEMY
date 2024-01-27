

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//                     Event Bubbling

// form.addEventListener("click",function click(e) {
//     console.log("form");
//     e.stopPropagation(); // olay kabarcığı duruyor.
// });

// cardBody.addEventListener("click",function click(e) {
//     console.log("card-body");
//     e.stopPropagation();
// });

// card.addEventListener("click",function click(e) {
//     console.log("card");
//     e.stopPropagation();
// });

// container.addEventListener("click",function click(e) {
//     console.log("container");
//     e.stopPropagation();
// });


//                     Event Capturing -- Bubbling'in tersi

// form.addEventListener("click",function click(e) {
//     console.log("form");
//     e.stopPropagation();
// },true);

// cardBody.addEventListener("click",function click(e) {
//     console.log("card-body");
//     e.stopPropagation();
// },true);

// card.addEventListener("click",function click(e) {
//     console.log("card");
//     e.stopPropagation();
// },true);

// container.addEventListener("click",function click(e) {
//     console.log("container");
//     e.stopPropagation();
// },true);


const deleteItems = document.querySelectorAll(".fa-times");

deleteItems.forEach(function(item){
    item.addEventListener("click",function(e){
        console.log(e.target);
    });
});

const ul = document.querySelector("ul");

ul.addEventListener("click",function(p){
    if (p.target.className = "fas fa-times") {
        p.target.parentElement.parentElement.remove();
    }
})