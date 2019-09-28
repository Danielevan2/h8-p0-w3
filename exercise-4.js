function dataHandling2(x){
  
    var satu = x.splice(0,4) ;
    satu.push('Pria', 'SMA Internasional Metro') ;
    console.log(satu) ;
    
    var dua = satu[3] ;
    var tiga = dua.split('/') ;
    var bulan = parseFloat(tiga[1]) ;
    
    switch(bulan){
        case 1: bulan = 'Januari';
        break;
        case 2: bulan = 'Februari';
        break;
        case 3: bulan = 'Maret';
        break;
        case 4: bulan = 'April';
        break;
        case 5: bulan = 'Mei';
        break;
        case 6: bulan = 'Juni';
        break;
        case 7: bulan = 'Juli';
        break;
        case 8: bulan = 'Agustus';
        break;
        case 9: bulan = 'September';
        break;
        case 10: bulan = 'Oktober';
        break;
        case 11: bulan = 'November';
        break;
        case 12: bulan = 'Desember';
        break;
        default: bulan = '-' ;
    
    }
    console.log(bulan) ;
    var ttl = [] ;
    for (var i = 0 ; i < tiga.length ; i++){
      ttl.push(tiga[i]) ;
    } 
    console.log(ttl.sort(function(a,b){
      return b -a 
    })) ;
    
    var name = satu[1] ;
    
    
    return name.slice(0,15) ;
     
    
    
    
    }
    
    
    var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
    
    console.log(dataHandling2(input)) ;
    
    /**
     * keluaran yang diharapkan (pada console)
     *
     * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
     * Mei
     * ["1989", "21", "05"]
     * 21-05-1989
     * Roman Alamsyah
     */