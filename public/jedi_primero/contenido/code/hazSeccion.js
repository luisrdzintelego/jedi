function hazSeccion(goTo, este_btn) {
  console.log("🚀 ~ goTo:-----", goTo)

  let ruta_ = "";
  switch(goTo){
    case 1:
      ruta_ = "index.html";
      break;
    case 2:
      ruta_ = "modulo1.html";                
      break;
    case 3:
      ruta_ = "modulo2.html";
      break;
    case 4:
      ruta_ = "modulo3.html";
      break;
  }

  if (este_btn) {
    console.log("🚀 ~ OBJETO:-----", este_btn)
    var lastClass = $(este_btn).attr('class').split(' ').pop();
    console.log("---- lastClass", lastClass)
    console.log("---- lastClass DISABLED", $(este_btn).hasClass("disabled"))

    /*
    if(window.parent.getPageStatus(goTo+1)>1 || $(this).hasClass("disabled")==false){
      window.open(ruta_, "_self");
    }
    */
    //console.log("---- getPageStatus", window.parent.getPageStatus(goTo+1))
    //console.log("---- getPage", window.parent.getPages()[goTo])
    //console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", window.parent.getPages()[goTo])

    if ($(este_btn).hasClass("disabled") == false) {
      window.open(ruta_, "_self");
    }
  }else{
    window.open(ruta_, "_self");
  }
  //window.open(ruta_, "_self");
}
//completa la lamina y brinca a la que le indiques
function complete_go(completa, goTo, este_boton) {

  if (window.parent.getPageStatus(completa) != 3) {
    window.parent.setCurrentPage(completa);
    window.parent.setCalif(1, 1, 3);
  }
  
  hazSeccion(goTo, este_boton);
  //window.open("que-es-el-acr.html", "_self");
}
