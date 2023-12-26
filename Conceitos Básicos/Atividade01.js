// Modo complexo (desnecessário)
var s = "";
for(i = 1; i < 7; i++) {
  if(i < 6){
    s += i + " - ";
  } else if(i > 5 && i < 7) {
    s += i;
  }
}
console.log(s)

// Modo KISS (Keep it simple, stupid!)
console.log("1 - 2 - 3 - 4 - 5 - 6")