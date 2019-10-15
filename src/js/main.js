document.addEventListener('DOMContentLoaded', function () {
var target = document.getElementsByClassName("target");
var changeTimer = getNewTimer(); 
var i = 1;

function getNewTimer() {
	return setInterval(function () {
		if (i==1){
			target[0].classList.remove('visible');
			target[1].classList.add('visible');
			target[2].classList.remove('visible');
			i+=1;
		}
		else if (i==2) {
			target[2].classList.add('visible');
			target[1].classList.remove('visible');
			target[0].classList.remove('visible');
			i += 1;
		}
		else {
			target[2].classList.remove('visible');
			target[1].classList.remove('visible');
			target[0].classList.add('visible');
			i -= 2;
		}
	},2000);
}


target.onmouseover = function () {
	changeTimer = getNewTimer();
}
target.onmouseout = function () {
	changeTimer = getNewTimer();
}
}) 
