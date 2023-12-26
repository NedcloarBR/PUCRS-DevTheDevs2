var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
 par = [],
 impar = []

for(var i = 0; i< numbers.length; i++) {
  if(numbers[i] % 2 == 0) {
    par.push(numbers[i])
  } else impar.push(numbers[i])
}

console.log("Os números digitados foram: " + numbers);
console.log("Os números pares foram: " + par);
console.log("Os números ímpares foram: " + impar);