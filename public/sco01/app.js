(function() {
    'use strict';
    var version = '2024.1';
    var plantillaApp = angular.module('plantillaApp', 
        ['snap', 
        'ngZavModal', 
        'scormwrapper', 
        'angularLoad', 
        'angularSpinner',
        "ngSanitize",
        "com.2fdevs.videogular",
        "com.2fdevs.videogular.plugins.controls",
        "com.2fdevs.videogular.plugins.overlayplay",
        "com.2fdevs.videogular.plugins.buffering"
        ]);

    plantillaApp.config(function(snapRemoteProvider) {
        snapRemoteProvider.globalOptions = {
          disable: 'right',
          dragger: null,
          maxPosition: 255,
          hyperextensible: false,
          resistance: 0.5,
          tapToClose: false
          // ... others options
      };
    });

    plantillaApp.value('debug', true);
    plantillaApp.value('masteryScore', 80);

    plantillaApp.run([
      '$window',
      '$rootScope',
      function($window, scormService) {
        $window.addEventListener('beforeunload', function() {
            
            // checa si ya hay mas de 3 intentos
            /*var check_calif = parseInt(window.pagesService.getCalif());	
            var check_intentos = parseInt(window.pagesService.getIntentos());
            if((check_calif >= 80 || check_intentos>=3) && (window.scormService.getStatus() == "incomplete")){ // || window.scormService.getStatus() == "passed" || this.scormService.getStatus() == "failed" || ){
                
                if(check_calif >= 80) {
                         console.log("GUARDA scormService PASSED ANTES de FINISH:::::");
                         window.scormService.setValue("cmi.progress_measure","1"); 
                         window.scormService.setValue("cmi.objectives.0.progress_measure","1");

                         window.scormService.setValue("cmi.objectives.0.completion_status","completed");
                         window.scormService.setValue("cmi.objectives.0.success_status","passed");

                         window.scormService.saveStatus("completed");
                         window.scormService.saveStatus("passed");
                } else {
                    if(check_intentos>=3){		
                        console.log("GUARDA scormService FAILED ANTES de FINISH:::::");

                        window.scormService.setValue("cmi.progress_measure","1"); 
                        window.scormService.setValue("cmi.objectives.0.progress_measure","1");

                        window.scormService.setValue("cmi.objectives.0.completion_status","completed");
                        window.scormService.setValue("cmi.objectives.0.success_status","passed");

                        window.scormService.saveStatus("completed");
                        window.scormService.saveStatus("failed");	
                    }
                }
            }
            
            */
            window.scormService.finish();
        });
          
      }
    ]);

    plantillaApp.controller('plantillaAppController', function($scope, $window, PagesService, $rootScope, snapRemote, scormService, gradeFactory, GradeService, ModalsService, $sce, videoService, $timeout, textosService){
        textosService.init();
        scormService.init();
        PagesService.init();
        
        ModalsService.init($scope);
                
        $window.scormService = scormService;
        $scope.scormService = scormService;

        $window.pagesService = PagesService;
        $scope.pagesService = PagesService;
        
        /* se agrga al scope el objeto textosService */
        $window.textosService = textosService;
        $scope.textosService = textosService;

        $scope.pagesArray = PagesService.getPages();
        $scope.cargando = false;
        $scope.audio = true;
        $scope.nameUser = '';
	    $scope.url_recurso = "";
        $scope.url_inicio = "";
        $scope.grade = 0;
        $scope.response = 'false';
        $scope.courseTitle = PagesService.getCourseTitle();

        // Video 
        $scope.videoVisible = false;
        $scope.state = null;
        $scope.API = null;
        $scope.currentVideo = 0;

        $scope.videos = [
            {
                sources: [
                    {src: $sce.trustAsResourceUrl("videos/video1.mp4"), type: "video/mp4"}
                ]
            }
        ];

        $scope.config = {
                preload: 'auto',
                autoplay: false,
                /*sources: $scope.videos[0].sources,*/
                theme: "bower_components/videogular-themes-default/videogular.css",
                plugins: {
                    controls: {
                        autoHide: true,
                        autoHideTime: 5000
                    }
                }
            };

        $scope.onPlayerReady = function(API) {
            $scope.API = API;
            videoService.init($scope);
            console.log('init video...');
        };

        $scope.onCompleteVideo = function() {
                $scope.isCompleted = true;
                $scope.pagesService.brilla(); // para que el boton de avance parpadeee
                console.log('Video is completed');
                //$scope.pagesService.brilla();
        };

        $scope.setVideo = function(index) {
                $scope.API.stop();
                $scope.videoVisible = true;
                $scope.isCompleted = false;
                $scope.currentVideo = index;
                $scope.config.sources = $scope.videos[index].sources;
                //$timeout($scope.API.play.bind($scope.API), 2000);
                $timeout($scope.API.play.bind($scope.API), 100);
                /*$timeout( function () {
                    console.log('play');
                    //$scope.API.play.bind($scope.API);
                    //$scope.API.play();
                    //$scope.API.stop();
                }, 1000);*/
        };

        $scope.stopVideo = function() {
                $scope.API.stop();
                $scope.videoVisible = false;
                $scope.isCompleted = false;
        };

        ///// Especial para esta version de CURSO
        $scope.goToPage = function(page){
            /*if(page==1){
                PagesService.goToPage(page);
                snapRemote.close();
            }else{// if(PagesService.getCurrentPageStatus()){
                console.log("currentPage:: " + $scope.pagesService.getCurrentPage());             
                if($scope.pagesService.getCurrentPage()>1){                
                    PagesService.goToPage(page);
                    snapRemote.close();
                }
            }   */         
            PagesService.goToPage(page);
            snapRemote.close();
        };

        $scope.toogleAudio = function() {            
            //var iVideo = $window.video1;
            if($scope.audio){
                createjs.Sound.volume = 0;
        
                /*if(iVideo!=undefined){
                    iVideo.volume=0;
                }*/

                $scope.audio = false;
            } else {
                createjs.Sound.volume = 1;
                 
                /*if(iVideo!=undefined){
                    iVideo.volume=1;
                }*/

                $scope.audio = true;
            }
        };

        $scope.openHelp = function(){
            $scope.openHelpModal = true;
            $scope.url_recurso = "contenido/ayuda/ayuda.html";
            snapRemote.close();
        };

        $scope.openGlossary = function(){
            $scope.openGlosarioModal = true;
            $scope.url_recurso = "contenido/glosario/glosario.html";
            snapRemote.close();
        };

        $scope.openTemario = function(){
            $scope.openTemarioModal = true;
            $scope.url_recurso = "contenido/temario/temario.html";
            snapRemote.close();
        };


        $scope.openBookMark = function(){			
            console.log("openBOKMARK:::::");
			
            $scope.openBookMarkModal = true;
            $scope.url_recurso = "contenido/bookmark/bookmark.html";
			
            snapRemote.close();
        };	
        
        $scope.closeModal = function(){
            $scope.openTemarioModal = false;
            $scope.openHelpModal = false;
            $scope.openGlosarioModal = false;
            $scope.openQuitModal = false;
            $scope.openBookMarkModal = false;
            $scope.url_recurso = "contenido/blank/blank.html";
            snapRemote.close();
        };

        $scope.openQuit = function(){
            $scope.openQuitModal = true;
            $scope.url_recurso = "contenido/salir/salir.html";
            snapRemote.close();
            //$window.location.href = "contenido/salir/salir.html";
            /*$scope.openQuitModal = true;
            snapRemote.close();
            scormService.finish();*/
            //$window.top.close();
             //$window.parent.HazCerrar();
        };

        $scope.openSendData = function(){
            console.log('click openSendData');
            $scope.grade = GradeService.getGrade();
            $scope.response = '';
            $scope.courseTitle = PagesService.getCourseTitle();
            $scope.openSendDataModal = true;
            snapRemote.close();
        };

        $scope.sendGrade = function(name){

            var obj = {
                name: name,
                grade: $scope.grade,
                courseTitle: PagesService.getCourseTitle()
            };

            gradeFactory.sendGrade(obj).then(function(response){
                //success
                console.log(response.data.message);
                $scope.response = response.data.message;
            },function (error) {
                // body...
                console.log(error);
            });
        };

        $scope.iframeLoadedCallBack = function(){
          $scope.cargando = true;
        };

        $scope.$on('page_event', function (event, page) {

            $scope.cargando = false;
            //console.log("cambiando " + page.url);
            $scope.pagina = "contenido/" + page.url;

            /*✅LRG 2024*/
            const pag = pag_actual;

            if (pag != "" && pag != null && pag != undefined) {
                console.log("🚀 ~ ----------------- page_event")
                console.log("🚀 ~ pagina actual:", pag)
                console.log("🚀 ~ -----------------")
                $scope.url_inicio = "contenido/" + pag + ".html";
                console.log("🚀 -- si lo lee javo ~ $scope.url_inicio:", $scope.url_inicio)

            } else {
                console.log("🚀 ~ ----------------- page_event inicial")
                console.log("🚀 ~ pagina actual:", pag)
                console.log("🚀 ~ -----------------")
                $scope.url_inicio = "contenido/index.html";
            }
            /*----------*/

            $scope.pagesArray = PagesService.getPages();
            $scope.$apply();

        });

        /*⬇️-2022*/
        /*
        $scope.$on('page_event_status', function (event) {
            //console.log('page_event_status');
            $scope.pagesArray = PagesService.getPages();

            const pag = pag_actual;
            console.log("🚀 ~ ----------------- page_event_status")
            console.log("🚀 ~ pag:", pag)
            console.log("🚀 ~ -----------------")
            if (pag != "" && pag != null && pag != undefined) {
                console.log("val1 " + pag);
                $scope.url_inicio = "contenido/" + pag + ".html";
            } else {
                $scope.url_inicio = "contenido/index.html";
            }
            $scope.$apply();
        });
        */
    });

    plantillaApp.service('PagesService', function ($http, $rootScope, scormService, $window, textosService) {
        var _title = "";
        var _subtitle = "";
        var _currentPage = "";
        var _pagesArray = [];
        var _pagesLength = _pagesArray.length;
        var _nextEnabled = false;
        var _brillando = false;

        var _verbotones = true;

        function saveAvance(){
             console.log("🚀 ~ saveAvance:")
             var cadena="";
            
            //console.log("FORMA CADENA AVANCE RAIZ::");
            var todos_vistos = true;

            for (var j = 0; j < _pagesArray.length; j++) {
                //console.log("_pagesArray[j]::: " + _pagesArray[j]);
                //cadena += (_pagesArray[j].done ? 1:0);

                if(_pagesArray[j].done!="3"){
                    todos_vistos = false;
                }

                cadena += (_pagesArray[j].done);
                //console.log("cadena DONE: " + cadena);
                
                if(_pagesArray[j].calif!=undefined && _pagesArray[j].calif!=null){
                    cadena += "-"+(_pagesArray[j].calif);
                }else{
                    cadena += "-0";
                }
                //console.log("cadena CALIF: " + cadena);
                
                if(_pagesArray[j].intentos!=undefined && _pagesArray[j].intentos!=null){
                    cadena += "-"+(_pagesArray[j].intentos);
                }else{
                    cadena += "-0";
                } 
                //console.log("cadena INTENTOS: " + cadena);
                
                if(_pagesArray[j].variantes!=undefined && _pagesArray[j].variantes!=null){
                    cadena += "-"+(_pagesArray[j].variantes);
                }else{
                    cadena += "-0";
                }
                /*
                //console.log("cadena TIEMPO: " + cadena);
                if(_pagesArray[j].califtotales!=undefined && _pagesArray[j].califtotales!=null){
                    cadena += "-"+(_pagesArray[j].califtotales);
                }            
                //console.log("cadena califtotales: " + cadena);  
                if(_pagesArray[j].califcorrectas!=undefined && _pagesArray[j].califcorrectas!=null){
                    cadena += "-"+(_pagesArray[j].califcorrectas);
                }
                //console.log("cadena califcorrectas: " + cadena);
                */

                if(j<_pagesArray.length-1){
                    cadena += "|";
                }
            }

            //scormService.saveLocation(cadena + "&&" + _currentPage); 
            scormService.saveLocation(cadena + "&&" + _currentPage + "&&" + pag_actual + "&&" + nombre);
            
            console.log("🚀 ~ todos_vistos:")

            if(todos_vistos === true){

                //scormService.saveStatus("completed");

                /*CURSO SIN EVALUACION*/

                /*
                scormService.setValue("cmi.progress_measure","1"); 
			    scormService.setValue("cmi.objectives.0.progress_measure","1");
			 
			    scormService.setValue("cmi.objectives.0.completion_status","completed");
			    scormService.setValue("cmi.objectives.0.success_status","passed");
			 
			    scormService.saveStatus("completed");
			    scormService.saveStatus("passed");
                	    scormService.saveGrade(100,1);
                */


                /*CURSO CON EVELUACION*/
                scormService.setValue("cmi.progress_measure","1"); 
			    scormService.setValue("cmi.objectives.0.progress_measure","1");
			 
			    scormService.setValue("cmi.objectives.0.completion_status","completed");
			    scormService.setValue("cmi.objectives.0.success_status","passed");
			 
			    scormService.saveStatus("completed");
			    //scormService.saveStatus("passed");

            }

        }
        
        function _broadcast () {
            console.log("🚀 ~ _broadcast:")
            $rootScope.$broadcast('page_event', _pagesArray[_currentPage-1]);
            /* Coloca suspend en location*/
            //saveAvance();
            //_broadcastStatus();          
        }

        /*⬇️-2022*/ 
        /*--------
        function _broadcastStatus() {
            $rootScope.$broadcast('page_event_status');
            //console.log(_pagesArray);
        }
        ---------*/
        
        function init() {
            $http.get('contenido/temario.json').success(function (data) {
                _currentPage = 1;
                _title = data.title;
                _pagesArray = data.pages;
                _pagesLength = _pagesArray.length;

                //scorm stuff
                //var location = scormService.getLocation();
                var location = "";

                /* Actualiza Suspend data en JSON*/
                //var get_cadena=scormService.getLocation();

                async function getMessage() {
                    //const reader = new FileReader();
                   await new Promise((res, reject) => { 
                        window.addEventListener('message', (event) => {
                            //res(JSON.stringify(event.data));
                            res(event.data.toString());
                            //console.log("🚀 ~ event.data.stringify():", JSON.stringify(event.data))
                            //console.log("🚀 ~ event.data.toString():", event.data.toString())
                        });
                    //}).then(result => { return result });
                    }).then((result) => {
                        console.log(result)
                        var arreglo_cadena = result.split("&&");
                        console.log("🚀 ~ arreglo_cadena:", arreglo_cadena)
                        location = arreglo_cadena[1];
                        console.log("🚀 ~ location:", location)

                        var cadena_array = arreglo_cadena[0].split("|");
                        console.log("🚀 ~ cadena_array:", cadena_array)
                        for (var j = 0; j < _pagesArray.length; j++) {

                            var _str_array = cadena_array[j].split("-");
                            if (_str_array.length > 1) {
                                //_pagesArray[j].done = (_str_array[0]==1);
                                _pagesArray[j].done = (_str_array[0]);
                                _pagesArray[j].calif = _str_array[1];
                                _pagesArray[j].intentos = _str_array[2];
                                _pagesArray[j].variantes = _str_array[3];
                                //_pagesArray[j].califtotales=_str_array[4];
                                //_pagesArray[j].califcorrectas=_str_array[5];
                            } else {
                                //_pagesArray[j].done = (cadena_array[j]==1);
                                _pagesArray[j].done = (cadena_array[j]);
                            }

                        }
                        pag_actual = arreglo_cadena[2];
                        console.log("🚀 ~ pag_actual:", pag_actual)
                        nombre = arreglo_cadena[3];
                        console.log("🚀 ~ nombre:", nombre)
                        avatar = arreglo_cadena[4];
                        console.log("🚀 ~ avatar:", avatar)

                        console.log(`ESTE ES EL RESULTADO FINAL: ${pag_actual}`);

                        /* $scope.$apply(() => {
                            $scope.item = updatedItem
                        }) */

                    }).catch(function (error) {
                        console.log(
                            error,
                        ); /* esta línea podría arrojar error, e.g. cuando console = {} */
                    }).finally(function () {
                        _broadcast();
                    });

                }
                

                /*✅LRG 2024*/
                console.log("🚀 ~ DATA.test::::", data.test)
                if (data.test == true) {
                    var result = data.location_json;

                    if (result) {
                        var arreglo_cadena = result.split("&&");
                        location = arreglo_cadena[1];

                        var cadena_array = arreglo_cadena[0].split("|");
                        for (var j = 0; j < _pagesArray.length; j++) {

                            var _str_array = cadena_array[j].split("-");
                            if (_str_array.length > 1) {
                                //_pagesArray[j].done = (_str_array[0]==1);
                                _pagesArray[j].done = (_str_array[0]);
                                _pagesArray[j].calif = _str_array[1];
                                _pagesArray[j].intentos = _str_array[2];
                                _pagesArray[j].variantes = _str_array[3];
                                //_pagesArray[j].califtotales=_str_array[4];
                                //_pagesArray[j].califcorrectas=_str_array[5];
                            } else {
                                //_pagesArray[j].done = (cadena_array[j]==1);
                                _pagesArray[j].done = (cadena_array[j]);
                            }

                        }
                        pag_actual = arreglo_cadena[2];
                        nombre = arreglo_cadena[3];
                        avatar = arreglo_cadena[4];
                    }

                    _broadcast();

                } else {

                    getMessage();
                    
                    //var result = '3-1-1-0|3-1-1-0,1,1,1,1,1,1,1,1,1|1-0-0-0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1|1-0-0-0&&2&&modulo2&&Luis Eduar&&6'
                    //var result = bookmark_cadena;

                    /* console.log("🚀 ~ bookmark_cadena:", bookmark_cadena)

                    var arreglo_cadena = bookmark_cadena.split("&&");

                        location = arreglo_cadena[1];

                        var cadena_array = arreglo_cadena[0].split("|");
                        for (var j = 0; j < _pagesArray.length; j++) {

                            var _str_array = cadena_array[j].split("-");
                            if (_str_array.length > 1) {
                                //_pagesArray[j].done = (_str_array[0]==1);
                                _pagesArray[j].done = (_str_array[0]);
                                _pagesArray[j].calif = _str_array[1];
                                _pagesArray[j].intentos = _str_array[2];
                                _pagesArray[j].variantes = _str_array[3];
                                //_pagesArray[j].califtotales=_str_array[4];
                                //_pagesArray[j].califcorrectas=_str_array[5];
                            } else {
                                //_pagesArray[j].done = (cadena_array[j]==1);
                                _pagesArray[j].done = (cadena_array[j]);
                            }

                        }
                        pag_actual = arreglo_cadena[2];
                        nombre = arreglo_cadena[3];
                        avatar = arreglo_cadena[4];
                    

                    _broadcast(); */
                        
                }  

            });
        }

        function getCurrentPage () {
            return _currentPage;
        }

        function getCurrentPageStatus () {
            return _pagesArray[_currentPage - 1].done;
        }
        //
        function getCurrentPageStatusTitle (tit) { 
            var done_ = 1;
            for (var j = 0; j < _pagesArray.length; j++) {
                if(_pagesArray[j].title == String(tit)){
                    done_ = parseInt(_pagesArray[j].done);
                    break;
                }
                
            }
            return done_;
        }

        function getPageStatus (num) {
            //onsole.log("regresa: " + _pagesArray[num - 1].done);
            //console.log("_pagesArray: ", _pagesArray);

            return parseInt(_pagesArray[num - 1].done);

        }

        function getCourseTitle () {
            return _title;
        }

        function getCurrentSubtitle () {
            return _pagesArray[_currentPage - 1].name;
        }

        function getPages() {
            return _pagesArray;
        }
        /*LRG 2023*/
        function getPagesLength() {
            return _pagesArray.length;
        }
        /*----------*/


        function previousPage() {
            _brillando = false;
            _verbotones = true;

            /*if(_currentPage==12){
                _currentPage=7;
            }*/
            _currentPage--;
            //_subtitle = _pagesArray[_currentPage - 1].name;
            _broadcast ();
        }

       function nextPage() {
            console.log(_currentPage +" === " + _pagesArray.length);
            _brillando = false;
           _verbotones = true;
            if(_currentPage === _pagesArray.length){
                //scormService.Continue();
            }else{
                if(_pagesArray[_currentPage-1].done){ 
                    _pagesArray[_currentPage-1].done = 3;
                    _currentPage++;
                    //_subtitle = _pagesArray[_currentPage - 1].name;
                    _broadcast ();
                }
            }
          
        }

        function goToPage(page) {
            _currentPage = page;
            _brillando = false;
            _verbotones = true;
            //_subtitle = _pagesArray[_currentPage - 1].name;
            _broadcast ();
        }
        function goToPageTitle(tit){ 
            _brillando = false; 
            _verbotones = true;
            for (var j = 0; j < _pagesArray.length; j++) {
                if(_pagesArray[j].title == String(tit)){
                    _currentPage = j+1;
                    break;
                }
                
            }
            console.log("Ir a pagina: " + _currentPage);            
            _broadcast ();

        }

        /*✅LRG 2024*/
        function brilla() {
            console.log('✅ - brilla');
            /* Coloca suspend en location*/
            saveAvance();
            //_broadcastStatus();
        }
        /*----------*/
        function setCalif2023(num, calif, intentos, done){
            console.log("setCalif::  num: " + num + " num_intentos: " + intentos + " done: " + done);

            if(num!=undefined && num!=null){
                _pagesArray[num-1].calif = calif;  			
				
            }
            if(intentos!=undefined){
                _pagesArray[num-1].intentos = intentos;    
            }
            if(done!=undefined){
                _pagesArray[num-1].done = done;
            }

            //_broadcast();
            saveAvance();
            
            //_broadcastStatus();
            /* Verificar que ya esten todas las calificaciones o en su defecto las 2 oportunidades */

        }
        
        
        /*Funciones adicionales*/
        function setCalif(num, num_intentos, done){
            console.log(" num: " + num + " num_intentos: " + num_intentos + " done: " + done);
            if(num!=undefined){
                _pagesArray[_currentPage-1].calif = num;  			
				
            }
            if(num_intentos!=undefined){
                _pagesArray[_currentPage-1].intentos = num_intentos;    
            }
            if(done!=undefined){
                _pagesArray[_currentPage-1].done = done;
            }else{
                if(_pagesArray!=undefined && _pagesArray.length>0){
                    console.log("ACTUALIZA " + _currentPage + " a true ");
                    _pagesArray[_currentPage-1].done = 3;
                }
                
            }
            
            //_pagesArray[_currentPage-1].done = true;

            //_broadcast();
            saveAvance();
            //_broadcastStatus();


        }
        function getCalif(num){

            console.log("Regresa Calif:..");
            //console.log("Regresa Calif: " + _pagesArray[_currentPage-1].calif);

            /*if(num!=undefined && num!=null){
                if(_pagesArray[num - 1].calif!=undefined && _pagesArray[num - 1].calif!=null){
                    return _pagesArray[num - 1].calif;
                }                
            }else{
                if(_pagesArray[_currentPage - 1].calif!=undefined && _pagesArray[_currentPage - 1].calif!=null){
                    return _pagesArray[_currentPage - 1].calif;
                }
            }*/

            var valor=0;
            if(num!=undefined){

                if(_pagesArray[num-1].calif!=undefined){
                    valor = parseInt(_pagesArray[num-1].calif);
                }                
            }else{
                if(_pagesArray[_currentPage-1].calif!=undefined){
                    valor = parseInt(_pagesArray[_currentPage-1].calif);
                }
            }

            console.log("Regresa Calif:..", num, "--- ", valor );

            return valor;
            
        }
        
        function setVariantes(valor, num){
            if(num!=undefined && num!=null){
                _pagesArray[num - 1].variantes = valor;
            }else{
                _pagesArray[_currentPage - 1].variantes = valor;
            }
            
        }
        function getVariantes(num){
            //console.log("🚀 ~ num:", num)
            //console.log("🚀 ~ variantes:", _pagesArray)
            //console.log("🚀 ~ variantes:", _pagesArray[num - 1].variantes)
            if(num!=undefined && num!=null){
                if(_pagesArray[num - 1].variantes!=undefined && _pagesArray[num - 1].variantes!=null){
                    //console.log("🚀 ~ num:", _pagesArray[num - 1].variantes)
                    //return _pagesArray[num - 1].variantes;
                    return _pagesArray[num - 1].variantes.toString();
                }                
            }else{
                if(_pagesArray[_currentPage - 1].variantes!=undefined && _pagesArray[_currentPage - 1].variantes!=null){

                    return _pagesArray[_currentPage - 1].variantes;

                }
            }
        }

        function setDiagnostico(num,diagnostico){
            console.log("setDiagnostico::  valor: " + diagnostico + " num: " + num);


            if(num!=undefined && num!=null){
                _pagesArray[num-1].diagnostico = diagnostico;  			
				
            }

            saveAvance();
            //_broadcastStatus();

        }
        function getDiagnostico(num){


            if(num!=undefined && num!=null){
                if(_pagesArray[num - 1].diagnostico!=undefined && _pagesArray[num - 1].diagnostico!=null){
                    return _pagesArray[num - 1].diagnostico;
                }                
            }else{
                if(_pagesArray[_currentPage - 1].diagnostico!=undefined && _pagesArray[_currentPage - 1].diagnostico!=null){
                    return _pagesArray[_currentPage - 1].diagnostico;
                }
            }

            console.log("Regresa Diagnostico:..", num);

        }

        function setIntentos(valor, num){
            if(num!=undefined && num!=null){
                _pagesArray[num - 1].intentos = valor;
            }else{
                _pagesArray[_currentPage - 1].intentos = valor;
            }                        
            
            _broadcast();
            //_broadcastStatus();
            /* Verificar que ya esten todas las calificaciones o en su defecto las 2 oportunidades */
        }
        function getIntentos(num){
            console.log("..:getIntentos:..");
            var valor = 0;
            if(num!=undefined && num!=null){
                console.log("..:getIntentos:..", num);
                if(_pagesArray[num - 1].intentos!=undefined && _pagesArray[num - 1].intentos!=null){
                    valor = parseInt(_pagesArray[num - 1].intentos);
                }            
            }else{
                 /*console.log("::_currentPage -- "+ _currentPage);
                console.log("::getIntentos -- ", _pagesArray[_currentPage - 1]);
                console.log("::getIntentos -- ", _pagesArray[_currentPage - 1].intentos);*/
                if(_pagesArray[_currentPage - 1].intentos!=undefined && _pagesArray[_currentPage - 1].intentos!=null){       
                    valor = parseInt(_pagesArray[_currentPage - 1].intentos);
                }
            }
            return valor;
        }
        
        function setCalifTotales(valor, num){
            if(num!=undefined && num!=null){
                _pagesArray[num - 1].califtotales = valor;
            }else{
                _pagesArray[_currentPage - 1].califtotales = valor;
            }
            console.log("_pagesArray[_currentPage - 1].califtotales :: "  + _pagesArray[_currentPage - 1].califtotales);
        }
        function getCalifTotales(num){
            if(num!=undefined && num!=null){
                if(_pagesArray[num - 1].califtotales!=undefined && _pagesArray[num - 1].califtotales!=null){
                    return _pagesArray[num - 1].califtotales;
                }                
            }else{
                if(_pagesArray[_currentPage - 1].califtotales!=undefined && _pagesArray[_currentPage - 1].califtotales!=null){
                    return _pagesArray[_currentPage - 1].califtotales;
                }
            }
        }
        
        function setCalifCorrectas(valor, num){
            if(num!=undefined && num!=null){
                _pagesArray[num - 1].califcorrectas = valor;
            }else{
                _pagesArray[_currentPage - 1].califcorrectas = valor;
            }
        }
        function getCalifCorrectas(num){
            if(num!=undefined && num!=null){
                if(_pagesArray[num - 1].califcorrectas!=undefined && _pagesArray[num - 1].califcorrectas!=null){
                    return _pagesArray[num - 1].califcorrectas;
                }                
            }else{
                if(_pagesArray[_currentPage - 1].califcorrectas!=undefined && _pagesArray[_currentPage - 1].califcorrectas!=null){
                    return _pagesArray[_currentPage - 1].califcorrectas;
                }
            }
        }

        function setCurrentPage(num){
            //console.log("actualiza currentPage---- "  + num);
            _currentPage = num;    
        }
        
        function getVerbotones(){
            return _verbotones;
        }
        function setVerbotones(bandera){
            _verbotones = bandera;
           // _broadcastStatus();
        }
             
        function setBookmark(num){
        }
		
        function getBookmark(num){
        }		
        
        return {
            getCourseTitle: getCourseTitle,
            getCurrentSubtitle: getCurrentSubtitle,
            getCurrentPage: getCurrentPage,
            getPageStatus: getPageStatus,
            getCurrentPageStatus: getCurrentPageStatus,
            getPages: getPages,
            /*LRG 2023*/
            getPagesLength:getPagesLength,
            /*----------*/
            pagesArray: _pagesArray,
            pagesLength: _pagesLength,
            init: init,
            previousPage: previousPage,
            nextPage: nextPage,
            goToPage: goToPage,
            brilla: brilla,
            setCurrentPage: setCurrentPage,
            goToPageTitle:goToPageTitle,
            /*⬇️-2022*/
            //brillaSinDone: brillaSinDone,
            //getBrillar: getBrillar,
            //brillaSeguros: brillaSeguros,
            //getSeguros: getSeguros,
            //detenerSeguros: detenerSeguros,
            //regresaBDPreguntas: regresaBDPreguntas,
            /*----------*/
            setCalif: setCalif,
            getCalif: getCalif,
            /*LRG 2023*/
            setVariantes: setVariantes,
            getVariantes: getVariantes,
            setCalif2023: setCalif2023,
            setDiagnostico: setDiagnostico,
            getDiagnostico: getDiagnostico,
            /*----------*/
            setIntentos: setIntentos,
            getIntentos: getIntentos,
            setCalifTotales: setCalifTotales,
            getCalifTotales: getCalifTotales,
            setCalifCorrectas: setCalifCorrectas,
            getCalifCorrectas: getCalifCorrectas,
            getCurrentPageStatusTitle: getCurrentPageStatusTitle,
            getVerbotones: getVerbotones,
            setVerbotones: setVerbotones,
            setBookmark: setBookmark,
            getBookmark: getBookmark
            
        };
    });

    plantillaApp.controller('navController', function($scope, PagesService){

        $scope.title = PagesService.getCourseTitle();
        $scope.currentPage = "";
        $scope.pagesLength = PagesService.getPages().length;
        $scope.currentPageStatus = false;
        $scope.brillar = false;
        $scope.ver_botones = true;

        $scope.goPrevious = function(){
            PagesService.previousPage();
        };

        $scope.goNext = function(){
            PagesService.nextPage();
        };

        $scope.$on('page_event', function(event, page) {
            
            $scope.stopVideo();
            
            $scope.title = PagesService.getCourseTitle();
            $scope.subtitle = page.name;
            $scope.currentPage = PagesService.getCurrentPage();
            $scope.pagesLength = PagesService.getPages().length;
            $scope.currentPageStatus = PagesService.getCurrentPageStatus();
            $scope.ver_botones = PagesService.getVerbotones();
            //$scope.$apply();
        });

        /*
        $scope.$on('page_event_status', function(event) {
            //console.log('page_event_status');
            $scope.currentPageStatus = PagesService.getCurrentPageStatus();
            $scope.brillar = PagesService.getBrillar();
            $scope.brillar_seguros = PagesService.getSeguros();
            $scope.ver_botones = PagesService.getVerbotones();
            $scope.$apply();
        });
        */

    });

   plantillaApp.service('scormService', function(scormWrapper, debug, $window){

        var api;
        var startTime;

        this.time_sco = function(intTotalMilliseconds){
            var ScormTime = "";
            
            var HundredthsOfASecond;    //decrementing counter - work at the hundreths of a second level because that is all the precision that is required
            
            var Seconds;    // 100 hundreths of a seconds
            var Minutes;    // 60 seconds
            var Hours;      // 60 minutes
            var Days;       // 24 hours
            var Months;     // assumed to be an "average" month (figures a leap year every 4 years) = ((365*4) + 1) / 48 days - 30.4375 days per month
            var Years;      // assumed to be 12 "average" months
            
            var HUNDREDTHS_PER_SECOND = 100;
            var HUNDREDTHS_PER_MINUTE = HUNDREDTHS_PER_SECOND * 60;
            var HUNDREDTHS_PER_HOUR   = HUNDREDTHS_PER_MINUTE * 60;
            var HUNDREDTHS_PER_DAY    = HUNDREDTHS_PER_HOUR * 24;
            var HUNDREDTHS_PER_MONTH  = HUNDREDTHS_PER_DAY * (((365 * 4) + 1) / 48);
            var HUNDREDTHS_PER_YEAR   = HUNDREDTHS_PER_MONTH * 12;
            
            HundredthsOfASecond = Math.floor(intTotalMilliseconds / 10);
            
            Years = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_YEAR);
            HundredthsOfASecond -= (Years * HUNDREDTHS_PER_YEAR);
            
            Months = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MONTH);
            HundredthsOfASecond -= (Months * HUNDREDTHS_PER_MONTH);
            
            Days = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_DAY);
            HundredthsOfASecond -= (Days * HUNDREDTHS_PER_DAY);
            
            Hours = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_HOUR);
            HundredthsOfASecond -= (Hours * HUNDREDTHS_PER_HOUR);
            
            Minutes = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_MINUTE);
            HundredthsOfASecond -= (Minutes * HUNDREDTHS_PER_MINUTE);
            
            Seconds = Math.floor(HundredthsOfASecond / HUNDREDTHS_PER_SECOND);
            HundredthsOfASecond -= (Seconds * HUNDREDTHS_PER_SECOND);
            
            if (Years > 0) {
                ScormTime += Years + "Y";
            }
            if (Months > 0){
                ScormTime += Months + "M";
            }
            if (Days > 0){
                ScormTime += Days + "D";
            }
            
            //check to see if we have any time before adding the "T"
            if ((HundredthsOfASecond + Seconds + Minutes + Hours) > 0 ){
                
                ScormTime += "T";
                
                if (Hours > 0){
                    ScormTime += Hours + "H";
                }
                
                if (Minutes > 0){
                    ScormTime += Minutes + "M";
                }
                
                if ((HundredthsOfASecond + Seconds) > 0){
                    ScormTime += Seconds;
                    
                    if (HundredthsOfASecond > 0){
                        ScormTime += "." + HundredthsOfASecond;
                    }
                    
                    ScormTime += "S";
                }
                
            }
            
            if (ScormTime == ""){
                ScormTime = "0S";
            }
            
            ScormTime = "P" + ScormTime;
            
            return ScormTime;
        }

        this.init = function() {
            this.log("Finding API EMPTY...");
            scormWrapper.setAPIVersion('1.2');
            api = scormWrapper.doLMSInitialize();
            
            if(api){  
                this.log('API Founded!');              
                
                startTime = new Date;

                var estatus = this.getStatus();
                if(scormWrapper.getAPIVersion()=="2004"){
                    if(estatus=="unknown"){
                        this.saveStatus('incomplete');
                    }
                }else{
                    if(estatus=="not attempted"){
                        this.saveStatus('incomplete');
                    }
                }
                
                scormWrapper.doLMSCommit();
            }
        };

        this.finish = function() {
            this.log('Finish Course EMPTY');
            if(api){
                // Reporte de sesion de tiempo
                var endTimeStamp = new Date();
                var totalMilliseconds = (endTimeStamp.getTime() - startTime.getTime());
                var scormTime = this.time_sco(totalMilliseconds);

                console.log(scormWrapper.getAPIVersion() + " == 2004 ::: " + (scormWrapper.getAPIVersion()=="2004"));
                if(scormWrapper.getAPIVersion()=="2004"){
                    console.log("Guardo el tiempo: " + scormTime + " y EXIT a suspend");
                    scormWrapper.doLMSSetValue("cmi.session_time",scormTime);
                    scormWrapper.doLMSSetValue("cmi.exit","suspend");
                }else{
                    scormWrapper.doLMSSetValue("cmi.core.session_time",scormTime);
                }
                scormWrapper.doLMSFinish();
            }
        };

        this.Continue = function(){
            // we request the next SCO from the LMS
            scormWrapper.doLMSSetValue("adl.nav.request", "continue");
           
            // we terminate this SCO's communication with the LMS
            this.finish();
        }

        this.getGrade = function() {
            var result;
            this.log('getGrade');
            if(api){
                if(scormWrapper.getAPIVersion()=="2004"){
                    result = scormWrapper.doLMSGetValue('cmi.score.raw');                   
                }else{
                    result = scormWrapper.doLMSGetValue('cmi.core.score.raw');
                }
                if(result) {
                    this.log('Grade: ' + result);
                }
            }
            return result;
            /*
            var value = 0;
            if($window.parent){
                value = $window.parent.getGrade();
            }
            return value;
            */
        };

        this.saveGrade = function(grade, num_intentos) {
            var result;
            this.log('saveGrade: ' + grade);
            if(api){
                if(scormWrapper.getAPIVersion()=="2004"){
                    result = scormWrapper.doLMSSetValue("cmi.score.min","0");
                    result = scormWrapper.doLMSSetValue("cmi.score.max","100");
                    result = scormWrapper.doLMSSetValue("cmi.score.raw",String(grade));
                    result = scormWrapper.doLMSSetValue("cmi.score.scaled",String(grade/100));
                }else{  
                    result = scormWrapper.doLMSSetValue('cmi.core.score.raw', grade);                   
                }
                
                scormWrapper.doLMSCommit();
                if(result) {
                    this.log('Grade saved succesfully!');
                }
            }
            /*if($window.parent){
                $window.parent.saveGrade(grade, num_intentos);
            }*/
        };
        /* Agregado*/
        this.getAttempts = function(){
            var value = 0;
            if($window.parent){
                value = $window.parent.getIntentos();
            }
            return value;
        }
        this.getLocation = function() {
            var result;
            this.log('getLocation RAIZ');
            if(api){
                if(scormWrapper.getAPIVersion()=="2004"){
                    result = scormWrapper.doLMSGetValue('cmi.location');
                }else{
                    result = scormWrapper.doLMSGetValue('cmi.core.lesson_location');                    
                }
                if(result) {
                    this.log('Location: ' + result);
                }
            }
            return result;
            /*
            return "";
            */
        };

        this.saveLocation = function(location) {
            var result;
            this.log('saveLocation RAIZ: ' + location);
            if(api){    
                if(scormWrapper.getAPIVersion()=="2004"){
                    result = scormWrapper.doLMSSetValue('cmi.location', location);
                }else{
                    result = scormWrapper.doLMSSetValue('cmi.core.lesson_location', location);
                }
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log('Location saved succesfully!');
            }   
        };

        this.getSuspend = function() {
            var result;
            this.log('getSuspend');
            if(api){
                // es igual en 1.2 y 2004
                result = scormWrapper.doLMSGetValue('cmi.suspend_data');
                if(result) {
                    this.log('suspend_data: ' + result);
                }
            }
            return result;
            /*
            return "";
            */
        };

        this.saveSuspend = function(suspend_data) {
            var result;
            this.log('saveSuspend: ' + suspend_data);
            if(api){    
                // es igual en 1.2 y 2004
                result = scormWrapper.doLMSSetValue('cmi.suspend_data', suspend_data);
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log('suspend_data saved succesfully!');
            }
        };

        this.getStatus = function() {
            var result;
            this.log('getStatus');
            if(api){
                if(scormWrapper.getAPIVersion()=="2004"){
                    result = scormWrapper.doLMSGetValue('cmi.completion_status');
                }else{
                    result = scormWrapper.doLMSGetValue('cmi.core.lesson_status');                  
                }
                if(result) {
                    this.log('Status: ' + result);
                }
            }
            return result;
            
            //return "";
        };

        this.saveStatus = function(status) {
            var result;
            this.log('saveStatus: ' + status);
            if(api){
                if(scormWrapper.getAPIVersion()=="2004"){
                    if(status=="passed"){
                        result = scormWrapper.doLMSSetValue('cmi.success_status', status);
                    }else{
                        result = scormWrapper.doLMSSetValue('cmi.completion_status', status);
                    }
                }else{
                    result = scormWrapper.doLMSSetValue('cmi.core.lesson_status', status);                                  
                }
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log('Status saved succesfully!');
            }
        };

        this.getValue = function(cual_variable){
            var result;
            this.log('getValue: ' + cual_variable);
            if(api){ 
                result = scormWrapper.doLMSGetValue(cual_variable);              
            }
            if(result) {
                this.log('result: ' + result);
            }
            return result;
            //return "";
        };

        this.setValue = function(cual_variable, status) {
            var result;
            this.log('setValue: ' + cual_variable + " = " + status);
            if(api){
                result = scormWrapper.doLMSSetValue(cual_variable, status);                                    
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log(cual_variable + ' saved succesfully!');
            }
        };

        this.log = function(msg) {
            if(debug){
                console.log(msg);
            }
        };
    });

    plantillaApp.directive('iframeOnload', [function(){
        return {
            scope: {
                callBack: '&iframeOnload'
            },
            link: function(scope, element, attrs){
                element.on('load', function(){
                    return scope.callBack();
                });
            }
        };
    }]);

    plantillaApp.directive('canvasLoader', function (angularLoad, $window, scormWrapper, PagesService, usSpinnerService, ModalsService, GradeService, videoService, textosService) {

       return {
           restrict : 'EAC',
           replace : true,
           scope :{
           },

           template: '<div class="contenedorPaginas"><span us-spinner spinner-key="spinner"></span><canvas id="canvas" width="1024" height="638"></canvas></div>',
           link: function (scope, element, attribute, rootScope) {
               var w, h, loader;

               scope.currentPage = "";
			   
               scope.$on('page_event', function(event, page) {
                    scope.currentPage = page.name;
                    usSpinnerService.spin('spinner');
                   
                   videoService.stopVideo();
                    
                    if (scope.stage) {
                      scope.stage.autoClear = true;
                      scope.stage.removeAllChildren();
                      console.log("PAGE_EVENT:::");
                    }
                });

               
                /*⬇️-2022*/
                /*
                $window.onresize = function(){
					onResize();
                    onResize();
					scope.$apply();
				};
                */
                /*----------*/

           }
       };
   });
    

    plantillaApp.factory('gradeFactory', ['$http', function($http) {

        var url = 'server/mailService.php';
        var gradeFactory = {};

        gradeFactory.sendGrade = function (obj) {
            return $http(
             {method: 'POST',
              url: url,
              // headers: {
              //   'Content-Type':'application/x-www-form-urlencoded'
              // },
              data: {
                name : obj.name,
                grade: obj.grade,
                courseTitle: obj.courseTitle
              }
          });
        };

        return gradeFactory;

    }]);


    plantillaApp.service('videoService', function() {

        var scope;

        this.init = function($scope) {
            scope = $scope;
        };

        this.playVideo = function(index){
            console.log('play video: ' + index);
            if(scope){
                scope.setVideo(index - 1);
            } else {
                console.log('Service not initialized');
            }
        };
        this.stopVideo = function(index){
			scope.stopVideo();
		}
        this.videoTerminado=function(){           
            //return video_completo;
        }
        this.fin_video = function(){
             //video_completo=true;
        }

    })



    plantillaApp.service('GradeService', function(scormService){
        var grade = 0;

        var attempt = 0;

        this.setGrade = function(num){
            grade = num;
            scormService.saveGrade(grade);
        };

        this.getGradedo = function(){
            return grade;
        };

        this.addAttempt = function(){
            attempt++;
        };

        this.getAttempt = function(){
            return attempt;
        };

        return this;
    });

    plantillaApp.service('ModalsService', function(){
        
        var scope;

        this.init =function($scope){
            scope = $scope;
        };

        this.openSendDataModal = function(){
            console.log('openSendDataModal called');
            if(scope){
                scope.openSendData();
            } else {
                console.log('service not initialized');
            }
        };

        return this;
    });


    plantillaApp.service('textosService', function ($window) {
        var scope;
        //var mi_texto;
        var indice_actual;
        var correo_rol_ = 0;
        //var aciertos = [0, 0, 0, 0, 0, 0, 0, 0];
        //var reactivos = [0, 0, 0, 0, 0, 0, 0, 0];
        //var aciertos = [0, 3, 3, 3, 3, 3, 3, 3];
        //var reactivos = [0, 3, 3, 3, 4, 3, 3, 3];

        this.init = function ($scope) {
            scope = $scope;
        };


        this.mostrarTextos = function (numero) {
            /*if(scope){
                scope.verTextos();
            } else {
                console.log('Service not initialized');
            }*/
            indice_actual = numero;
            console.log("ver textos" + numero);
            if ($window["textos" + numero]) {
                $window["textos" + numero].style.display = "block";
                $window["textos" + numero].focus();
                /*$window["textos"+numero].addEventListener("keydown",hazListener);
                function hazListener(e){
                    console.log("click TEXTO: " + e.currentTarget.value);
                    //mi_texto = e.value;
                }*/
            }
        };

        this.ocultarTextos = function (numero) {
            if (numero != undefined && numero != null) {
                if ($window["textos" + numero]) {
                    $window["textos" + numero].style.display = "none";
                }
            } else {
                if ($window["textos" + indice_actual]) {
                    $window["textos" + indice_actual].style.display = "none";
                }
            }

        };

        this.getValor = function (numero) {
            if ($window["textos" + numero]) {
                console.log("REGRESA: " + $window["textos" + numero].value);
                return $window["textos" + numero].value;
            }
        }

        this.setValor = function (numero, str) {
            if ($window["textos" + numero]) {
                console.log("GUARDA: " + str);
                $window["textos" + numero].value = str;
            }
        }

        this.setReadWrite = function (numero) {
            if ($window["textos" + numero]) {
                //console.log("Regresa: " + $window["textos"+numero].value);
                $window["textos" + numero].readOnly = false;
            }
        }

        this.setReadOnly = function (numero) {
            console.log("Pasar a solo lectura textos" + numero);
            if ($window["textos" + numero]) {
                $window["textos" + numero].readOnly = true;
            }
        }
        //////////// ESPECIAL PARA DATA
        this.existeValor = function(numero){
            if ($window["textos" + numero]) {
                //console.log("Regresa: " + $window["textos" + numero].value);
                var valor_ = $window["textos" + numero].value;
                // busca en el js de correos si existe el correo o no 
                var existe_ = this.iteraJson(bd_usuarios, valor_);
                //console.log("existe::: " + existe_);
                return existe_;
            }
        }
        
        this.iteraJson=function(json, valor){
            
            for(var vari in json){
                //console.log(vari + " :: " + json[vari]);
                if(json[vari].length>0){
                    this.iteraJson(json[vari], valor);
                }else{
                    console.log(json[vari].correo + " == " + valor);
                    if(json[vari].correo == valor){
                        console.log("::::::BINGO:::::: " + json[vari].num_rol);
                        correo_rol_ = json[vari].num_rol;
                        break;
                    }
                }
            }
            
            return correo_rol_;
        }
        
        this.setEval = function (num, cal, react) {
            aciertos[num] = cal;
            reactivos[num] = react;
            console.log(aciertos);
            console.log(reactivos);
        }

        this.getAciertos = function (num) {
            return aciertos;
        }

        this.getReactivos = function (num) {
            return reactivos;
        }

    });


})();

