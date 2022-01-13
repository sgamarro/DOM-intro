document.getElementById('greeting').innerHTML = "Hello World";
var listStyle = document.getElementById('essentials');
listStyle.style.backgroundColor = "yellow";

var newImg = document.createElement('img');
newImg.src = 'https://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
document.getElementById('greeting').appendChild(newImg);

var body = document.body;
var todoArray = ['make coffee','eat donut','change dipers','drive to work'];
var todoItems = document.createElement('ul');
todoItems.className = "todo-items";
for(var i=0; i<todoArray.length; i++){
    var todoList = document.createElement('li');
     var todoListText = document.createTextNode(todoArray[i]);
    todoList.appendChild(todoListText);
    todoItems.appendChild(todoList);
    body.appendChild(todoItems);
}
var desapear = document.getElementById('ghosting');
desapear.onmouseover = function ghosting(){
    desapear.style.display = 'none';
}
var scale = document.getElementById('resize');
scale.onmouseover = function resize(){
    scale.style.width = "400px";
}
scale.onmouseleave = function resizeOne(){
    scale.style.width = "200px";
}
 
window.onkeydown = function(event){
    if(event.keyCode === 0-9);{
        alert('I HATE NUMBERZZZZZ');
    }
};
