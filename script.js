//getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value; //getting user entered value
    if(userData.trim() !=0){ //if user values aren't only spaces
        addBtn.classList.add("active"); //activate the add button 
    }else{
        addBtn.classList.remove("active"); //deactivate the add button 
    }
}

showTasks(); //calling showTasks function

//if user on the add button
addBtn.onclick =()=>{
    let userData = inputBox.value; //getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){ //if localstorage is null
        listArray = []; //creating blank array
    }else{
        listArray = JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    listArray.push(userData); //pushing or adding user data
    localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
    showTasks(); //calling showTasks function
}

//function to add task list inside ul
function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){ //if localstorage is null
        listArray = []; //creating blank array
    }else{
        listArray = JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    let newLiTag = '';
    listArray.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick="deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;  
    });  
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag 
    inputBox.value = ""; //once task is added leave the input field blank
}

//delete task function
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorage);
    listArray.splice(index, 1); //delete or remove the particular indexed li
    //after removing the li tag, again update the local storage
    localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
    showTasks(); //calling showTasks function
}