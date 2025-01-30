

 ///////////////GENERALES/////////////////
 //-------------------------------------//

    var lote = new Array();
    var cantidad;
    var numeros = new Array();
    var sponge;
    var locked = "no";
    var status = "";
    var select_1 = "";
    var select_2 = "";
    var select_3 = "";
    var select_4 = "";
    var select_5 = "";
    var select_6 = "";
    var select_7 = "";
    var select_8 = "";
    var select_9 = "";
    var sRatio = 1;

    function hitTestInRange(target, range) {

      console.log(sponge);

      if (target.x > sponge.mouseX - range &&
          target.x < sponge.mouseX + range &&
          target.y > sponge.mouseY - range &&
          target.y < sponge.mouseY + range)
      {
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
        var aleatorio = numeros[parseInt(Math.random()* tamano)];
        if(lote.indexOf(aleatorio)!=-1){
          continue;
        }else{
                  lote[indice]=aleatorio;
                  indice++;
                    }
      } while(lote.length < cantidad);
   
      //console.log(lote);
    }


/* GENERALES para la plantilla */

// deshabilita el menu contextual del botón derecho en el video
    function inhabilitar(){ 
        //alert ("Esta función está inhabilitada.\n\nPerdonen las molestias.") 
        return false 
    } 
    var elemento = document.querySelector("video");
    if(elemento){
        elemento.oncontextmenu=inhabilitar; 
    }
    


// Para pasar automaticamente a otra lamina
      var key_arreglo = new Array(0,0,0,0);
      var key_prev = 0;
      var root = this;
      // codigo para pasar de pagina automaticamente
      window.addEventListener("keydown",hazListener);
      function hazListener(e){
        console.log("click: " + e.keyCode);
        switch(e.keyCode){
          case 37:
          if(key_prev==40){
            key_arreglo[2] = 37;
            key_prev = 37;
          }else{
            key_arreglo = [0,0,0,0];
          }
          break;
          case 38:
          key_arreglo = [0,0,0,0];
          key_arreglo[0] = 38;
          key_prev = 38;
          break;
          case 39:
          if(key_prev==37){
            key_arreglo[3] = 39;
            key_prev = 0;
            console.log(key_arreglo.toString());
            if(key_arreglo.toString() == "38,40,37,39"){
              key_arreglo = [0,0,0,0];
              angular.element(document.getElementsByTagName('body')).scope().pagesService.brilla();
              angular.element(document.getElementsByTagName('body')).scope().pagesService.nextPage();
            }
          }
          break;
          case 40:
          if(key_prev==38){
            key_arreglo[1] = 40;
            key_prev = 40;
          }else{
            key_arreglo = [0,0,0,0];
          }
          break;
        }
      }

      function dameActual(){
        return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCurrentPage();
        //return angular.element(document.getElementsByTagName('body')).scope().pagesService.getPages();
      }
      function irA(pagina_){
        angular.element(document.getElementsByTagName('body')).scope().pagesService.goToPage(pagina_);
      }   
      function irATitle(pagina_){
        angular.element(document.getElementsByTagName('body')).scope().pagesService.goToPageTitle(pagina_);
      }
      function getStatusByTitle(pagina_){
        return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCurrentPageStatusTitle(pagina_);
      } 

        function getCalifTotales(pagina_){
            return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCalifTotales(pagina_);
        }

        function getCalifCorrectas(pagina_){
            return angular.element(document.getElementsByTagName('body')).scope().pagesService.getCalifCorrectas(pagina_);
        }

    function verBookmark(){
        console.log("Bookmarck desde window");
        angular.element(document.getElementsByTagName('body')).scope().openBookMark();
    }

      function HazCerrar(){
        console.log("cerrar MODAL::::");
        // quito el contenido del Elearning
        angular.element(document.getElementsByTagName('body')).scope().closeModal();
       
    }


    function ultimoComentario(){
        //return angular.element(document.getElementsByTagName('body')).scope().scormService.totalComments();
        //if(window.parent){
        if(window.parent.location.href.indexOf("contenido") == -1){ 
            return window.parent.ultimoComentario();
        }else{
          return "";
        }
    }
    function guardaComentario(n,str_){
        //angular.element(document.getElementsByTagName('body')).scope().scormService.setComment(n, str_, dameActual());
        //if(window.parent){
        if(window.parent.location.href.indexOf("contenido") == -1){   
            window.parent.guardaComentario(n,str_,dameActual(), "2019-12-30T00:00:00");
        }
    }
    function getComentario(n){
        //return angular.element(document.getElementsByTagName('body')).scope().scormService.getComments(n); 
        //if(window.parent){
        if(window.parent.location.href.indexOf("contenido") == -1){   
            return window.parent.getComentario(n);
        }else{
          return "";
        }
    }
    function getLocacionComentario(n){
        //return angular.element(document.getElementsByTagName('body')).scope().scormService.getLocationComments(n); 
        //if(window.parent){
        if(window.parent.location.href.indexOf("contenido") == -1){   
            return window.parent.getLocacionComentario(n);
        }else{
          return "";
        }
    }
    function getTimeStampComentario(n){
        //return angular.element(document.getElementsByTagName('body')).scope().scormService.getTimeStampComments(n); 
        //if(window.parent){
        if(window.parent.location.href.indexOf("contenido") == -1){   
            return window.parent.getTimeStampComentario(n);
        }else{
          return "";
        }
    }


    /* -------------------------------------------------------------------------
    FUNCIONES PARA VIDEO INTERACTIVO 
    ---------------------------------------------------------------------------- */
    var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };

  var esmovil = false;
  if( isMobile.any() ) esmovil=true;


  
    function seekVideo(num){
      angular.element(document.getElementsByTagName('body')).scope().seekVideo(num);
    }
    function continueVideo(num){
      angular.element(document.getElementsByTagName('body')).scope().continueVideo();
    }
    function openWeb(str){
        //console.log("Abrir liga::. " + str);
        //window.open(str,"_blank");
    }
    function detectaURL(str){
       //var cadena_ = angular.element(document.getElementsByTagName('body')).scope().cuepoint_recurso;
       var content_obj = angular.element(document.getElementsByTagName('body')).scope().content_params;
       var mark_obj = angular.element(document.getElementsByTagName('body')).scope().mark_params;

      if(mark_obj!="" && mark_obj!=null){
        //console.log("CADENA:: " + mark_obj.url + ".indexOf("+str+") :::: " + (mark_obj.url.indexOf(str)!=-1));
        if(mark_obj.url.indexOf(str)!=-1){
           return true;
        }
      }
      if(content_obj!="" && content_obj!=null){
         //console.log("CADENA:: " + content_obj.url + ".indexOf("+str+") :::: " + (content_obj.url.indexOf(str)!=-1));
         if(content_obj.url.indexOf(str)!=-1){
            return true;
         }
       }

       return false;
    }
    function detectaShowArea(){
      return angular.element(document.getElementsByTagName('body')).scope().contenttouch;
    }
    
    function detectaSensitiveArea(){
      return angular.element(document.getElementsByTagName('body')).scope().marktouch;
    }

    function showArea(){
      var content_obj = angular.element(document.getElementsByTagName('body')).scope().content_params;   
/*
      if(params.type==="content" || params.type==="question"){
        content_obj.visible = true;
      }

    // especial para la opcion 2
    if(params.type==="hotspot" && params.bindingto!=""){
        var new_obj = JSON.parse(params.bindingto);
        new_obj.visible = true;
    }
    */


      content_obj.visible = true;
      //angular.element(document.getElementsByTagName('body')).scope().contenttouch = true;
    }
    function hideArea(){
      var content_obj = angular.element(document.getElementsByTagName('body')).scope().content_params;
      content_obj.visible = false;
      
      angular.element(document.getElementsByTagName('body')).scope().continueVideo();
    }
    /* Hasta aqui */



    //window.parent.allowfullscreen = true;
      if(parent != null){ 
        if(parent.document != null){ 
          var iframe = parent.document.querySelectorAll("iframe"); 
          //var frames = parent.document.querySelectorAll("#activityFrame"); 

          //console.log(iframe);
          if(iframe!=null){
              for(var i=0;i<iframe.length;i++){
               // console.log(iframe[i]);
                  iframe[i].allowfullscreen = true;
                  iframe[i].setAttribute("allowFullScreen","true"); 
              }
              //iframe.allowFullScreen = true; 
              //iframe.setAttribute("allowFullScreen","true"); 
          }
          
        } 
      }


 function handleStart(evt) {
  evt.preventDefault();
  var el = document.getElementById("canvas");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i=0; i<touches.length; i++) {
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


  for (var i=0; i<touches.length; i++) {
    //console.log(touches[i]);
  }
}

function handleCancel(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;

  for (var i=0; i<touches.length; i++) {
    //console.log(touches[i]);
  }
}


function startup() {
  var el = document.getElementById("canvas");
    console.log("::::::: HACER Eventos TOuch a CANVAS");
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
