
// Todo Eleman Ekleme

// Eleman Seçimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ["Todo1","Todo2","Todo3","Todo4","Todo5",];

// load items
loadItems();

eventListeners();

function eventListeners(){
    //submit event
    form.addEventListener("submit",addNewItem);
    //delete event
    taskList.addEventListener("click",deleteItem);
    //delete all event
    btnDeleteAll.addEventListener("click",deleteAllItem)
}

function loadItems() {
    items.forEach(function(item){
        createItems(item);
    })
}

function createItems(text) {
     // li oluşturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(text));

    // a oluşturma

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML='<i class="fas fa-times"></i>';

    li.appendChild(a);

    taskList.appendChild(li);
}

function addNewItem(e){
    if(input.value ===''){
        alert("Deger Giriniz");
        //console.log("submit");
    }

    input.value = "";

    e.preventDefault();
}

// Eleman Silme
function deleteItem(e) {

    if (confirm("Silmek istediğinize emin misiniz?")) {
        if (e.target.className === "fas fa-times"){
           // console.log(e.target);
           e.target.parentElement.parentElement.remove();
        }
    }
        
    e.preventDefault();    
    }

// Tüm elemanları silme
function deleteAllItem(e) {
    if (confirm("Silmek istediğinize emin misiniz?")) {
        taskList.childNodes.forEach(function(item){
            //console.log(item);
            if(item.nodeType === 1){
                item.remove();
            }
        })
    }
    // taskList.innerHTML=""; (baska bir yontem)
}









