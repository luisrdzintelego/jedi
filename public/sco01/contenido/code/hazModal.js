function HazModal(_str) {
  Resize();
  var ruta = "";
  mi_ruta = _str;
  switch (_str) {
    case "video":
      //setCurrentPage(3);
      ruta = "videos/indexp1_v0.html";
      break;
    case "estra":
      //setCurrentPage(3);
      ruta = "estratificacion.html";
      break;
    case "pareto":
      //setCurrentPage(3);
      ruta = "diagrama-de-pareto.html";
      break;
    case "causaefecto":
      //setCurrentPage(3);
      ruta = "diagrama-de-causa-y-efecto.html";
      break;
  }
  //console.log("ruta: " + ruta); 
  //console.log(ruta.lastIndexOf("pdf"));
  if (ruta.lastIndexOf("pdf") != -1 || ruta.lastIndexOf("http") != -1) {
    // actualiza el currentPage de donde estoy
    //setCurrentPage(2);
    /* Guarda la calificacion */
    //saveGrade();   
    // abre el pdf o la liga
    window.open(ruta, "_blank");
  } else if (ruta.indexOf("popup") != -1) {
    /* setTimeout(function(){
         mod.classList.add("visible");
     },100);*/
  } else if (ruta != "") {
    console.log("🚀 ~ ruta:", ruta)

    //$(".w-nav-brand").click();
    //$("body").css('overflow','hidden')

    $("body").addClass('noscroll')

    var iframRecursosNuevos_ = document.getElementById("popupMC");
    iframRecursosNuevos_.style.display = "block";
    iframRecursosNuevos_.style.opacity = "1";
    console.log("Asigna : " + ruta);
    var iframRecursosNuevo_ = document.getElementById("popup1");
    iframRecursosNuevo_.src = ruta;

  }
}
// ocultar div de popup      
function HazCerrar() {
  //console.log("cerrar MODAL::::");
  // ocultar y colocar en opacity 0 a DIV de pop
  var iframRecursosNuevo_ = document.getElementById("popupMC");
  iframRecursosNuevo_.style.display = "none";
  iframRecursosNuevo_.style.opacity = "0";
  // quitar el contenido del iframe
  var iframRecursosNuevo2_ = document.getElementById("popup1");
  iframRecursosNuevo2_.src = "";
  //$("body").css('overflow', 'visible')
  $("body").removeClass('noscroll')
}
// funcion para que la ventana popup se redimensione
function Resize() {
  //console.log("Resixe");
  var iframRecursosNuevo_ = document.getElementById("popup1");
  iframRecursosNuevo_.style.height = (window.innerHeight * 1) + "px";
  iframRecursosNuevo_.style.marginTop = 0 + "px";
}
window.onresize = function () {
  Resize();
}
Resize();