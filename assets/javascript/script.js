// MODAL

// Get the modal
var modal = document.getElementById("myModal");

// opens the modal
var btn = document.getElementById("myBtn");

// Get the close
var span = document.getElementsByClassName("close")[0];

// open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// 
span.onclick = function() {
  modal.style.display = "none";
}

//close on window
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ACCORDIOIN

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// IMAGE
var height = document.getElementById("trigger-height").height;
document.getElementsbyId('section-image').style.width= height+"px";

alert(height);

console.log(divHeight)