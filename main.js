
setTimeout(function() {
		document.body.style.display = 'block';
	}, 5000);
window.onload = function() {
		document.body.style.display = 'none';
	};


function close() {
	 document.querySelector('.wrapper').style.display = "none";
}



var arrText = ['item1','item2','item3','item4','item5','item6'];
var num = 0;
	function next() {
		var	text = document.getElementById('changeText');
		 num++
		if(num>=arrText.length) {
		 num=0;
		}
		 text.innerHTML = arrText[num];
		}

function prev() {
	 var text = document.getElementById('changeText');
	 num--;
	 if(num<0) {
	 	num = arrText.length-1;
	 }
	  text.innerHTML = arrText[num];
}		