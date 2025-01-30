var timePoint = [];
var start = 5;
var end = 5.5;

var result = {
    timeLapse:{
      start: start, end: end
    },
    onEnter: function onEnter(currentTime, timeLapse, params) {
        console.log('onENTER CuePoint ' + params.type);
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onLeave: function onLeave(currentTime, timeLapse, params) {
        console.log('onleave');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.resetVariables();
    },
    onUpdate: function onUpdate(currentTime, timeLapse, params) {
        console.log('onUpdate');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onComplete: function onComplete(currentTime, timeLapse, params) {
        console.log('onComplete');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.completeCuePoint(currentTime, timeLapse, params);
    },
    params: {  
        id:"marcador1",      
        url:"contenido/showarea1/showarea1.html",
        loop: false,
        automaticjump: false,
        //time_loop: "",
        type: "question", // puede ser hotspot o content o question
        visible: true, 
        puntos:0,
        puntos_min:0,
        puntos_max:10,
        leyenda:"Pregunta con stop al video (content)",
        jumptime1: '5.5',
        jumptime2: '21'
    }
};
timePoint.push(result);

start = 13;
end = 19;
result = {
    timeLapse:{
      start: start, end: end
    },
    onEnter: function onEnter(currentTime, timeLapse, params) {
        console.log('onENTER CuePoint ' + params.type);
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onLeave: function onLeave(currentTime, timeLapse, params) {
        console.log('onleave');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.resetVariables();
    },
    onUpdate: function onUpdate(currentTime, timeLapse, params) {
        console.log('onUpdate');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onComplete: function onComplete(currentTime, timeLapse, params) {
        console.log('onComplete');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.completeCuePoint(currentTime, timeLapse, params);
    },
    params: {  
        id:"marcador2",      
        url:"contenido/hotspot2/hotspot2.html",
        loop: false,
        automaticjump: false,
        //time_loop: "",
        type: "hotspot", // puede ser hotspot o content
        visible: true, 
        puntos:0,
        puntos_min:0,
        puntos_max:10,
        leyenda:"Botón de información sin pausa en el video (hotspot)",
        jumptime1: '',
        jumptime2: ''
    }
};
timePoint.push(result);

start = 13;
end = 19;
result = {
    timeLapse:{
      start: start, end: end
    },
    onEnter: function onEnter(currentTime, timeLapse, params) {
        console.log('onENTER CuePoint ' + params.type);
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onLeave: function onLeave(currentTime, timeLapse, params) {
        console.log('onleave');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.resetVariables();
    },
    onUpdate: function onUpdate(currentTime, timeLapse, params) {
        console.log('onUpdate');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onComplete: function onComplete(currentTime, timeLapse, params) {
        console.log('onComplete');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.completeCuePoint(currentTime, timeLapse, params);
    },
    params: {  
        id:"marcador3",      
        url:"contenido/showarea3/showarea3.html",
        loop: false,
        automaticjump: false,
        //time_loop: "",
        type: "content", // puede ser hotspot o content
        visible: false, 
        puntos:0,
        puntos_min:0,
        puntos_max:10,
        leyenda:"Slider de información en animate con stop al video cuando se muestra (content)",
        jumptime1: '',
        jumptime2: ''
    }
};
timePoint.push(result);

start = 25;
end = 32;
result = {
    timeLapse:{
      start: start, end: end
    },
    onEnter: function onEnter(currentTime, timeLapse, params) {
        console.log('onENTER CuePoint ' + params.type);
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onLeave: function onLeave(currentTime, timeLapse, params) {
        console.log('onleave');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.resetVariables();
    },
    onUpdate: function onUpdate(currentTime, timeLapse, params) {
        console.log('onUpdate');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onComplete: function onComplete(currentTime, timeLapse, params) {
        console.log('onComplete');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.completeCuePoint(currentTime, timeLapse, params);
    },
    params: {  
        id:"marcador4",      
        url:"contenido/hotspot4/hotspot4.html",
        loop: false,
        automaticjump: false,
        //time_loop: "",
        type: "hotspot", // puede ser hotspot o content
        visible: true,
        puntos:0,
        puntos_min:0,
        puntos_max:10, 
        leyenda:"Botón de información sin pausa en el video (hotspot)",
        jumptime1: '',
        jumptime2: ''
    }
};
timePoint.push(result);

start = 25;
end = 32;
result = {
    timeLapse:{
      start: start, end: end
    },
    onEnter: function onEnter(currentTime, timeLapse, params) {
        console.log('onENTER CuePoint ' + params.type);
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onLeave: function onLeave(currentTime, timeLapse, params) {
        console.log('onleave');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.resetVariables();
    },
    onUpdate: function onUpdate(currentTime, timeLapse, params) {
        console.log('onUpdate');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onComplete: function onComplete(currentTime, timeLapse, params) {
        console.log('onComplete');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.completeCuePoint(currentTime, timeLapse, params);
    },
    params: {  
        id:"marcador5",      
        url:"contenido/showarea5/index.html",
        loop: false,
        automaticjump: false,
        //time_loop: "",
        type: "content", // puede ser hotspot o content
        visible: false, 
        puntos:0,
        puntos_min:0,
        puntos_max:10,
        leyenda:"Página web de información con stop al video cuando se muestra (content)",
        jumptime1: '',
        jumptime2: ''
    }
};
timePoint.push(result);

start = 40;
end = 40.5;
result = {
    timeLapse:{
      start: start, end: end
    },
    onEnter: function onEnter(currentTime, timeLapse, params) {
        console.log('onENTER CuePoint ' + params.type);
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onLeave: function onLeave(currentTime, timeLapse, params) {
        console.log('onleave');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.resetVariables();
    },
    onUpdate: function onUpdate(currentTime, timeLapse, params) {
        console.log('onUpdate');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onComplete: function onComplete(currentTime, timeLapse, params) {
        console.log('onComplete');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.completeCuePoint(currentTime, timeLapse, params);
    },
    params: {  
        id:"marcador6",      
        url:"contenido/showarea6/showarea6.html",
        loop: false,
        automaticjump:false,
        //time_loop: "",
        type: "question", // puede ser hotspot o content o question
        visible: true, 
        puntos:0,
        puntos_min:0,
        puntos_max:10,
        leyenda:"Pregunta en animate con stop al video cuando se muestra (content)",
        jumptime1: '1',
        jumptime2: '40.5'
    }
};
timePoint.push(result);

start = 48;
end = 57;
result = {
    timeLapse:{
      start: start, end: end
    },
    onEnter: function onEnter(currentTime, timeLapse, params) {
        console.log('onENTER CuePoint ' + params.type);
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onLeave: function onLeave(currentTime, timeLapse, params) {
        console.log('onleave');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.resetVariables();
    },
    onUpdate: function onUpdate(currentTime, timeLapse, params) {
        console.log('onUpdate');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onComplete: function onComplete(currentTime, timeLapse, params) {
        console.log('onComplete');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.completeCuePoint(currentTime, timeLapse, params);
    },
    params: {  
        id:"marcador7",      
        url:"contenido/hotspot7/hotspot7.html",
        loop: true,
        automaticjump:false,
        //time_loop: "",
        type: "hotspot", // puede ser hotspot o content o question
        visible: true, 
        puntos:0,
        puntos_min:0,
        puntos_max:10,
        leyenda:"Pregunta en animate con LOOP al video cuando se muestra (content)",
        jumptime1: '1',
        jumptime2: '58'
    }
};
timePoint.push(result);

start = 70;
end = 70.5;
result = {
    timeLapse:{
      start: start, end: end
    },
    onEnter: function onEnter(currentTime, timeLapse, params) {
        console.log('onENTER CuePoint ' + params.type);
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onLeave: function onLeave(currentTime, timeLapse, params) {
        console.log('onleave');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.resetVariables();
    },
    onUpdate: function onUpdate(currentTime, timeLapse, params) {
        console.log('onUpdate');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.activateCuePoint(currentTime, timeLapse, params);
    },
    onComplete: function onComplete(currentTime, timeLapse, params) {
        console.log('onComplete');
        var $scope = angular.element(document.getElementsByTagName('body')).scope();
        $scope.completeCuePoint(currentTime, timeLapse, params);
    },
    params: {  
        id:"marcador8",      
        url:"contenido/jump/jump.html",
        loop: false,
        automaticjump:true,
        //time_loop: "",
        type: "hotspot", // puede ser hotspot o content o question
        visible: true, 
        puntos:0,
        puntos_min:0,
        puntos_max:10,
        leyenda:"Salto a otro punto del video (hotspot)",
        jumptime1: '100',
        jumptime2: '0'
    }
};
timePoint.push(result);