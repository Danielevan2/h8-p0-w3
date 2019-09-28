function balikString(str){
var split = str.split('') ;
var result = [];
 
for(var i = split.length ; i >= 0 ; i--){
result.push(split[i]) ;
}

return result.join('')
}

console.log(balikString('hello word!'))