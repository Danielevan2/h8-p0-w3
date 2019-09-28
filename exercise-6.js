function angkaPalindrome(num) {
  if(num < 10){
    return num + 1 ;
  }
  
  var result = 0 ;
  var y = num ;
    while(result === 0){
  
      var tostring = String(y) ;
      var arr ='' ;
      for(var i = tostring.length -1; i >=  0 ; i--){
         arr += tostring[i] ;
      }
  
      if(tostring === arr){
        result = y ;
      } 
      y += 1 ;
      
    }
  
    return result ;
    }
      
      
  
  
    
      
    
    // TEST CASES
    console.log(angkaPalindrome(8)); // 9
    console.log(angkaPalindrome(10)); // 11
    console.log(angkaPalindrome(117)); // 121
    console.log(angkaPalindrome(175)); // 181
    console.log(angkaPalindrome(1000)); // 1001