function change_img(div, imagePrefix) {
  $('.' + div).attr('src', 'images/' + imagePrefix + '.png');
}

function change_img_svg(div, imagePrefix) {
  $('.' + div).attr('src', 'images/' + imagePrefix + '.svg');
  //$('.' + div).attr('width', '100');
  //$('.' + div).attr('height', '0');
}

function change_img_class(div, imagePrefix, ext) {
  $('.img' + div).attr('src', 'sources/' + imagePrefix + '.' + ext);
}


var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};


var isMobile = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  isMobile = true;
}



//("#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9, #btn10" ).click(function(e) {
$(".btns1, .btns2, .btns3, .btns4, .btns5, .btns6, .btns7, .btns8, .btns9, .btns10").keypress(function (e) {

  //console.log("click id: ", e.currentTarget.id.substr(4));

  var key = e.which;
  if (key == 13)  // the enter key code
  {
    //window.open("descargas/infografia_spei.pdf", "_blank");
    $(this).click();
    return false;
  }
});

//MUESTRA EL INPUT DEL ERROR Y LO CONTORNEA DE ROJO DESPUES LANZA LA FUNCIONA PARA QUITARLE LOS ESTILOS
function set_error(input) {
  console.log('set_error');
  //FOCUS AL OBJETO DEL ERROR
  $('#' + input).focus();
  //AGREGAMOS MARCO ROJO AL ERROR
  $('#' + input).addClass('border_red');
  //3 SEG QUITAMOS EL OUTLINE RED
  setTimeout(unset_error, 3000, input);
}

//QUITAR SET ERROR.
function unset_error(input) {
  console.log('unset_outline');
  $('#' + input).removeClass('border_red');
}

//MUESTRA UN MENSAJE ESPECIFICO EN EL DIV QUE TU ELIJAS Y DESPUES LANZA LA FUNCION PARA QUITAR EL MENSAJE.
function set_msj(input, msj) {
  //var desap = document.getElementById("console);
  //desap.style.display = "none";
  //$("#console").css("display", "none");
  $('#' + input).html(msj);
  setTimeout(unset_msj, 3000, input);
  //$("#id").css("display", "block");
}

//QUITAR MENSAJE.
function unset_msj(input) {
  //var desap = document.getElementById("console);
  //desap.style.display = "none";
  //$("#console").css("display", "none");
  $('#' + input).html('');
  //$("#id").css("display", "block");
}

function timeout_msj(id, msj) {
  //var desap = document.getElementById("console);
  //desap.style.display = "none";
  //$("#console").css("display", "none");
  $('#' + id).html(msj);
  //$("#id").css("display", "block");
}

//MUESTRA UN MENSAJE ESPECIFICO EN EL DIV QUE TU ELIJAS.
function set_mensaje(input, msj) {
  //var desap = document.getElementById("console);
  //desap.style.display = "none";
  //$("#console").css("display", "none");
  $('#' + input).html(msj);
  //setTimeout(unset_msj, 3000, input);
  //$("#id").css("display", "block");
}


function ver_div(input) {
  $('.' + input).fadeIn();
  setTimeout(hide_div, 3000, input);

}
function hide_div(input) {
  $('.' + input).fadeOut();
}

//OCULTA LOS BOTONES DE EL MENU EN LA VERSION MOBIL Y SOLO DEJA EL CORREPONDIENTE AL TEMA.
//MUESTRA / OCULTA EL BOTON DE CIERRE EN EL MENU INFERIOR, SI ESTAS EN MOBIL O EN DESKTOP.
/* var cat_btns = 10;
for (var i = 1; i <= cat_btns; i++) {

  if(isMobile == true){
    $(".btn"+ i).hide();
    $(".btn_cierre").show();
  } else {
    $(".btn_cierre").hide();
  }
  $(".btn"+ (actual-1)).show();

} */


var styles = {
  colors: {
      red: "color: red",
      blue: "color: blue",
      purple: "color: purple",
      green: "color: green",
      purple_bd: "color: purple; font-size: xx-small; font-weight: bold;",
      red_sm: "color: red; font-size: xx-small",
      green_sm: "color: green; font-size: xx-small; font-weight: bold;",
      orange_sm: "color: orange; font-size: xx-small; font-weight: bold;",
      blue_sm: "color: blue; font-size: small; font-weight: bold;"
  },
  bgcolors: {
      yellow: "color: yellow",
      green: "color: green"
      // Más colores de fondo...
  },
  fSizes: {
      s: "font-size: small",
      m: "font-size: medium",
      l: "font-size: large",
      bold: "font-weight: bold"
      // Más tamaños de fuente...
  },

};