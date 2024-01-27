// Mouse Events


const btn = document.querySelector('#btnAddNewTask');
const ul = document.querySelector('#task-list');

//click event 
btn.addEventListener("click",run);
ul.addEventListener("click",run);

//double click event
btn.addEventListener("dblclick",run);
ul.addEventListener("dblclick",run);

//mouse down event -- bırakılana kadar çalışır
btn.addEventListener("mousedown",run);
ul.addEventListener("mousedown",run);

//mouse up event -- bıraktıktan sonra çalışır
btn.addEventListener("mouseup",run);
ul.addEventListener("mouseup",run);

//mouse enter event -- mouse üzerine geldiğinde çalışır
btn.addEventListener("mouseenter",run);
ul.addEventListener("mouseenter",run);

//mouse leave event -- mouse üzerinden gittiğinde çalışır
btn.addEventListener("mouseleave",run);
ul.addEventListener("mouseleave ",run);

//mouse over event -- mouse üzerine geldiğinde çalışır(alt elemanda çalışıyor)
btn.addEventListener("mouseover",run);
ul.addEventListener("mouseover",run);

//mouse out event -- mouse üzerinden gittiğinde çalışır(alt elemanda çalışıyor)
btn.addEventListener("mouseout",run);
ul.addEventListener("mouseout",run);

//mouse move event -- mouse un her hareketini algılar.
ul.addEventListener("mousemove",run);



function run(event){
    console.log(`event type: ${event.type}`);// eventin hangi tür event olduğunu gösterir.
};