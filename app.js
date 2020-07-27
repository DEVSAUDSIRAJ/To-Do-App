var list =document.getElementById("list");

function addTodo(){
    var todo_item =document.getElementById("todo-item")

//    create li
    var li =document.createElement("li")
    var liText=document.createTextNode(todo_item.value)
    li.appendChild(liText)
// delbtn 
    var delBtn = document.createElement("button")
    var delText= document.createTextNode("delete")
   delBtn.setAttribute("class","btn btn-danger ml-5")
   delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)
// craete edit btn 
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class","btn btn-success ml-5")
    editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""
    
    
}
function deleteItem(e){
    e.parentNode.remove()
}
function deleteAll(){
    list.innerHTML= ""
}

function editItem(e){
    var val= e.parentNode.firstChild.nodeValue;
   var editValue= prompt("Enter edit value",val)
    console.log(e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue=editValue
}