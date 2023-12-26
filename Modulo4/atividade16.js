var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

var count = 0;
var consoantes = "";
for (var i = 0; i < arr.length; i++) {
  if (arr[i].match(/[bcdfghjklmnpqrstvwxyz]/i)) {
    count++;
    consoantes += arr[i] + " ";
  }
}

console.log("Foram lidas " + count + " consoantes.");
console.log("As consoantes são: " + consoantes);
