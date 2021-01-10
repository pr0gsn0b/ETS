var date = new Date();

		var rseconds = 59 - date.getSeconds();
		var rminutes = 59 - date.getMinutes();
		var rhours = 23 - date.getHours();
		var rdays = 0;
		while (date.getMonth() < 2) {
			date.setDate(date.getDate() + 1);
			rdays++;
		}
		rdays += 8

    tick();
     
		function days() {
			rdays--;
		}

		function hours() {
			rhours--;
			if (rhours == 0) {
				rhours = 23;
				days();
			}
		}

		function minutes() {
			rminutes--;
			if (rminutes == 0) {
				rminutes = 59;
				hours();
			}
		}

		function seconds() {
			rseconds--;
			if (rseconds == 0) {
				minutes();
			}
			if (rseconds == -1) {
				rseconds = 59;
			}
			return rseconds < 10 ? "0" + rseconds : rseconds;
		}

		function tick() {
			document.getElementById("clock").innerText = `${rdays < 10 ? "0" + rdays : rdays} : ${rhours < 10 ? "0" + rhours : rhours} : ${rminutes < 10 ? "0" + rminutes : rminutes} : ${seconds()}`;
		}
		setInterval(tick, 1000);
