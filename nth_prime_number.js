let count = +process.argv[2];
let primeNumber = 2;
let primeCandidate = 3;
if(count<1){
  console.log("prime numbers are not exist")
}
else{
  for(;count>1;count--){
    for(let factor=3;factor<=Math.sqrt(primeCandidate);factor+=2){
      if(primeCandidate%factor==0){
        primeCandidate+=2;
        factor=1;
      }
      else{
        primeNumber=primeCandidate;
      }
    }
    primeNumber=primeCandidate;
    primeCandidate+=2;
  }
  console.log(primeNumber);
}
