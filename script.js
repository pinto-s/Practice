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

function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorage == null){ //if localstorage is null
        listArray = []; //creating blank array
    }else{
        listArray = JSON.parse(getLocalStorage); //transforming json string into a js object
    }
    let newLiTag = '';
    listArray.forEach((element, index) => {
        newLiTag += `<li> ${element} <span><i class="fas fa-trash"></i></span></li>`;  
    });  
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag 
}