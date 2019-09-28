function targetTerdekat(arr) {
    var para = 0
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] === 'o'){
            para = i
        }
    }
    
    var totalsatu = 1
    var satu = 1 ;
    for(var y = para ; y <= arr.length ; y++ ){
        if(arr[y] === ' '){
            satu += 1 ;
        } else if (arr[y] === 'x'){
            totalsatu = satu;
            break ;
        }else{totalsatu = 0}
    }

    var totaldua = 1
    var dua = 1 ;
    for(var r = para ; r >= 0 ; r--){
        if(arr[r] === ' '){
            dua += 1 ;
        }else if (arr[r] === 'x'){
            totaldua = dua ;
            break;
        }else{totaldua = 0}
    }
    
   if(totalsatu == 0){
       return totaldua
   }else if (totaldua == 0) {
       return totalsatu
   } else if (totalsatu == totaldua){
       return 0
   } else if (totalsatu < totaldua){
       return totalsatu
   } else {return totaldua}
      

    
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', 'x', 'o', ' ', ' ', 'x', ' ', 'x'])); // 1
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2