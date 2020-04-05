var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
   // add zero in front of numbers < 10
  return i;
}

for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

function removeParent(evt) {
    evt.target.removeEventListener("click", removeParent, false);
    evt.target.parentNode.remove();
  }

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}


ul.onclick = function(event){
	var target = getEventTarget(event);
	target.classList.toggle("done");
}


function inputLength () {
    return input.value.length;
}

function createListElement () {
    var btn = document.createElement("button");
    btn.setAttribute("class", "remove");
    btn.setAttribute ("title", "Click to remove.")
	btn.innerHTML = "X";
    btn.onclick = removeParent;
    
    var li = document.createElement ("li");
    li.setAttribute ("class", "singleList");
    // li.setAttribute ("class", "animate pulse");
    li.setAttribute ("title", "Click to mark done.")
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
    ul.appendChild(li);
    input.value ="";
}

// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//   ev.target.classList.toggle('checked');
//   }
// }, false);


function addListAfterClick () {
    if (inputLength() > 0) {
        createListElement(); 
       }
}

function addListAfterKeypress (event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
       }
}

button.addEventListener("click", addListAfterClick );

input.addEventListener("keypress", addListAfterKeypress);
   
    
