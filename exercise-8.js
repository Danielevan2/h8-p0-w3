function pasanganTerbesar(num) {
var st = String(num)
var arr = 0
for (var i = 0 ; i < st.length-1 ; i++){
    var tampung ;
    tampung = st[i] + st[i+1]
    if(parseInt(tampung) > arr){
        arr = parseInt(tampung)
    }
}
return arr
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99