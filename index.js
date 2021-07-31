function displayTime() {
	let gettingDate = new Date();
	let gettingHours = gettingDate.getHours();
	let gettingMinutes = gettingDate.getMinutes();
	let gettingSeconds = gettingDate.getSeconds();

	let twelveHourSession = 'AM';
	if (gettingHours > 12) {
		gettingHours -= 12;
	}

	if (gettingHours <= 12) {
		twelveHourSession = 'PM';
	}
	gettingHours = gettingHours < 10 ? '0' + gettingHours : gettingHours;
	gettingMinutes = gettingMinutes < 10 ? '0' + gettingMinutes : gettingMinutes;
	gettingSeconds = gettingSeconds < 10 ? '0' + gettingSeconds : gettingSeconds;

	let time =
		gettingHours +
		' : ' +
		gettingMinutes +
		' : ' +
		gettingSeconds +
		' ' +
		twelveHourSession;
	document.getElementsByTagName('h1')[0].innerText = time;

	setTimeout(displayTime, 1000);
}

displayTime();
