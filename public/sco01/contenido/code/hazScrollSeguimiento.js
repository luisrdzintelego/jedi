$(window).on('scroll', function () {

	var scrollTop = $(window).scrollTop();
	//console.log("🚀 ~ scrollTop:", scrollTop)
	var botoomdiv1 = ($('#esp1').offset().top)
	//console.log("🚀 ~ botoomdiv:", botoomdiv1)
	var botoomdiv2 = ($('#esp2').offset().top)
	//console.log("🚀 ~ botoomdiv:", botoomdiv2)
	var botoomdiv3 = ($('#esp3').offset().top)
	//console.log("🚀 ~ botoomdiv:", botoomdiv3)
	var botoomdiv4 = ($('#esp4').offset().top)
	//console.log("🚀 ~ botoomdiv:", botoomdiv4)
	var botoomdiv5 = ($('#esp5').offset().top)
	//console.log("🚀 ~ botoomdiv:", botoomdiv5)
	var botoomdiv6 = ($('#esp6').offset().top)
	//console.log("🚀 ~ botoomdiv:", botoomdiv6)
	var botoomdiv7 = ($('#esp7').offset().top)
	//console.log("🚀 ~ botoomdiv:", botoomdiv7)
	//var botoomdiv8 = ($('#esp8').offset().top)
	//console.log("🚀 ~ botoomdiv:", botoomdiv8)
	//console.log("🚀 ~ ------------------")

	if ((scrollTop + 100) >= botoomdiv1 && (scrollTop + 100) <= botoomdiv2) {
		//console.log('dentro')

		if ($(".btn1").hasClass("selected") == false) {
			//console.log('no tiene la clase')
			$(".btn1").addClass("selected");
		}
	} else {
		if ($(".btn1").hasClass("selected")) {
			$(".btn1").removeClass("selected");
		}
	}

	if ((scrollTop + 100) >= botoomdiv2 && (scrollTop + 100) <= botoomdiv3) {
		//console.log('dentro')

		if ($(".btn2").hasClass("selected") == false) {
			//console.log('no tiene la clase')
			$(".btn2").addClass("selected");
		}
	} else {
		if ($(".btn2").hasClass("selected")) {
			$(".btn2").removeClass("selected");
		}
	}

	if ((scrollTop + 100) >= botoomdiv3 && (scrollTop + 100) <= botoomdiv4) {
		//console.log('dentro')

		if ($(".btn3").hasClass("selected") == false) {
			//console.log('no tiene la clase')
			$(".btn3").addClass("selected");
		}
	} else {
		if ($(".btn3").hasClass("selected")) {
			$(".btn3").removeClass("selected");
		}
	}

	 if ((scrollTop + 100) >= botoomdiv4 && (scrollTop + 100) <= botoomdiv5) {
		//console.log('dentro')

		if ($(".btn4").hasClass("selected") == false) {
			//console.log('no tiene la clase')
			$(".btn4").addClass("selected");
		}
	} else {
		if ($(".btn4").hasClass("selected")) {
			$(".btn4").removeClass("selected");
		}
	}

	 if ((scrollTop + 100) >= botoomdiv5 && (scrollTop + 100) <= botoomdiv6) {
		//console.log('dentro')

		if ($(".btn5").hasClass("selected") == false) {
			//console.log('no tiene la clase')
			$(".btn5").addClass("selected");
		}
	} else {
		if ($(".btn5").hasClass("selected")) {
			$(".btn5").removeClass("selected");
		}
	}
	
	
	if ((scrollTop + 100) >= botoomdiv6 && (scrollTop + 100) <= botoomdiv7) {
		//console.log('dentro')

		if ($(".btn6").hasClass("selected") == false) {
			//console.log('no tiene la clase')
			$(".btn6").addClass("selected");
		}
	} else {
		if ($(".btn6").hasClass("selected")) {
			$(".btn6").removeClass("selected");
		}
	}


	/*if ((scrollTop + 100) >= botoomdiv7 && (scrollTop + 100) <= botoomdiv8) {
		//console.log('dentro')

		if ($(".btn7").hasClass("selected") == false) {
			//console.log('no tiene la clase')
			$(".btn7").addClass("selected");
		}
	} else {
		if ($(".btn7").hasClass("selected")) {
			$(".btn7").removeClass("selected");
		}
	} */



	/*if ((scrollTop + 100) >= botoomdiv6) {
		//console.log('dentro')
		if ($(".btn5").hasClass("selected")) {
			$(".btn5").removeClass("selected");
		}
	} */


	/*
	if ($(window).scrollTop() >= $('.sec1').offset().top + $('.sec1').outerHeight() - window.innerHeight) {
	  console.log('end reached')
	  $(".btn1").removeClass("parpadea");
	} else if (scrollTop <= 0) {
	  console.log('Top reached')
	  $(".btn1").addClass("parpadea");
	} */


	/* if ($(window).scrollTop() <= topdiv) {
	  //console.log('fuera pa arriba')
	  $(".btn1").removeClass("parpadea");
	  } else if ($(window).scrollTop() >= botoomdiv) {
	  //console.log('fuera pa bajo')
	  $(".btn1").removeClass("parpadea");       
	} else if (scrollTop >= topdiv && scrollTop <= botoomdiv ) {
	  console.log('dentro')
	  $(".btn1").addClass("parpadea");
	}  */
});