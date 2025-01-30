    /*-----------------*/
  
  
    function chk_vistos(num) {
      console.log("chk_vistos");
      console.log("🚀 ~ getVariantes----:", window.parent.getVariantes(actual))
      //console.log("🚀 ~ actual:", actual)
    
      if (window.parent.getVariantes(actual) != undefined && window.parent.getVariantes(actual) != 0) {
        chk = window.parent.getVariantes(actual).split(",");
        //atv = window.parent.getVariantes(actual);
      } /* else {
            atv = [0,0];
          } */
    
      if (!num) {
        console.log("🚀 ~ no existe:")
        chk_btns();
      }
    
      if (window.parent.getPageStatus(actual) === 3) {
        $('.avanzar').removeClass("disabled");
        //$('.mensaje').hide();
      } else {
        $('.avanzar').addClass("disabled");
      }
  
        /*CHECAR SECCIONES para el menu lateral*/
        var chk_sec = [1,2,3,4,5,6,7,8,9,10]
    
        
        for (i = 1; i <= chk_sec.length; i++) {
          $('.can' + i).hide();
          $('.god' + i).hide();
          $('.btn' + i).addClass("disabled");
        }
    
        $('.btn' + actual).addClass("w--current");
        $('.btn' + actual).removeClass("disabled");
  
      for (i = 1; i <= chk_sec.length; i++) {
  
        z = i + 1;
        console.log("@@@@@@@@@@.getPageStatus---", window.parent.getPageStatus(chk_sec[i-1]), "--- ", chk_sec[i-1]);
        if (window.parent.getPageStatus(chk_sec[i-1]) === 3) {
          /* console.log('SE COMPLETO', chk_sec[i - 1] )
          console.log('god', '.god' + (chk_sec[i - 1] - 1))
          console.log('btn', '.btn' + (chk_sec[i - 1] - 1)) */
  
          $('.btn' + chk_sec[i-1]).removeClass("disabled");
  
          //habilitar el que sigue
          if (z <= chk_sec.length) {
            $('.btn' + chk_sec[z - 1]).removeClass("disabled");
          }
  
        } else if (window.parent.getPageStatus(chk_sec[i-1]) != 3) {
  
          if ((chk_sec[i-1]) != actual) {
            $('.can' + chk_sec[i-1]).show();
          }  
        } 
      }
      console.log("------------")
    }
    
    function hazVisto(num) {
      console.log("hazVisto:: ", num);
      if (window.parent.getPageStatus(num) != 3) {
        window.parent.setCurrentPage(num);
        window.parent.setCalif(1, 1, 3);
      }
      chk_vistos(num);
    }
    
    function hazVisto_url(num, url_, type) {
      console.log("hazVisto_url:: " + num + "-- " + url_);
      if (window.parent.getPageStatus(num) != 3) {
        window.parent.setCurrentPage(num);
        window.parent.setCalif(1, 1, 3);
      }
      chk_vistos();
      window.open(url_, "_blank");
    }
    
    function chk_scroll() {
      //console.log("GO!!");
      if (((window.innerHeight + window.pageYOffset) + 300) >= document.body.offsetHeight) {
        if (window.parent.getPageStatus(actual) != 3) {
          window.parent.setCurrentPage(actual);
          window.parent.setCalif(1, 1, 3);
          console.log("GO!!");
          //alert("GO!!");
          chk_vistos();
        }
      }
    };
    
    window.onscroll = function (ev) {
      //chk_scroll();
    };