let input = document.getElementById("search");
function opsta(){
  document.getElementById('durango').width = document.body.clientWidth * 0.7;
}
function search(){
    strtmp = "https://www.obd-data.com/gb/" + document.getElementById('search').value + ".html";
    window.location = strtmp;
}
opsta();
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
  });