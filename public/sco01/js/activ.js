

///////////////GENERALES/////////////////
//-------------------------------------//
var idioma = "esp";
var lote = new Array();
var cantidad;
var numeros = new Array();
var sponge;
var locked = "no";
var pag_actual = "";

var idioma = "";
var status = "";
var intentos = 0;
var nombre = "";
var rol = 0;

var tipo_curso = 'plataforma';

//PARAMETROS PLATAFORMA INTELEGO
var nombre_curso = "Jedi";
var bookmark = '';
var errorConect = false;

var sRatio = 1;

function hitTestInRange(target, range) {

  console.log(sponge);

  if (target.x > sponge.mouseX - range &&
    target.x < sponge.mouseX + range &&
    target.y > sponge.mouseY - range &&
    target.y < sponge.mouseY + range) {
    return true;
  }
  return false;
}

function seleccionar(cantidad, numeros) {
  //this.cantidad = cantidad;
  //this.numeros = numeros;

  var tamano = numeros.length;
  //var lote = new Array();

  var indice = 0;
  do {
    var aleatorio = numeros[parseInt(Math.random() * tamano)];
    if (lote.indexOf(aleatorio) != -1) {
      continue;
    } else {
      lote[indice] = aleatorio;
      indice++;
    }
  } while (lote.length < cantidad);

  //console.log(lote);
}


/* GENERALES para la plantilla */

// deshabilita el menu contextual del botón derecho en el video
function inhabilitar() {
  //alert ("Esta función está inhabilitada.\n\nPerdonen las molestias.") 
  return false
}
var elemento = document.querySelector("video");
if (elemento) {
  elemento.oncontextmenu = inhabilitar;
}



// Para pasar automaticamente a otra lamina
var key_arreglo = new Array(0, 0, 0, 0);
var key_prev = 0;
var root = this;
// codigo para pasar de pagina automaticamente
window.addEventListener("keydown", hazListener);
function hazListener(e) {
  console.log("click: " + e.keyCode);
  switch (e.keyCode) {
    case 37:
      if (key_prev == 40) {
        key_arreglo[2] = 37;
        key_prev = 37;
      } else {
        key_arreglo = [0, 0, 0, 0];
      }
      break;
    case 38:
      key_arreglo = [0, 0, 0, 0];
      key_arreglo[0] = 38;
      key_prev = 38;
      break;
    case 39:
      if (key_prev == 37) {
        key_arreglo[3] = 39;
        key_prev = 0;
        console.log(key_arreglo.toString());
        if (key_arreglo.toString() == "38,40,37,39") {
          key_arreglo = [0, 0, 0, 0];
          angular.element(document.getElementsByTagName('body')).scope().pagesService.brilla();
          angular.element(document.getElementsByTagName('body')).scope().pagesService.nextPage();
        }
      }
      break;
    case 40:
      if (key_prev == 38) {
        key_arreglo[1] = 40;
        key_prev = 40;
      } else {
        key_arreglo = [0, 0, 0, 0];
      }
      break;
  }
}

/* 2025 - PLATAFORMA LRG*/
function sendPlatform(data, done) {
  //console.log("✅ ~ bookmark:", data)
  console.log("🟡 ~ bookmark:", data, "done:",done)

  if (data == 'error') {


    window.parent.postMessage(
      JSON.stringify({
        curso: nombre_curso,
        message: "Error!",
        completado: done,
        //bookmark: `1|0|0|0|0&&${avatar}`
        bookmark: bookmark
      }),
      '*'
    );

  } else if (data == 'restart') {

    window.parent.postMessage(
      JSON.stringify({
        curso: nombre_curso,
        message: "restart!",
        completado: done,
        //bookmark: `1|0|0|0|0&&${avatar}`
        bookmark: ''
      }),
      '*'
    );

  } else {
    window.parent.postMessage(
      JSON.stringify({
        curso: nombre_curso,
        message: "todoBien!",
        completado: done,
        //bookmark: `1|0|0|0|0&&${avatar}`
        bookmark: bookmark
      }),
      '*'
    );


  }
}


/* 2024 LRG*/
function getVariantes(num) {
  //console.log("🚀 ~ getVariantes:::: ", num)
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getVariantes(num);
}

function setVariantes(valor, num) {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.setVariantes(valor, num);
}

//2023
function tam_json() {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getPagesLength();
  //return angular.element(document.getElementsByTagName('body')).scope().pagesService.getPages();
}
function getPages() {
  //return angular.element(document.getElementsByTagName('body')).scope().pagesService.getPagesLength();
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getPages();
}

function dameActual() {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCurrentPage();
  //return angular.element(document.getElementsByTagName('body')).scope().pagesService.getPages();
}
function irA(pagina_) {
  angular.element(document.getElementsByTagName('body')).scope().pagesService.goToPage(pagina_);
}
function irATitle(pagina_) {
  angular.element(document.getElementsByTagName('body')).scope().pagesService.goToPageTitle(pagina_);
}
function getStatusByTitle(pagina_) {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCurrentPageStatusTitle(pagina_);
}


function saveGrade(num, num_intentos, done) {

  angular.element(document.getElementsByTagName('body')).scope().scormService.saveGrade(num, num_intentos, done);
  //angular.element(document.getElementsByTagName('body')).scope().scormService.goToPage(pagina_);
}

/////////////
function set_Brilla() {
  angular.element(document.getElementsByTagName('body')).scope().pagesService.brilla();
  //angular.element(document.getElementsByTagName('body')).scope().scormService.goToPage(pagina_);
}
/* 2024 LRG*/
function set_reiniciarCurso() {
  angular.element(document.getElementsByTagName('body')).scope().pagesService.reiniciarCurso();
  //angular.element(document.getElementsByTagName('body')).scope().scormService.goToPage(pagina_);
}
/////////////

function setCalif(num, num_intentos, done) {

  angular.element(document.getElementsByTagName('body')).scope().pagesService.setCalif(num, num_intentos, done);
  //angular.element(document.getElementsByTagName('body')).scope().scormService.goToPage(pagina_);
}

function setCalif2023(num, calif, intentos, done) {

  angular.element(document.getElementsByTagName('body')).scope().pagesService.setCalif2023(num, calif, intentos, done);
  //angular.element(document.getElementsByTagName('body')).scope().scormService.goToPage(pagina_);
}


function getDiagnostico(num) {
  console.log("🚀 ~ getDiagnostico:", num)
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getDiagnostico(num);
}

function setDiagnostico(num, valor) {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.setDiagnostico(num, valor);
}


function getGrade() {

  return angular.element(document.getElementsByTagName('body')).scope().scormService.getGrade();
}

function getCalif(num) {

  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCalif(num);
}


function getIntentos(num) {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getIntentos(num);
}

function setIntentos(valor, num) {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.setIntentos(valor, num);
}


function setCurrentPage(num) {
  angular.element(document.getElementsByTagName('body')).scope().pagesService.setCurrentPage(num);
}

function getPageStatus(num) {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getPageStatus(num);
}


function getCalifTotales(pagina_) {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCalifTotales(pagina_);
}

function getCalifCorrectas(pagina_) {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCalifCorrectas(pagina_);
}

function verBookmark() {
  console.log("Bookmarck desde window");
  angular.element(document.getElementsByTagName('body')).scope().openBookMark();
}


function getBookmark(num) {
  return angular.element(document.getElementsByTagName('body')).scope().pagesService.getBookmark();
}

function setBookmark(num) {
  angular.element(document.getElementsByTagName('body')).scope().pagesService.setBookmark(num);
}


function getStatus() {
  return angular.element(document.getElementsByTagName('body')).scope().scormService.getStatus();
}


function setValue(cual_variable, status) {
  angular.element(document.getElementsByTagName('body')).scope().scormService.setValue(cual_variable, status);
}

function getValue(cual_variable) {
  angular.element(document.getElementsByTagName('body')).scope().scormService.setValue(cual_variable);
}

function saveStatus(cual_variable) {
  angular.element(document.getElementsByTagName('body')).scope().scormService.saveStatus(cual_variable);
}


/* Escibir en un texto del index */
function textosServiceSetValor(num, str) {
  angular.element(document.getElementsByTagName('body')).scope().textosService.setValor(num, str);
}
function textosServiceGetValor(num) {
  return angular.element(document.getElementsByTagName('body')).scope().textosService.getValor(num);
}

function ocultaTexto(num) {
  angular.element(document.getElementsByTagName('body')).scope().textosService.ocultarTextos(num);
}

function muestraTexto(num) {
  angular.element(document.getElementsByTagName('body')).scope().textosService.mostrarTextos(num);
}


/**/
function HazCerrar() {
  console.log("cerrar MODAL::::");
  // quito el contenido del Elearning
  angular.element(document.getElementsByTagName('body')).scope().closeModal();
}

//window.parent.allowfullscreen = true;
/* if (parent != null) {
  if (parent.document != null) {
    var iframe = parent.document.querySelectorAll("iframe");
    //var frames = parent.document.querySelectorAll("#activityFrame"); 

    //console.log(iframe);
    if (iframe != null) {
      for (var i = 0; i < iframe.length; i++) {
        // console.log(iframe[i]);
        iframe[i].allowfullscreen = true;
        iframe[i].setAttribute("allowFullScreen", "true");
      }
      //iframe.allowFullScreen = true; 
      //iframe.setAttribute("allowFullScreen","true"); 
    }

  }
} */


function handleStart(evt) {
  evt.preventDefault();
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    //console.log(touches[i]);
  }
}

function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

}

function handleEnd(evt) {
  evt.preventDefault();
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;


  for (var i = 0; i < touches.length; i++) {
    //console.log(touches[i]);
  }
}

function handleCancel(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    //console.log(touches[i]);
  }
}


function startup() {
  var el = document.getElementById("canvas");
  //console.log("::::::: HACER Eventos TOuch a CANVAS");
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchleave", handleEnd, false);
  el.addEventListener("touchmove", handleMove, false);
}
/*
$.fn.addTouch = function(){
  this.each(function(i,el){
    $(el).bind('touchstart touchmove touchend touchcancel',function(){
      //we pass the original event object because the jQuery event
      //object is normalized to w3c specs and does not provide the TouchList
      handleTouch(event);
    });
  });
 
  var handleTouch = function(event)
  {
    var touches = event.changedTouches,
            first = touches[0],
            type = '';
 
    switch(event.type)
    {
      case 'touchstart':
        type = 'mousedown';
        break;
 
      case 'touchmove':
        type = 'mousemove';
        event.preventDefault();
        break;
 
      case 'touchend':
        type = 'mouseup';
        break;
 
      default:  
      4
        return;
    }
 
    var simulatedEvent = document.createEvent('MouseEvent');
    simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
    first.target.dispatchEvent(simulatedEvent);
  };
};
*/
