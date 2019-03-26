function findLongestString(sen) { 
var words = sen.split(' '); 
var longestWord = ""; 
for (var i = 0; i<words.length; i++) { 
if (words[i].length > longestWord.length) { 
longestWord = words[i]; 
} 
} 
console.log(longestWord); 
return longestWord; 
} 

findLongestString("big biggeêêêêêêr biggest");