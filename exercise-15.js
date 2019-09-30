function groupAnimals(animals) {
var alphabeth = 'abcdefghijklmnopqrstuvwxyz'
var result = []

for (var i = 0 ; i < alphabeth.length ; i++){
  var hasil = []

  for (var y = 0 ; y < animals.length ; y++){
    if(alphabeth[i] === animals[y][0]){
      hasil.push(animals[y])
    }
  }
  if ( hasil.length !== 0 ){
    result.push(hasil)
  }
  
}
return result
 
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
