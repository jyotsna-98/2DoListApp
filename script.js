var todoList=[];
const hitSound = new Audio("/assets/hitSound.mp3");
var yourInput=document.querySelector(".addTxt");
window.onload=()=>{
     if(JSON.parse(localStorage.getItem("todo-elements"))!=null){
           elements=JSON.parse(localStorage.getItem("todo-elements"));
           console.log(elements);
           display();
}
}
 const addElement=()=>{
    hitSound.play();
      if(yourInput.value.trim() != ""){
       todoList.push(yourInput.value.trim());
       if(localStorage.getItem("todo-elements")==null){
           localStorage.setItem("todo-elements",JSON.stringify(todoList));
       }     
   else{
    
        localStorage.setItem("todo-elements",JSON.stringify(todoList));
        
   }
}
         display();
       yourInput.value="";
   }

 const display=()=>{
    document.querySelector(".list").innerHTML="";
    for(var index=0; index <  todoList.length; index++ ){
        document.querySelector(".list").innerHTML +=
         `<center><div class="element"> ${todoList[index]}
        
          <img class="tick" src="./assets/tick_mark.jpg" 
           onclick="strike(${index})"> 
          <img class="trash" src="./assets/trash.png" onclick="trash(${index})">
          </div></center> `
    }
}
    const trash=(index)=>{
    todoList.splice(index,1);
     if(localStorage.getItem("todo-elements")==null){
           localStorage.setItem("todo-elements",JSON.stringify(todoList));
       }else{
        localStorage.setItem("todo-elements",JSON.stringify(todoList));
           }
    display();
    }

    const strike=(index)=>{
        if(todoList[index].includes("<strike>")){
            todoList[index]=todoList[index].replace("<strike>","");
            todoList[index]=todoList[index].replace("</strike>","")
        }
        else{
            todoList[index]=`<strike>${todoList[index]}</strike>`
        }
        display();
    }
document.querySelector(".addBtn").addEventListener('click',addElement);

