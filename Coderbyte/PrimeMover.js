function PrimeMover(num) { 
  if(num==1){
    return 2;
  }
  if(num==2){
    return 3;
  }
  var primes=1;
  for(var i=3; i<100000; i++){
    var prime=0;
      for(var j=2; j<i; j++){
        if(i%j==0){
          prime++;
        }
      }
      if(prime==0){
        primes++;
      }
     if(primes==num){
        return i;
      }
  }  
}
