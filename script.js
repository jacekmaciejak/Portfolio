var translate = {

	pl: {
		a1: "Cześć, jestem front-end developerem mieszkającym w Warszawie. Zachęcam do przejrzenia moich projektów."
	}
};


class translator {
	constructor() {
		this.changeLanguage();
	}

	changeLanguage() {
		var lang = translate;
		$(".header_btn").change(function () {
			var lg = $(this).val();
			$("#a1").text(lang[lg].a1, 500);
		});
	}
}

new translator();
