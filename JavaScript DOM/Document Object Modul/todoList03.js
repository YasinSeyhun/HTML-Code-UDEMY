// DOM Elementleri Üzerinde Gezinme 

let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const card = document.querySelector(".card");


value = todoList;
value = todo;
value = card;

// Child Nodes

value = todoList.childNodes; // 9 eleman (text - li)(NodeList)
value = todoList.children; // 4 eleman (li)(HTML Collection)
value = todoList.children[0];
value = todoList.children[todoList.children.length-1];  //son eleman
value = todoList.children[1].textContent = "change text";


value = card;
value = card.children;
value = card.children[1].children[0].textContent = "change div";



value = todoList;
// value = todoList.children[0];
value = todoList.firstElementChild;
value = todoList.lastElementChild;

value = todoList.children.length; // to-dolist kaç tane çocuk var 
value = todoList.childElementCount;  // bir başka yöntem

value = card;
value = card.parentElement; // card ın ebeveynine erişmek için
value = card.parentElement.parentElement;

value = todo;
value = todo.previousElementSibling; // önceki elemente (kardeşe) geçiş 
value = todo.nextElementSibling; // sonraki elementte (kardeşe) geçiş
value = todo.nextElementSibling.nextElementSibling;

value = todo.nextElementSibling.previousElementSibling;

console.log(value);