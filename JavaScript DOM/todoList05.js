//Element Silme 

const taskList = document.querySelector('#task-list');


//taskList.remove();
//taskList.childNodes[2].remove();
//taskList.children[3].remove();
//taskList.removeChild(taskList.children[3]);


// attribute silme 

//taskList.children[1].removeAttribute("class");
for (let index = 0; index < taskList.children.length; index++) {
    taskList.children[index].removeAttribute("class");
    taskList.children[index].removeAttribute("id");
}


console.log(taskList);