/* var tarj_actual1 = 1;
var tarjetas1 = [1,0,0,0,0,0,0,0,0];

function chk_fin_slider1() {
	var n = 0;
	for (i = 0; i < tarjetas1.length; i++) {
	  tarjetas1[i] == 1 ? n++ : '';
	}
	console.log("🚀 ~ n:", n)
	if (n == tarjetas1.length && root["chk" + 4] == false) {
	  root["chk" + 4] = true;
	  chk_btns(4);
	}
} */

function chk_adelante1() {
  //console.log("🚀 ~ init_tarjetas1:")
  //console.log("🚀 ~ tarjetas1:", tarjetas1)
  console.log("🚀 ~ tarj_actual1:", tarj_actual1)

  for (i = 1; i <= tarjetas1.length; i++) {
	$(".panel1" + i).removeClass('animate__fadeIn');
	$(".panel1" + i).hide();
  }

  $(".panel1" + tarj_actual1).show().addClass('animate__fadeIn');
  $(".panel1" + tarj_actual1).focus();

  tarj_actual1 <= 1 ? $('.btn-atras1').addClass('disabled') : $('.btn-atras1').removeClass('disabled');
  tarj_actual1 >= tarjetas1.length ? $('.btn-adelante1').addClass('disabled') : $('.btn-adelante1').removeClass('disabled');

  chk_fin_slider1();

}

function chk_atras1() {
  //console.log("🚀 ~ init_tarjetas1:")
  //console.log("🚀 ~ tarjetas1:", tarjetas1)
  console.log("🚀 ~ tarj_actual1:", tarj_actual1)

  for (i = 1; i <= tarjetas1.length; i++) {
	$(".panel1" + i).removeClass('animate__fadeIn');
	$(".panel1" + i).hide();
  }

  $(".panel1" + tarj_actual1).show().addClass('animate__fadeIn');
  $(".panel1" + tarj_actual1).focus();

  tarj_actual1 <= 1 ? $('.btn-atras1').addClass('disabled') : $('.btn-atras1').removeClass('disabled');
  tarj_actual1 >= tarjetas1.length ? $('.btn-adelante1').addClass('disabled') : $('.btn-adelante1').removeClass('disabled');

  chk_fin_slider1();

}

$('.btn-adelante1').on('click', function () {
  tarj_actual1 += 1;
  tarjetas1[tarj_actual1 - 1] = 1;
  chk_adelante1();
});

$('.btn-atras1').on('click', function () {
  tarj_actual1 -= 1;
  chk_atras1();
});

$(document).ready(function () {
  for (i = 1; i <= tarjetas1.length; i++) {
	$(".panel1" + i).hide();
  }
  $(".panel1" + tarj_actual1).show();
});

  $(function () {
	for (i = 1; i <= tarjetas1.length; i++) {
	  (function (i) {
		
		$(".panel1" + i).keydown(function (e) {
		  console.log("🚀 ~ i:", i)
		  var key = e.which;

			//&& tarj_actual1 < tarjetas1.length
		  if (key == 9)  // the enter key code
		  {
			//e.preventDefault();
			//window.open("descargas/infografia_spei.pdf", "_blank");
			//$('.btn-adelante1').click();

			//console.log("🚀 ~ key:", $('.btn-atras1').is(":disabled"))
			console.log("🚀 ~ e.shiftKey:", e.shiftKey)

			/* console.log("🚀 ~ tarj_actual1 <= 1:", tarj_actual1 <= 1)
			console.log("🚀 ~ tarj_actual1 >= tarjetas1.length :", tarj_actual1 >= tarjetas1.length )
			console.log("🚀 ~ tarj_actual1 :", tarj_actual1 )
			console.log("🚀 ~ tarjetas1.length :", tarjetas1.length ) */

			if (e.shiftKey) {

			  tarj_actual1 <= 1 ? $('.prev_from_slider1').focus() : $('.btn-atras1').click();
			}
			else {
			  tarj_actual1 >= tarjetas1.length ? $('.next_from_slider1').focus() : $('.btn-adelante1').click();
			}

			return false;
		  }

		  /* if ($(this).is(":focus")) {} */
		  //console.log("click id: ", e.currentTarget.id.substr(4));

		});
	  })(i);
	}
  });

  /*-----------------*/