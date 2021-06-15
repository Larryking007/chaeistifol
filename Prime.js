var pNum = prompt("Enter a number");
//Prime Number code
function primeNumber(pNum) {
    
    Number.parseFloat(pNum);
var prime  = true;

for(var i=2; i <= pNum/2; i++){

        if (pNum % i == 0) {
            prime = false;
            break;
        }
     else{   
         prime = true;
    }
}
if (prime){
    console.log(`${pNum} is a prime number`);
}
else {
    console.log(`${pNum} is not a prime number`);
}};

primeNumber(pNum);