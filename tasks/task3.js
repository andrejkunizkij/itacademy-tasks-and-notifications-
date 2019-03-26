function LetterChanges(str) {
    var strOut='';
    for (var i = 0; i < str.length; i++) {
        if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            strOut += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return strOut;
}

alert(LetterChanges('abc'));



function func(str) {
	var vowels =['a','e','o','i','u'];
  var arr = str.split('');
  for(var i = 0; i < arr.length; i++) {	
  	for (var j = 0; j < vowels.length; j++) {
  		if(arr[i] == vowels[j]) {
  		arr[i] = arr[i].toString().toUpperCase();
  	}
   }
  }
  return arr.join('');
}
console.log(func('badsioee'));