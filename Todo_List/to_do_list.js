const inputBox =document.getElementById("idInput");
const sortb = document.getElementById("sortb");
const listContainer =document.getElementById("list-container");
const idButton = document.getElementById("idButton");
const completed = document.getElementById("completed-list");


idButton.addEventListener('click', function(){
  const li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);
  let del = document.createElement('delete');
  del.onclick = function(){
    listContainer.removeChild(li);
    }
   li.appendChild(del);
  inputBox.value = "";  
  // let today = new Date();
  let hours =  new getHours();
  let minutes = new getMinutes();
  let seconds = new getSeconds();
  
  let current_time = `${hours}:${minutes}:${seconds}`;
  listContainer.appendChild(current_time);
});

var list = document.querySelector('ul');
list.addEventListener('click', function(mark) {
  if (mark.target.tagName === 'LI') {
    mark.target.classList.toggle('checked');
    var firstItem = document.getElementById("list-container").firstElementChild;
    var newItem = firstItem.cloneNode(true);
    completed.appendChild(newItem);
    let del = document.createElement('delete');
    del.onclick = function(){
     completed.removeChild(newItem);
    }
    newItem.appendChild(del);
    listContainer.removeChild(firstItem);
    }
   
  

  
});
sortb.addEventListener('click',function(){
  var listItem = [];
  var items = document.getElementById("list-container").getElementsByTagName("li");
  for (var i = 0, l = items.length; i < l; i++) {
      listItem.push(items[i].innerHTML)
  }
  listItem.sort();
  for (var i = 0; i < items.length; i++) {
      items[i].innerHTML = listItem[i];
  }
});
const reload = document.getElementById('reload');
reload.addEventListener('click', function(){
  window.location.reload();
});





