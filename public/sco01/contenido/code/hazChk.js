function set_vars(num) {
	console.log("🔵 ~ set_vars: ")
	window.parent.setVariantes(chk, actual);
	//console.log('🔵 ~ GUARDA QUE SE COMPLETO UN NODO: ', chk, ' - ' , actual);
	chk_btns(num, 'avance');
}

function chk_nodo(num) {
	console.log("🔵 ~ ⭐chk_nodo: ", num)
	if (chk[num] == 0) {
		chk[num] = 1;
		set_vars(num);
	} else {
		chk_btns(num);
	}
}


function reiniciar() {
	console.log("🔵 ~ ⭐reiniciar: ⬇︎ ~~~~~~~~~~~~~~~~~~~ ")

	for (i = 1; i <= window.parent.paginas; i++) {

		console.log("🔵 ~ reiniciando pagina: ", i)
		//if (window.parent.setVariantes) {
			window.parent.setVariantes(0, i);
		//}

		//if (window.parent.setCalif2023) {
			window.parent.setCalif2023(i, 0, 0, 1);
		//}

	}

	window.parent.bookmark = '';
	window.parent.itentos = 0;
	window.parent.nombre = '';

	window.parent.set_reiniciarCurso();

	if (window.parent.tipo_curso === 'plataforma') {
		window.parent.sendPlatform('restart', 'false')
	} else {
		hazSeccion(1);
	}
	console.log("⬆︎ ~~~~~~~~~~~~~~~~~~~~")
}

//console.log("🚀 ~ atv:", atv.length)
function chk_btns(num, accion) {
	console.log("🔵 ~ ⭐chk_btns: ⬇︎ ~~~~~~~~~~~~~~~~~~~")
	console.log("🔵 ~ num:", num, " ~ accion:", accion)


	console.log("%c 👻 ~ chk_btns:", styles.colors.purple_bd)

	if (num) {
		for (i = 1; i <= obj.length; i++) {
			if (num == i) {
				console.log("%c🚀 ~ OBJ:" + obj[i - 1] + " -- " + i + " -- " + chk[i], styles.colors.purple_bd)
			} else {
				if (chk[i] == 1) {
					console.log("%c🚀 ~ OBJ:" + obj[i - 1] + " -- " + i + " -- " + chk[i], styles.colors.green_sm)
				} else {
					//console.log("%c🚀 ~ OBJ:" + obj[i - 1] + " -- " + i + " -- " + chk[i], styles.colors.red_sm)
				}
			}
		}
	}

	//LOGICA PARA DAR POR COMPLETADA CADA SECCION
	Object.keys(objetoArrays).forEach((key, index) => {

		var ind = index + 1;
		//console.log("🚀 ~ index:", index)
		//console.log("🚀 ~ key:",key)
		//console.log("🚀 ~ objetoArrays[key]:",objetoArrays[key])

		var c = 0;
		for (i = 0; i < objetoArrays[key].length; i++) {
			//console.log('//', objetoArrays.obj)
			//console.log('//', objetoArrays.obj1[i], '---', chk[objetoArrays.obj1[i]], '---', chk[objetoArrays.obj1[i]] == 0)
			if (chk[objetoArrays[key][i]] == 0) {
				c++;
			}
		}
		//console.log("🚀 ~ c:", c)
		if (atv[ind] == 0) {
			c == 0 ? atv[ind] = 1 : atv[ind] = 0;
		}
	});

	console.log("🔵 ~ atv --- ", atv)

	for (i = 1; i <= atv.length; i++) {
		atv[i] == 1 ? add_image_inDiv('atv' + i, '../sources/ok.svg', '100%') : add_image_inDiv('atv' + i, '../sources/campana.svg', '100%')
		atv[i] == 1 ? $('.atv' + i).addClass('animate animate__heartBeat') : ''
	}

	//por ATV
	/* var n = 0;
	for (i = 1; i <= atv.length; i++) {
	  atv[i] == 0 ? n++ : ''
	}
	if (n === 0) {
	  $('.avanzar').addClass("parpadea");
	  hazVisto(actual)
	} */

	// por CHk
	var n = 0;
	for (i = 1; i <= obj.length; i++) {
		chk[i] == 0 ? n++ : ''
	}


	console.log('🔵 ~ accion:::', accion, ' - ', accion === 'inicio');

	if (n === 0) {
		//console.log("🚀 ~ SE COMPLETO LA PAGINA:")
		$('.avanzar').addClass("parpadea");

		if (actual != 10) {
			console.log('🔵 ~ GUARDA QUE SE COMPLETO LA PAGINA :', actual);
			hazVisto(actual)
			//window.parent.set_Brilla();
		} else {
			console.log('🔵 ~ GUARDA QUE SE COMPLETO LA PAGINA CON EVALUACION:', actual);
			window.parent.setDone(actual, 3)
		}

	} else {

		if (accion === 'avance') {
			console.log('🔵 ~ GUARDA QUE SE COMPLETO UN NODO: ', chk, ' - ', actual);
			window.parent.set_Brilla();
		} else if (accion === 'inicio') {
			console.log('🔵 ~ GUARDA EL LLEGAR A ESTA PAGINA');
			window.parent.set_Brilla();
		} else if (accion === 'eval') {
			console.log('🔵 ~ GUARDA CALIFICACION E INTENTOS DE LA EVALUACION');
			window.parent.set_Brilla();
		}
	}

	console.log("⬆︎ ~~~~~~~~~~~~~~~~~~~~")
}
