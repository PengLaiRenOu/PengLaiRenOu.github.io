let input = document.getElementById("search");
function opsta(){
  document.getElementById('durango').width = document.body.clientWidth * 0.7;
}
function search(){
    let check = false;
    let CP = ""
    for(let i in phone){
        if(document.getElementById('search').value.hashCode() == phone[i]){
            
            check = true;
            CP = phone[i];
        }
    }
    if(check == true){
        console.log("T");
        if(CP == phone[0]){
            document.cookie = "username="+phone[0];
            window.location = "ShihChung.html"; //https://penglairenou.github.io/
        }
        if(CP == phone[1]){
          document.cookie = "username="+phone[1];
          window.location = "Chienting/Chienting.html"; //https://penglairenou.github.io/
        }
    }else{
        alert("登入失敗");
    }
    
}
String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};
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

let phone = ["50033348","-713624922"];