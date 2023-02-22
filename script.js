const modal = document.getElementById("myModal");
const open = document.getElementById("openBtn");
const close = document.getElementsByClassName("close")[0];
const form = document.getElementById("subscribeForm");

open.addEventListener("click", function() {
  modal.style.display = "block";
});

close.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  modal.style.display = "none";
});