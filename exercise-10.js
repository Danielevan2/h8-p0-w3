function perkalianUnik(arr) {
var result= []
    for(var i = 0 ; i < arr.length ; i++){
   var numpang = arr.slice([i],[i+1])
   var no = parseInt(numpang)
    var coba = 1
     for(var y = 0 ; y < arr.length ; y++){
         
         if(arr[y] === no && i == y){
             arr[y] = 1 ;
             coba *= arr[y]
             arr[y] = numpang
         }else {
             coba *= arr[y]
         }
     }
result.push(coba)

    }

    return result
  }
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]