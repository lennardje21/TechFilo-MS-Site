function lightVsDark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


function changeTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}