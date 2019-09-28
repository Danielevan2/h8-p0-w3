function dataHandling (x){
var result = '' ;


for(var i = 0 ; i < x.length ; i++){
result += '\n' + "Nama ID: " + x[i][0] + '\n'+ "Nama Lengkap: " + x[i][1] + '\n' + "TTL: " + x[i][2] + ' ' + x[i][3] + '\n' + 'Hobi: ' + x[i][4] + '\n' ;
  
}

return result ;
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input))