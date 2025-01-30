/**
 * @license videogular v1.4.0 http://videogular.com
 * Two Fucking Developers http://twofuckingdevelopers.com
 * License: MIT
 */
/**
 * @ngdoc directive
 * @name com.2fdevs.videogular.plugins.overlayplay.directive:vgOverlayPlay
 * @restrict E
 * @description
 * Shows a big play button centered when player is paused or stopped.
 *
 * <pre>
 * <videogular vg-theme="config.theme.url" vg-autoplay="config.autoPlay">
 *    <vg-media vg-src="sources"></vg-media>
 *
 *    <vg-overlay-play></vg-overlay-play>
 * </videogular>
 * </pre>
 *
 */



"use strict";
angular.module("com.2fdevs.videogular.plugins.overlayshowarea", [])
    .run(
        ["$templateCache", function ($templateCache) {            
            /*$templateCache.put("vg-templates/vg-overlay-showarea",
                '<div class="overlayShowareaContainer">\
                    <iframe ng-repeat="xpoint in vgcuepoints" ng-src="{{(xpoint.params.bindingto.indexOf(\'.html\')!=-1) ? JSON.parse(xpoint.params.bindingto).src : xpoint.params.url}}" ng-if="xpoint.params.type===\'content\' || xpoint.params.type===\'question\' || ((xpoint.params.bindingto.indexOf(\'.html\')!=-1) ? JSON.parse(xpoint.params.bindingto).type : \'\')===\'content\'" ng-style="{display: vgurl.id===xpoint.params.id ? \'block\':\'none\'}" scrolling="auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true" style="width: 90%; height: 90%; margin: 0px auto;"></iframe>\
                    <div style="font-size:16px; color:#ffffff; padding-top:5px;" ng-style="{display:(vgurl.type===\'content\' || ((xpoint.params.bindingto.indexOf(\'.html\')!=-1) ? JSON.parse(xpoint.params.bindingto).type : \'\')===\'content\') ? \'block\':\'none\'}"><div onclick="hideArea()" style="display:inline-block; cursor:pointer;">X Regresar</div></div>\
                </div>');*/
                // Anteiormente era el bueno
                $templateCache.put("vg-templates/vg-overlay-showarea",
                '<div class="overlayShowareaContainer">\
                    <iframe ng-repeat="xpoint in vgcuepoints" ng-src="{{vgurl.id===xpoint.params.id ? xpoint.params.url : \'contenido/blank/blank.html\'}}" ng-if="xpoint.params.type===\'content\' || xpoint.params.type===\'question\'" ng-style="{display: vgurl.id===xpoint.params.id ? \'block\':\'none\'}" scrolling="none" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true" style="width: 100%; height: 100%; margin: 0px auto; border:\'none\'"></iframe>\
                    <div style="font-size:16px; color:#ffffff; padding-top:5px;" ng-style="{display:vgurl.type===\'content\' ? \'block\':\'none\'}"><div onclick="hideArea()" style="display:inline-block; cursor:pointer;">X Regresar</div></div>\
                </div>');
                
              
        }]
    )
    .directive("vgOverlayShowarea", ["VG_STATES",
        function (VG_STATES) {

              // This returns a directive definition object
                // A directive definition object is a simple JavaScript object used for configuring the directive’s behaviour,template..etc
                // return {
                // restrict: 'AE', signifies that directive is Element/Attribute directive, 
                // "E" is for element, "A" is for attribute, "C" is for class, and "M" is for comment. 
                // Attributes are going to be the main ones as far as adding behaviors that get used the most.
                // If you don't specify the restrict property it will default to "A"
                //restrict :'AE',  

                // The values of scope property decides how the actual scope is created and used inside a directive. These values can be either “false”, “true” or “{}”. This creates an isolate scope for the directive.
                // '@' binding is for passing strings. These strings support {{}} expressions for interpolated values.
                // '=' binding is for two-way model binding. The model in parent scope is linked to the model in the directive's isolated scope.
                // '&' binding is for passing a method into your directive's scope so that it can be called within your directive. 
                // The method is pre-bound to the directive's parent scope, and supports arguments.
                /*scope: { 
                name: "@",  // Always use small casing here even if it's a mix of 2-3 words
                }, */


            return {
                restrict: "E",
                require: "^videogular",
                scope: {
                    vgcuepoints: "=?",
                    vgurl: "=?"
                },
                templateUrl: function (elem, attrs) {
                    return attrs.vgTemplate || 'vg-templates/vg-overlay-showarea';
                },
                link: function (scope, elem, attr, API) {
                    scope.onChangeState = function onChangeState(newState) {
                        /*switch (newState) {
                            case VG_STATES.PLAY:
                                scope.overlayPlayIcon = {};
                                break;

                            case VG_STATES.PAUSE:
                                scope.overlayPlayIcon = {play: true};
                                break;

                            case VG_STATES.STOP:
                                scope.overlayPlayIcon = {play: true};
                                break;
                        }*/
                    };

                    //scope.vgcuepoints = "contenido/MBF_09_11/MBF_09_11.html";
                    //console.log("$scope::::: " , scope.vgcuepoints);
                    

                    scope.onClickOverlayShowarea = function onClickOverlayShowarea(event) {
                        //API.playPause();
                    };

                    //scope.overlayPlayIcon = {play: true};

                    scope.$watch(
                        /*function () {
                            return API.currentState;
                        },
                        function (newVal, oldVal) {
                            scope.onChangeState(newVal);
                        }*/
                    );
                }
            }
        }
    ]);
