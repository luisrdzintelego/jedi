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
 *    <vg-overlay-play></vg-overlay-sensitivearea>
 * </videogular>
 * </pre>
 *
 */
"use strict";
angular.module("com.2fdevs.videogular.plugins.overlaysensitivearea", [])
    .run(
        ["$templateCache", function ($templateCache) {
            $templateCache.put("vg-templates/vg-overlay-sensitivearea",
                '<div class="overlaySensitiveareaContainer">\
                    <iframe ng-repeat="xpoint in vgcuepoints" ng-src="{{vgurl.id===xpoint.params.id ? xpoint.params.url : \'contenido/blank/blank.html\' }}" ng-if="xpoint.params.type===\'hotspot\'" ng-style="{display: vgurl.id===xpoint.params.id ? \'block\':\'none\'}" scrolling="no" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true" style="width: 100%; height: 100%; margin: 0px auto;"></iframe>\
                    <div style="font-size:16px; color:#ffffff; padding-top:5px;" ng-style="{display:vgurl.type===\'content\' ? \'block\':\'none\'}"><div onclick="hideArea()" style="display:inline-block; cursor:pointer;">X Regresar</div></div>\
                </div>');

               /* $templateCache.put("vg-templates/vg-overlay-sensitivearea",
                '<div class="overlaySensitiveareaContainer">\
                    <iframe ng-repeat="xpoint in vgcuepoints" ng-src="{{xpoint.params.url}}" ng-if="xpoint.params.type===\'hotspot\'" ng-style="{display: vgurl.id===\'marcador\'+($index+1) ? \'block\':\'none\'}" scrolling="no" frameborder="0" allow="autoplay; fullscreen" allowfullscreen="true" style="width: 100%; height: 100%;"></iframe>\
                </div>');*/
        }]
    )
    .directive("vgOverlaySensitivearea", ["VG_STATES",
        function (VG_STATES) {
            return {
                restrict: "E",
                require: "^videogular",
                scope: {
                    vgcuepoints: "=?",
                    vgurl: "=?"
                },
                templateUrl: function (elem, attrs) {
                    return attrs.vgTemplate || 'vg-templates/vg-overlay-sensitivearea';
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

                    //scope.cuepoint_recurso = "contenido/hotspot/hotspot.html";
                    //console.log("vgurl::::: "+ vgurl);

                    scope.onClickOverlaysSensitivearea = function onClickOverlaySensitivearea(event) {
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

