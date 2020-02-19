var input = document.getElementById('input');
var inputDate = document.getElementById('inputDate');
var btn = document.getElementById('btn');
var lists = document.getElementById('todoList');
var btnRemove = document.getElementById('btnRemove');
input.focus();

var itemsId = 0;

var updateItemStatus = function() {
    var checkboxId = this.id.replace("checkBox_", "");
    var strText = document.getElementById("strText_" + checkboxId);

    if(this.checked) {
        strText.style.textDecoration = "line-through";
    } else {
        strText.style.textDecoration = "none";
    }
}

var deleteItem = function() {
    var deleteId = this.id.replace("delete_", "");
    var itemId = document.getElementById("li_" + deleteId);

    itemId.parentNode.removeChild(itemId);
}

var addNewItem = function(str, strDate) {
    itemsId++;

    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var strText = document.createElement('span');
    var deleteButton = document.createElement('button');

    strText.textContent = "Task is: " + str + " Due date is: " + strDate; 
    checkBox.type = 'checkbox';
    deleteButton.textContent = "delete";

    listItem.id = "li_" + itemsId;
    strText.id = "strText_" + itemsId;
    checkBox.id = "checkBox_" + itemsId;
    deleteButton.id = "delete_" +itemsId;
    
    listItem.appendChild(checkBox);
    listItem.appendChild(strText);
    listItem.appendChild(deleteButton);

    checkBox.onclick = updateItemStatus;
    deleteButton.onclick = deleteItem;

    return listItem;
}

var addList = function(task) {
    todoList.appendChild(task);
}

var addButton = function() {
    var str = input.value.trim();
    var strDate = inputDate.value.trim();

    if(str.length > 0 && strDate.length > 0) {
        addList(addNewItem(str, strDate));

        input.value = '';
        inputDate.value = '';
        input.focus();
    } else if(str.length == 0) {
        alert("Task should be input!");
    } else if(strDate.length == 0) {
        alert("Date should be input!")
    }
}

var removeAll = function() {
    document.getElementById('todoList').innerHTML = '';
    input.focus();
}

btn.addEventListener('click', addButton);
input.addEventListener('keyup', function(event) {
    var keyCode = event.keyCode;

    if(event.which == 13) {
        addButton();
    }
});
inputDate.addEventListener('keyup', function(event) {
    var keyCode = event.keyCode;

    if(event.which == 13) {
        addButton();
    }
});
btnRemove.addEventListener('click', removeAll);