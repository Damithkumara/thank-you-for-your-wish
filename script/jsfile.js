
const mybutton = document.getElementById('open-button');
mybutton.style.display = 'none';
var time = 20;
	var ovenTimer = setInterval(function(){
	if(time <= 0){
		clearInterval(ovenTimer);
		document.getElementById("countdown").innerHTML = "00 : 00";
        mybutton.style.display = 'block';

	} else {
		if(time < 10){
			document.getElementById("countdown").innerHTML = "00 : 0"+ time + "";
		} else {
			document.getElementById("countdown").innerHTML = "00 : "+ time + "";
		}
	}
	time -= 1;
	}, 1000);