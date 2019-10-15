var text = document.querySelector('#text');
var now = new Date();
var target = new Date(
	now.getFullYear() +1,
	0,
	1,
	0,
	0,
	0
);

timer(target);
setInterval(() => timer(target), 1000);

function timer() {
	var now = new Date();
	var diff = Math.ceil((target - now) / 1000);

	var days = extract(diff, 60 * 60 * 24);
	var hours = extract(days.diff, 60 * 60);
	var minutes = extract(hours.diff, 60);
	var seconds = extract(minutes.diff, 1);
	
	text.innerHTML = 
	addZero(days.value) + '<br>'+ 
	addZero(hours.value) + '<br>' + 
	addZero(minutes.value) + '<br>' + 
	addZero(seconds.value);
}

function extract(diff, formula){
	var value = Math.floor(diff / formula);
	var diff = diff % formula;
	return {value: value, diff: diff};
}

function addZero(num) {
	if (num<= 9) {
		num = '0' + num;
	}
	return num;
}