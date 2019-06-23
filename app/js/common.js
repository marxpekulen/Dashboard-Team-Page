$(function() {

	$("#check-all").change(function () {
		if ($(this).hasClass("js-rows-cb-checked")) {
			$(".tbody__col .checkbox__input").prop("checked", false);
			$(this).removeClass("js-rows-cb-checked");
			$(".tbody__row").removeClass("tbody__row--highlighted");
		} else {
			$(".tbody__col .checkbox__input").prop("checked", true);
			$(this).addClass("js-rows-cb-checked");
			$(".tbody__row").addClass("tbody__row--highlighted");
		}
	});

	$(".tbody__col .checkbox__input").change(function () {
		// Remove 'check all' mark
		if ($("#check-all").hasClass("js-rows-cb-checked")) {
			$("#check-all").removeClass("js-rows-cb-checked").prop("checked", false);
		}
		// Highlight row
		if ($(this).prop("checked") === false) {
			$(this).parents().eq(2).removeClass("tbody__row--highlighted");
		} else {
			$(this).parents().eq(2).addClass("tbody__row--highlighted");
		}
	});

	// Tabs nav on mobile devices
	$(".tabs__more").click(function () {
		$(".tabs__inner a").fadeToggle(150);
	});

});
