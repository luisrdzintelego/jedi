var timePoint = [];
var result = null;

result = {
	timeLapse:{start: 60, end: 66.5},
	onEnter: function onEnter(currentTime, timeLapse, params) {
		var $scope = angular.element(document.getElementsByTagName('body')).scope(); $scope.activateCuePoint(currentTime, timeLapse, params);
	},
	onLeave: function onLeave(currentTime, timeLapse, params) {
		var $scope = angular.element(document.getElementsByTagName('body')).scope(); $scope.resetVariables();
	},
	onUpdate: function onUpdate(currentTime, timeLapse, params) {
		var $scope = angular.element(document.getElementsByTagName('body')).scope(); $scope.activateCuePoint(currentTime, timeLapse, params);
	},
	onComplete: function onComplete(currentTime, timeLapse, params) {
		var $scope = angular.element(document.getElementsByTagName('body')).scope(); $scope.completeCuePoint(currentTime, timeLapse, params);
	},
	params: {
		id: '386',
		nombre:'Marcador',
		url:'contenido/386/index.html',
		loop: false,
		automaticjump: false,
		type: 'question', /* puede ser hotspot o content o question */
		type_num: 'op6', /* puede ser op1, op2, op3, op4, op5 u op6 */
		visible: true,
		bindingto: '',
		puntos:0,
		puntos_min:0,
		puntos_max:10,
		leyenda:'',
		jumptime1: 66.5,
		jumptime2: 0,
		jumptime3: 0,
		jumptime4: 0
	}
}
timePoint.push(result);

