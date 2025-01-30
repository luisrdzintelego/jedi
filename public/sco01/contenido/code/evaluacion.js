(function () {
    'use strict';

var app = angular.module('sco', ["scormwrapper","ngSanitize"]);

//app.value('debug', true);
    
app.run(function($window, assesmentService, scormService){
    console.log("RUN---");
    /*videoService.init();
    temaryService.init();
    assesmentService.init();  */ 
    $window.addEventListener('beforeunload', function(){
        scormService.finish();
    });
});

//2024 - FILTRO PARA PODER PASAR JSON CON ETIQUETAS Y LEER LAS ETIQUETAS HTML
app.filter('to_html', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
    

/* SCORM SERVICE */
app.service('scormService', ["scormWrapper",function(scormWrapper){
    console.log("scormService---");
        var debug = true;
        var api;

        this.init = function() {
            /*this.log("Finding API...");
            scormWrapper.setAPIVersion('1.2');
            //console.log("HOLa:: " + scormWrapper.getAPIHandle());
            
            api = scormWrapper.doLMSInitialize();
            if(api){
                this.saveStatus('incomplete');
                this.log('API Founded!');
            }*/
        };

        this.finish = function() {
            /*this.log('Finish');
            if(api){
                scormWrapper.doLMSFinish();
            }*/
        };

        this.getGrade = function() {
            /*var result;
            this.log('getGrade');
            if(api){
                result = scormWrapper.doLMSGetValue('cmi.core.score.raw');
                if(result) {
                    this.log('Grade: ' + result);
                }
            }
            return result;*/
            if(window.parent.parent){
                return window.parent.getGrade();
            }else{
                return 0;
            }
        };
        this.getCalif = function() {
            /*var result;
            this.log('getGrade');
            if(api){
                result = scormWrapper.doLMSGetValue('cmi.core.score.raw');
                if(result) {
                    this.log('Grade: ' + result);
                }
            }
            return result;*/
            if(window.parent){
                return window.parent.getCalif();
            }else{
                return 0;
            }
        };

        this.saveGrade = function(grade) {
            /*var result;
            this.log('saveGrade: ' + grade);
            if(api){
                result = scormWrapper.doLMSSetValue('cmi.core.score.raw', grade);
                scormWrapper.doLMSCommit();
                if(result) {
                    this.log('Grade saved succesfully!');
                }
            }*/
            if(window.parent.parent){
                //window.parent.setCalif(grade);
                //LUIS----window.parent.parent.saveGrade(grade);
            }
        };
        this.setCalif = function(grade) {
            /*var result;
            this.log('saveGrade: ' + grade);
            if(api){
                result = scormWrapper.doLMSSetValue('cmi.core.score.raw', grade);
                scormWrapper.doLMSCommit();
                if(result) {
                    this.log('Grade saved succesfully!');
                }
            }*/
            if(window.parent){
                window.parent.setCalif(grade);
                window.parent.saveGrade(grade);
            }
        };

        this.getLocation = function() {
            /*var result;
            this.log('getLocation');
            if(api){
                result = scormWrapper.doLMSGetValue('cmi.core.lesson_location');
                if(result) {
                    this.log('Location: ' + result);
                }
            }
            return result;*/
            if(windo.parent){
                return window.parent.getIntentos();
            }else{
                return 0;
            }
        };

        this.saveLocation = function(location) {
            /*var result;
            this.log('saveLocation: ' + location);
            if(api){           
                result = scormWrapper.doLMSSetValue('cmi.core.lesson_location', location);
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log('Location saved succesfully!');
            }*/
            if(window.parent){
               window.parent.setIntentos(location);
            }
        };

        this.getSuspend = function() {            
            /*var result;
            this.log('getSuspend');
            if(api){
                result = scormWrapper.doLMSGetValue('cmi.suspend_data');
                if(result) {
                    this.log('suspend_data: ' + result);
                }
            }
            return result;*/
        };

        this.saveSuspend = function(suspend_data) {
            /*var result;
            this.log('saveSuspend: ' + suspend_data);
            if(api){
                result = scormWrapper.doLMSSetValue('cmi.suspend_data', suspend_data);
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log('suspend_data saved succesfully!');
            }*/
        };

        this.getStatus = function() {
            /*var result;
            this.log('getStatus');
            if(api){
                result = scormWrapper.doLMSGetValue('cmi.core.lesson_status');
                if(result) {
                    this.log('Status: ' + result);
                }
            }
            return result;*/
            if(window.parent){
                return window.parent.getStatus();
            }
        };

        this.saveStatus = function(status) {
            /*var result;
            this.log('saveStatus: ' + status);
            if(api){
                result = scormWrapper.doLMSSetValue('cmi.core.lesson_status', status);
                scormWrapper.doLMSCommit();
            }
            if(result) {
                this.log('Status saved succesfully!');
            }*/
            if(window.parent){
                 window.parent.saveStatus(status);
            }
        };

        this.log = function(msg) {
            //console.log(debug + " DEBUG:: " + msg);
            if(debug){
                console.log(msg);
            }
        };

}]);

app.service('assesmentService', function($http,$rootScope, $window, $interval, scormService) {
    console.log("assesmentService---");
    var eval_json;
    this.preg_actual = 0;
    this.total_preguntas = 0;
    this.respuesta_correcta = null;
    this.cuantas_correctas = 0;
    this.puntos_obtenidos = 0;
    this.fin_eval = false;
    this.pregunta = "";
    this.respuesta_verdadero="";
    this.respuesta_falso="";
    
    this.respuestas = {};
    this.tipo = "";
    this.respuesta_usuario = "";
    this.verretro = "";
    this.vercontinuar = "";
    this.verenviar = "";
    this.imagen = "";
    
    this.retrobien = "";
    this.retromal = "";
    this.calif_final = 0;   
    this.calif_anterior = 0;    
    this.instrucciones = "";
    //this.respuesta_tiempo = "";
    //this.tiempo_="00:25";
    this.show = false;
    this.aprobado = false;
    this.dataselect = {
        singleSelect1: null,
        singleSelect2: null,
        singleSelect3: null
        /* singleSelect4: null,
        singleSelect5: null,
        singleSelect6: null */
    };
    
    // ----- control de calificacion y de intentos
 
    if (window.parent.getIntentos) {
        console.log("SI EXISTE PARENT - INTENTOS");
        if (window.parent.getIntentos(3) != null && window.parent.getIntentos(3) != undefined) {
            console.log("SI EXISTE window.parent.getIntentos(3)");
            this.intentos = window.parent.getIntentos(3);
        } 

    } else if (window.parent.parent.getIntentos) {
        console.log("SI EXISTE PARENT PARENT");
        if (window.parent.parent.getIntentos(3) != null && window.parent.parent.getIntentos(3) != undefined) {
            console.log("SI EXISTE window.parent.parent.getIntentos(3)");
            this.intentos = window.parent.parent.getIntentos(3);
        } 
    }

    if (window.parent.getCalif) {
        console.log("SI EXISTE PARENT - CALIF");
        if (window.parent.getCalif(3) != null && window.parent.getCalif(3) != undefined) {
            console.log("SI EXISTE window.parent.getCalif(3)");
            this.calif_final = window.parent.getCalif(3);
        } 

    } else if (window.parent.parent.getCalif) {
        console.log("SI EXISTE PARENT PARENT");
        if (window.parent.parent.getCalif(3) != null && window.parent.parent.getCalif(3) != undefined) {
            console.log("SI EXISTE window.parent.parent.getCalif(3)");
            this.calif_final = window.parent.parent.getCalif(3);
        } 
    }

    console.log("this.intentos --------- ", this.intentos);
    console.log("this.calif_final ------ ", this.calif_final );

    if(this.intentos == 1){
        this.fin_eval = true;
    }

    //this.intentos = window.parent.inentos_eval1; //scormService.getLocation();
    //console.log("window.parent.inentos_eval1", window.parent.inentos_eval1);
    console.log("********* ----- this.intentos", this.intentos);
    this.calif_anterior = 0; //window.parent.getGrade();
    // ----------- CONFIG EVAL --------
    
    this.cuantas_preguntas = 12;
    this.preguntas = 12;
    this.aleatorias = true; 
    this.calif_min = 80;

    this.abc=["A","B","C","D","E","F","G","H","I","J","K","L","M","N"];
    // -------------------
    //var total_segundos = 25;
    //var intervalo;
    //var segundos_ = total_segundos;
    //var puntaje_ = 2;
       
    //this.tiempoT = 0;    
    //this.respuesta_correcta_esp = "";
    
    var root = this;
    var ranNum = [];   
    var ranNum2 = [];  
    
    var resp_temas = [0,0,0,0];   

    var eval_lista = false;
    
    function broadcast(){
        $rootScope.$broadcast('page_event');
    }
    // this es para funciones globales
    this.init = function(){
        console.log(":::: INIT ::::::");

            //console.log(bd_preguntas);
            eval_json = bd_preguntas; // data.data;  
            //console.log("eval_json: "  + eval_json);
            if(bd_preguntas.length < this.cuantas_preguntas){
                root.total_preguntas = bd_preguntas.length;
            }else{
                root.total_preguntas = this.cuantas_preguntas; //eval_json.config.cuantas_preguntas;
            }
            
            //console.log("LISTO EVAL JSON: "  + root.total_preguntas);
            eval_lista = true;                    
        
            if(this.aleatorias){
                //ranNum = noRepRandom(this.total_preguntas);
                ranNum = noRepRandom(root.preguntas).splice(0,root.preguntas);  
                ranNum2 = noRepRandom(root.cuantas_preguntas).splice(0,root.cuantas_preguntas);  
                
            
            }else{
                for(var j=0;j<this.total_preguntas;j++){
                    ranNum.push(j+1);
                    ranNum2.push(j+1);
                }
                //ranNum = this.total_preguntas;
            }

            console.log("ranNum ::: ",  ranNum); 
            console.log("ranNum2 ::: ",  ranNum2); 
            
            var my_arrayTema1 = [];
            var value = "Tema1";
            var contadorTema1 = 0;	
            for(var i=0;i<this.total_preguntas;i++){
                //var indice = i+1;
                var indice = ranNum2[i];
                if((eval_json[indice-1].tema.toLowerCase() == value.toLocaleLowerCase())){
                    my_arrayTema1.push(eval_json[indice-1]);
                    contadorTema1++;
                }
                //if (contadorTema1 == (this.cuantas_preguntas-my_arrayTema1.length)){break;}
                if (contadorTema1 == 3){break;}
            }	
            console.log("my_arrayTema1 ::: ",  my_arrayTema1); 
            console.log("RESTO::: ",  this.cuantas_preguntas-my_arrayTema1.length); 	
            //var resto =  this.cuantas_preguntas-my_arrayTema1.length;

            var my_arrayTema2 = [];
            var value = "Tema2";
            var contadorTema2 = 0;	
            for(var i=0;i<this.total_preguntas;i++){
                //var indice = i+1;
                var indice = ranNum2[i];
                if((eval_json[indice-1].tema.toLowerCase() == value.toLocaleLowerCase())){
                    my_arrayTema2.push(eval_json[indice-1]);
                    contadorTema2++;
                }
                //if (contadorTema1 == (this.cuantas_preguntas-my_arrayTema1.length)){break;}
                if (contadorTema2 == 3){break;}
            }	
            console.log("my_arrayTema2 ::: ",  my_arrayTema2); 
            console.log("RESTO::: ",  this.cuantas_preguntas-my_arrayTema2.length); 

            var my_arrayTema3 = [];
            var value = "Tema3";
            var contadorTema3 = 0;	
            for(var i=0;i<this.total_preguntas;i++){
                //var indice = i+1;
                var indice = ranNum2[i];
                if((eval_json[indice-1].tema.toLowerCase() == value.toLocaleLowerCase())){
                    my_arrayTema3.push(eval_json[indice-1]);
                    contadorTema3++;
                }
                //if (contadorTema1 == (this.cuantas_preguntas-my_arrayTema1.length)){break;}
                if (contadorTema3 == 3){break;}
            }	
            console.log("my_arrayTema3 ::: ",  my_arrayTema3); 
            console.log("RESTO::: ",  this.cuantas_preguntas-my_arrayTema3.length); 


            var my_arrayTema4 = [];
            var value = "Tema4";
            var contadorTema4 = 0;	
            for(var i=0;i<this.total_preguntas;i++){
                //var indice = i+1;
                var indice = ranNum2[i];
                if((eval_json[indice-1].tema.toLowerCase() == value.toLocaleLowerCase())){
                    my_arrayTema4.push(eval_json[indice-1]);
                    contadorTema4++;
                }
                //if (contadorTema1 == (this.cuantas_preguntas-my_arrayTema1.length)){break;}
                if (contadorTema4 == 3){break;}
            }	
            console.log("my_arrayTema4 ::: ",  my_arrayTema4); 
            console.log("RESTO::: ",  this.cuantas_preguntas-my_arrayTema4.length); 

            /* var my_arrayTema5 = [];
            var value = "Tema5";
            var contadorTema5 = 0;	
            for(var i=0;i<this.total_preguntas;i++){
                //var indice = i+1;
                var indice = ranNum2[i];
                if((eval_json[indice-1].tema.toLowerCase() == value.toLocaleLowerCase())){
                    my_arrayTema5.push(eval_json[indice-1]);
                    contadorTema5++;
                }
                //if (contadorTema1 == (this.cuantas_preguntas-my_arrayTema1.length)){break;}
                if (contadorTema5 == 5){break;}
            }	
            console.log("my_arrayTema5 ::: ",  my_arrayTema5); 
            console.log("RESTO::: ",  this.cuantas_preguntas-my_arrayTema5.length);  */


            eval_json = my_arrayTema1.concat(my_arrayTema2,my_arrayTema3,my_arrayTema4);
            //ranNum = my_arrayTema1.concat(my_arrayTema2);
            console.log("🚀 ~ eval_json---------:", eval_json)
            console.log("🚀 ~ ranNum:", ranNum)


            //this.ranNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

            //ranNum = noRepRandom(this.total_preguntas);    
            broadcast();
        
    }
    this.ready=function(){
        return eval_lista;
    }
    this.reinicia = function(){
        console.log(":::: REINICIA ::::::");
        
        this.preg_actual = 0;
        this.total_preguntas = 0;
        this.respuesta_correcta = null;
        this.cuantas_correctas = 0;
        this.puntos_obtenidos = 0;
        this.fin_eval = false;
        this.pregunta = "";
        this.respuesta_verdadero="";
        this.respuesta_falso="";
    
        this.respuestas = {};
        this.tipo = "";
        this.respuesta_usuario = "";
        this.verretro = "";
        this.vercontinuar = "";
        this.verenviar = "";
        
        this.retrobien = "";
        this.retromal = "";
        this.calif_final = 0;
        this.instrucciones = "";
        //this.respuesta_tiempo = "";
        //this.tiempo_="00:25";
        this.show = false;
        this.aprobado = false;

        this.dataselect = {
            singleSelect1: null,
            singleSelect2: null,
            singleSelect3: null,
            singleSelect4: null,
            singleSelect5: null,
            singleSelect6: null,
            singleSelect7: null,
            singleSelect8: null,
            singleSelect9: null,
            singleSelect10: null
        };
        // ----- control de calificacion y de intentos
        //this.intentos = scormService.getLocation();
        //this.calif_anterior = scormService.getCalif();
        

        if (window.parent.getIntentos) {
            console.log("SI EXISTE PARENT");

            if (window.parent.getIntentos(3) != null && window.parent.getIntentos(3) != undefined) {
                console.log("SI EXISTE window.parent.getIntentos(3)");
                this.intentos = window.parent.getIntentos(3);
            } 
        }
        

        // ----- control de calificacion y de intentos
        //this.intentos = scormService.getLocation();
        //this.calif_anterior = window.parent.getGrade();

        // --- inicio de evaluacion
        ranNum = [];        
        
        if(bd_preguntas.length < this.cuantas_preguntas){
            root.total_preguntas = bd_preguntas.length;
        }else{
            root.total_preguntas = this.cuantas_preguntas; //eval_json.config.cuantas_preguntas;
        }
        
        //console.log("LISTO EVAL JSON: "  + root.total_preguntas);
        eval_lista = true;                    
                  
        if(this.aleatorias){
            //ranNum = noRepRandom(this.total_preguntas);
            ranNum = noRepRandom(root.preguntas).splice(0,root.preguntas);            
        }else{
            for(var j=0;j<this.total_preguntas;j++){
                ranNum.push(j+1);
            }
            //ranNum = this.total_preguntas;
        }

        //ranNum = noRepRandom(this.total_preguntas);
        console.log("REINICIA ranNum ::: " + ranNum);
        //broadcast();
        //if (angular.isDefined(intervalo)) {
        //    $interval.cancel(intervalo);            
        //    intervalo = undefined;
        //} 

        this.siguientePregunta();
    }
    function noRepRandom(val){
        var stor = [];
        var auth = true;
        var final_array = [];
        var i = 0;
        while (i < val){
            var num = Math.floor(Math.random() * val) + 1;
            var j = 0;
            while (j < stor.length){
                if (num == stor[j]){
                    auth = false;
                    i--;
                    break;
                }else{
                    auth = true;
                }
                j++;
            }
            stor.push(num);
            if (auth == true){
                final_array.push(num);
            }
            i++;
        }
        return final_array;
    }
    function noRepRandomArray(_array){
        /*var stor = [];
        var auth = true;
        var final_array = [];
        var i = 0;
        while (i < _array.length){
            var num = Math.floor(Math.random() * _array.length) + 1;
            var j = 0;
            while (j < stor.length){
                if (num == stor[j]){
                    auth = false;
                    i--;
                    break;
                }else{
                    auth = true;
                }
                j++;
            }
            stor.push(num);
            if (auth == true){
                final_array.push(num);
            }
            i++;
        }*/
        var final_array = [];
        
        for(var i=0;i<_array.length;i++){
            //console.log("_array.length:: " + _array.length);
            var num = Math.floor(Math.random() * _array.length) + 1;
            //console.log("num:: " + num);
            var _pop = _array.splice(num-1,1);
            //console.log("Guardar: " + _pop);
            final_array.push(_pop);
            i=-1;
        }
                        
        return final_array;
    }

    this.siguientePregunta = function(){
       // console.log(":::: siguientePregunta ::::::");
        console.log("Entra a siguientePregunta " + this.preg_actual + " < " + (this.preguntas));
        //segundos_ = total_segundos;
        //puntaje_ = 2;
        var indice_;
        this.tema;
        this.respuesta_usuario = "";
        this.verretro = "";
        this.vercontinuar = "";
        this.verenviar = "";
        this.respuestas = {}; 
        this.combo_respuestas = {}; 
        this.imagen = "";
        this.respuesta_usuario_multiple = [0,0,0];
        this.dataselect = {
            singleSelect1: null,
            singleSelect2: null,
            singleSelect3: null,
            
            /*
            singleSelect4: null,
            singleSelect5: null,
            singleSelect6: null,
            singleSelect7: null,
            singleSelect8: null,
            singleSelect9: null,
            singleSelect10: null
            */
        };
        
        if(this.preg_actual<this.preguntas){
            //intervalo = $interval(Segundero, 1000);
            this.preg_actual++;  
            
            console.log("ranNum[this.preg_actual-1]:: " + ranNum[this.preg_actual-1]);
            indice_ = ranNum[this.preg_actual-1]-1;
            console.log("indice_ :: " + indice_);
            console.log(eval_json[indice_]);
            // se asignan los datos de pregunta de cada tipo de pregunta
            
            //tradicional
            //this.pregunta = eval_json[indice_].pregunta; 

            //2024 -- para logra poder agregar etiquetas html en el json y que se lean correctament
            $rootScope.my_html = eval_json[indice_].pregunta;

            $rootScope.resp_a = eval_json[indice_].opcion_1;
            $rootScope.resp_b = eval_json[indice_].opcion_2;
            $rootScope.resp_c = eval_json[indice_].opcion_3;
            
           //this.pregunta = Sce.chkHTML(eval_json[indice_].pregunta);
            
            this.respuesta_correcta = eval_json[indice_].correcta;
            this.respuestas = {
                        "op1" : eval_json[indice_].opcion_1,
                        "op2" : eval_json[indice_].opcion_2,
                        "op3" : eval_json[indice_].opcion_3
                        /*"op4" : eval_json[indice_].opcion_4,
                        "op5" : eval_json[indice_].opcion_5,
                        "op6" : eval_json[indice_].opcion_6,
                        "op7" : eval_json[indice_].opcion_7,
                        "op8" : eval_json[indice_].opcion_8,
                        "op9" : eval_json[indice_].opcion_9,
                        "op10" : eval_json[indice_].opcion_10*/
                    }
            this.tema = eval_json[indice_].tema;
            console.log("🚀 ~ this.tema :", this.tema )
            this.retrobien = eval_json[indice_].retro_bien;
            this.retromal = eval_json[indice_].retro_mal;
            if(eval_json[indice_].imagen!=''){
                this.imagen = eval_json[indice_].imagen;
            }
            //console.log("this.respuestas:: ", this.respuestas);
            console.log("this.respuesta_correcta:: " + this.respuesta_correcta);
            //console.log("this.instrucciones:: " + eval_json[indice_].instrucciones);
            
            switch(eval_json[indice_].tipo){
                case "V/F":   
                    this.tipo = "opcion_multiple";
                    //this.instrucciones = "Selecciona Falso o Verdadero según las aseveraciones que se presenten en cada planteamiento.";
                    this.instrucciones = eval_json[indice_].instrucciones;
                    break;
                case "opcion_multiple":
                    this.tipo = "opcion_multiple";
                    //this.instrucciones = "Selecciona la opción correcta según se requiera en cada planteamiento.";
                    this.instrucciones = eval_json[indice_].instrucciones;
                    break;
                case "multiple":  
                    this.tipo = "multiple";
                    //this.instrucciones = "Selecciona la opción correcta según se requiera en cada planteamiento.";
                    this.instrucciones = eval_json[indice_].instrucciones;
                    break;
                case "opcion_multiple_unica":  
                    this.tipo = "opcion_multiple_unica";
                    //this.instrucciones = "Selecciona la opción correcta según se requiera en cada planteamiento.";
                    this.instrucciones = eval_json[indice_].instrucciones;
                    break;    
                case "combo":  
                    this.tipo = "combo";
                    //this.instrucciones = "Relaciona los conceptos según lo consideres correcto.";
                    this.instrucciones = eval_json[indice_].instrucciones;
                    
                    var arreglo_respuestas_combo = this.respuesta_correcta.split(",");
                    
                    var combo_combinado = [];
                    // verifica si existe un paid en las respuestas solo toma los textos para las respuestas
                    if(this.respuesta_correcta.indexOf("|")!=-1){
                        combo_combinado = this.respuesta_correcta.split("|");
                        arreglo_respuestas_combo = [];
                        arreglo_respuestas_combo = combo_combinado[0].split(",");
                    }
                    
                           
                    this.combo_respuestas = {
                        "op1" : arreglo_respuestas_combo[0],
                        "op2" : arreglo_respuestas_combo[1],
                        "op3" : arreglo_respuestas_combo[2],
                        "op4" : arreglo_respuestas_combo[3],
                        "op5" : arreglo_respuestas_combo[4],
                        "op6" : arreglo_respuestas_combo[5],
                        "op7" : arreglo_respuestas_combo[6],
                        "op8" : arreglo_respuestas_combo[7],
                        "op9" : arreglo_respuestas_combo[8],
                        "op10" : arreglo_respuestas_combo[9]
                    }
                    //console.log("this.combo_respuestas:: ", this.combo_respuestas);
                    
                    var ranNum_resp_combo = [];
                    // verifica si existe un paid en las respuestas solo toma los textos para las respuestas
                    if(combo_combinado.length>0){                          
                        ranNum_resp_combo = noRepRandom(combo_combinado[1].split(",").length);                        
                    }else{
                        ranNum_resp_combo = noRepRandom(this.respuesta_correcta.split(",").length);
                    }
                    //var ranNum_resp_combo = noRepRandom(this.respuesta_correcta.split("|")[1].split(",").length);
                
                    this.respuestas = {
                        "op1" : eval_json[indice_]["opcion_"+ranNum_resp_combo[0]],
                        "op2" : eval_json[indice_]["opcion_"+ranNum_resp_combo[1]],
                        "op3" : eval_json[indice_]["opcion_"+ranNum_resp_combo[2]]
                        /* "op4" : eval_json[indice_]["opcion_"+ranNum_resp_combo[3]],
                        "op5" : eval_json[indice_]["opcion_"+ranNum_resp_combo[4]],
                        "op6" : eval_json[indice_]["opcion_"+ranNum_resp_combo[5]],
                        "op7" : eval_json[indice_]["opcion_"+ranNum_resp_combo[6]],
                        "op8" : eval_json[indice_]["opcion_"+ranNum_resp_combo[7]],
                        "op9" : eval_json[indice_]["opcion_"+ranNum_resp_combo[8]],
                        "op10" : eval_json[indice_]["opcion_"+ranNum_resp_combo[9]] */
                    }                                        
                    
                    this.respuesta_correcta = ranNum_resp_combo.join(",");
                    
                    if(combo_combinado.length>0){ 
                        this.respuesta_correcta=[];
                        //console.log("combo_combinado[1]:: " , combo_combinado[1]);
                        var _combo_array = combo_combinado[1].split(",");
                        var _combo_cabiado = [];
                        for(var i=0;i<_combo_array.length;i++){
                            //console.log("::combo_combinado[1][ranNum_resp_combo[i]]:: " + combo_combinado[1][ranNum_resp_combo[i]]);
                            _combo_cabiado.push(_combo_array[ranNum_resp_combo[i]-1]);
                        }
                        this.respuesta_correcta = _combo_cabiado.join(",");
                    }
                    
                    
                    console.log("-- Cambia Respuestas Correctas :: " + this.respuesta_correcta);
                    break;    
            }            
             
        }else{
            // se acabo evaluacion y muestra resultados
            this.fin_eval = true;
            console.log("this.fin_eval", this.fin_eval);

            /*
            if (window.parent.hazVisto) {
                window.parent.hazVisto();
            }

            hazVisto();
            */
            
            // ----- control de calificacion y de intentos
            //this.intentos = scormService.getLocation();
            //this.calif_anterior = window.parent.getCalif();
            
            // guarda calificacion
            console.log("this.cuantas_correctas: "  + this.cuantas_correctas + " de " + this.preguntas);
            this.calif_final = Math.round((this.cuantas_correctas / this.preguntas) * 100);

            //this.calif_final = this.cuantas_correctas; 
            console.log("this.calif_final", this.calif_final);
            //console.log("this.calif_final:: " + this.calif_final);
            //scormService.saveGrade(calif_total);
            //scormService.saveGrade(this.puntos_obtenidos);
            //
            //

            // ----- control de calificacion y de intentos
            this.intentos++;
            console.log("*** --- this.intentos", this.intentos);

            //window.parent.inentos_eval1 = this.intentos;
            //$window.moverTop(); // posiciona la vista en el top de la página 

            console.log("GUARDA CALIF: " + this.calif_final + " e INTENTOS: " +this.intentos);

            //scormService.saveLocation(this.intentos); // Guarda intentos  
            //LUIS--2021-- window.parent.saveGrade(this.calif_final);

            //window.parent.setDiagnostico(3,resp_temas);
            window.parent.setCalif2023(3,100,1,3);

            if(resp_temas[0] <= 1){
                //window.parent.setCalif2023(4,0,this.intentos,1);
                // 7window.parent.setCalif2023(10,0,0,3);
            }
            if(resp_temas[1] <= 1){
                //window.parent.setCalif2023(5,0,this.intentos,1);
                // window.parent.setCalif2023(11,0,0,3);
            }
            if(resp_temas[2] <= 1){
                //window.parent.setCalif2023(6,0,this.intentos,1);
                // window.parent.setCalif2023(12,0,0,3);
            }
            if(resp_temas[3] <= 1){
                //window.parent.setCalif2023(7,0,this.intentos,1);
                //window.parent.setCalif2023(13,0,0,3);
            }
            /* if(resp_temas[4] == 4){
                window.parent.setCalif2023(8,80,this.intentos,3);
                window.parent.setCalif2023(14,0,0,3);
            } */

            if(resp_temas[0] >= 2){
                window.parent.setCalif2023(4,100,this.intentos,3);
                window.parent.fotos[0] = 1;
                // window.parent.setCalif2023(10,0,0,3);
            }
            if(resp_temas[1] >= 2){
                window.parent.setCalif2023(5,100,this.intentos,3);
                window.parent.fotos[1] = 1;
                // window.parent.setCalif2023(11,0,0,3);
            }
            if(resp_temas[2] >= 2){
                window.parent.setCalif2023(6,100,this.intentos,3);
		        window.parent.fotos[2] = 1;
                // window.parent.setCalif2023(12,0,0,3);
            }
            if(resp_temas[3] >= 2){
                window.parent.setCalif2023(7,100,this.intentos,3);
		        window.parent.fotos[3] = 1;
                // window.parent.setCalif2023(13,0,0,3);
            }

            /* if(resp_temas[4] == 5){
                window.parent.setCalif2023(7,100,this.intentos,3);
                window.parent.setCalif2023(13,0,0,3);
            } */


            if (window.hazVisto) {
                window.chk_vistos(true);
            }
            if (window.parent.chk_vistos) {
                window.parent.chk_vistos(true);
            }

           // broadcast();
        }
        
    }
    
    this.verificaRespuesta=function(){
        
        switch(this.tipo){
                case "V/F":                    
                case "opcion_multiple":
                    console.log("USU: " + this.respuesta_usuario +" == CORRECTA: "+ this.respuesta_correcta);                
                    if(this.respuesta_usuario == this.respuesta_correcta){
                        this.verretro = "retro_bien";
                        this.cuantas_correctas++;

                        if(this.tema == "Tema1"){resp_temas[0]++;}
                        if(this.tema == "Tema2"){resp_temas[1]++;}
                        if(this.tema == "Tema3"){resp_temas[2]++;}
                        if(this.tema == "Tema4"){resp_temas[3]++;}
                        //if(this.tema == "Tema5"){resp_temas[4]++;}
                          
                    }else{
                        this.verretro = "retro_mal";
                    }
                    console.log("resp_temas: " + resp_temas); 
                    break;
                case "multiple":  
                    var cadena_usuario = [];
                    for(var i=0;i<this.respuesta_usuario_multiple.length;i++){
                        if(this.respuesta_usuario_multiple[i]>0){
                            cadena_usuario.push(i+1);
                        }                
                    }
                    console.log("USU: " + cadena_usuario.join(",") +" == CORRECTA: "+ this.respuesta_correcta);                
                    if(cadena_usuario.join(",") == this.respuesta_correcta){
                        this.verretro = "retro_bien";
                        this.cuantas_correctas++;
                    }else{
                        this.verretro = "retro_mal";
                    }
                    break;
                case "opcion_multiple_unica":  
                    console.log("USU: " + this.respuesta_usuario +" == CORRECTA: "+ this.respuesta_correcta); 
                    var si_hay_correcta = this.respuesta_correcta.indexOf(this.respuesta_usuario)!=-1;
                    if(si_hay_correcta){
                        this.verretro = "retro_bien";
                        this.cuantas_correctas++;
                    }else{
                        this.verretro = "retro_mal";
                    }
                    break;  
                
                case "combo":
                    console.log("USU: " + this.respuesta_usuario +" == CORRECTA: "+ this.respuesta_correcta); 
                    if(this.respuesta_usuario == this.respuesta_correcta){
                        this.verretro = "retro_bien";
                        this.cuantas_correctas++;
                    }else{
                        this.verretro = "retro_mal";
                    }
                    break;
        }
        
        console.log("***********************");
        this.verenviar = ""; // es para quitar el boton de enviar
        this.vercontinuar = "SI"; // es para dejar ver el botón continuar
		this.siguientePregunta();
    }
    this.respuestaUsuario=function(bandera){
        if(this.verretro===''){
            this.respuesta_usuario = bandera;
            this.verenviar = "SI";
            //console.log("this.respuesta_usuario:: " + this.respuesta_usuario);
        }
    }
    
    this.respuestaUsuarioMultiple=function(bandera){
        if(this.verretro===''){
            // si tiene cierta clase se pone 1 si no la tiene se pone 0
            if( this.respuesta_usuario_multiple[bandera-1] == 1){
                this.respuesta_usuario_multiple[bandera-1] = 0;
            }else{
                this.respuesta_usuario_multiple[bandera-1] = 1;
                //console.log("this.respuesta_usuario_multiple: ", this.respuesta_usuario_multiple);                
            }
            this.verenviar = "SI"; // para mostrar el botón de enviar
        }
    }
    
    this.respuestaUsuarioCombo=function(bandera){
        //console.log("RESP VCOMBO");
        if(this.verretro===''){
            var cadena_resp = [];     
            //console.log("this.dataselect:: ", this.dataselect);
            //console.log("Length:: " + Object.getOwnPropertyNames(this.dataselect).length);
            for(var vari in this.dataselect){
                //console.log("Data select en " + vari + " == " + this.dataselect[vari]);
                if(this.dataselect[vari]!=null){
                    cadena_resp.push(this.dataselect[vari]); 
                }                
            }
            this.respuesta_usuario = cadena_resp.join(",");
            //console.log("this.respesta_usuario::combo: " + this.respuesta_usuario);
            this.verenviar = "SI"; // para mostrar el botón de enviar
            
        }
    }
    
    this.respuestaUsuarioExiste = function(indice){
        var retorno=false;
        switch(this.tipo){
                case "V/F":                    
                case "opcion_multiple":
                    retorno = this.respuesta_usuario===indice;
                    break;
                case "multiple": 
                    //console.log("this.respuesta_usuario_multiple["+(indice-1)+"] == 1 :: " + (this.respuesta_usuario_multiple[indice-1]));
                    retorno = this.respuesta_usuario_multiple[indice-1]==1;                      
                    break;  
                case "opcion_multiple_unica": 
                    //console.log("this.respuesta_usuario_multiple["+(indice-1)+"] == 1 :: " + (this.respuesta_usuario_multiple[indice-1]));
                    retorno = this.respuesta_usuario===indice;                     
                    break; 
                case "combo":
                    retorno = this.dataselect['singleSelect'+indice]!=null;
                    break;
        }
        
        return retorno;
    }
    this.respuestaUsuarioCalif= function(indice){
        var retorno=false;
        switch(this.tipo){
                case "V/F":                    
                case "opcion_multiple":
                    retorno = this.respuesta_usuario===indice;
                    break;
                case "multiple": 
                    //console.log("this.respuesta_correcta.indexOf("+indice+")>= 0 :: " + (this.respuesta_correcta.indexOf(indice)>=0));
                    retorno = this.respuesta_correcta.indexOf(indice)>=0;
                    //retorno = this.respuesta_usuario_multiple[indice-1]==1;                      
                    break;
                case "opcion_multiple_unica":
                    retorno = this.respuesta_usuario===indice;
                    break;
                case "combo":
                    //console.log(this.respuesta_correcta);
                    //console.log(this.dataselect['singleSelect'+indice] + " == " + this.respuesta_correcta.split(",")[indice-1]);
                    retorno = this.dataselect['singleSelect'+indice]==this.respuesta_correcta.split(",")[indice-1];
                    break;
        }
        
        return retorno;
    }
    
    this.finEvaluacion=function(){
        
        /*
        if(scormService.getStatus() == "incomplete"){
            if(this.calif_final>=80){
                if(this.intentos<=1 && this.calif_final<100){
                    window.parent.saveGrade(this.calif_final); // Guarda calificacion en LMS
                }
                window.parent.saveStatus("passed");
            }else{
                window.parent.saveStatus("failed");
            }
        }*/
        
        top.close();
    }

});
 
app.controller('scoController', function($scope, $http, $sce, $window, assesmentService, scormService) {
    console.log("COntroller 2:::");       
    
    /*$scope.currentindex = 0;
    $scope.totalItems = 0;
    $scope.progressCourse = 0;
    //console.log(temaryService.my_json);
    $scope.contenido = "";
    //$scope.video = "";
    $scope.media = "";
    $scope.mediaID = "";
    
    $scope.tittle = "";*/
    /*$scope.$broadcast(function(){
        console.log("broadcast");
    });*/
    
    scormService.init();    
    assesmentService.init();
    
    //assesmentService.siguientePregunta();
    //videoService.init();
    //temaryService.init();
    
    
    /* SI HAY LOCATION */
    /*var my_location=scormService.getLocation();
    if(my_location){
        $scope.currentindex = parseInt(my_location);
    }*/
    
    $scope.assesmentService = assesmentService;
});
    
})();
