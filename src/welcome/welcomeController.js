/**
 *  welcome page
 *
 * @author Dima Zelenyuk
 */
app
    .controller('WelcomeController', function ($scope) {
        $(function(){
            var winHeight = window.innerHeight    ||
                document.documentElement.clientHeight ||
                document.body.clientHeight;

            var pageHeight = $('body').height();
            if (pageHeight < winHeight) {
                winHeight = winHeight - 260;
                $('.all-content-wraper').css('min-height',winHeight)
            }
            $('.first.circle').circleProgress({
                value: 0.7,
                size: 130
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(900 * progress));
            });

            $('.second.circle').circleProgress({
                value: 0.3,
                size: 130
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(30 * progress));
            });

            $('.third.circle').circleProgress({
                value: 0.9,
                size: 130
            }).on('circle-animation-progress', function(event, progress) {
                $(this).find('strong').html(Math.round(100 * progress));
            });


            $('.background').Geometryangle({
                mesh:{
                    width: 1.5,
                    height: 1.6,

                    // How far should the mesh vary into z-space.
                    depth: 15,

                    // Number of columns for the mesh.
                    columns: undefined,

                    columns_auto: true,

                    // Number of rows for the mesh.
                    rows: undefined,

                    rows_auto: true,
                    zoom: 1,
                    xRange: 0.8,
                    yRange: 0.1,
                    zRange: 1.0,
                    ambient: 'rgba(98, 162, 174, 1)',
                    diffuse: 'rgba(255, 120, 89, 1)',
                    background: 'rgb(255, 255, 255)',
                    speed: 0.0002,
                    fluctuationSpeed: 0.5,
                    fluctuationIntensity: 0,
                    onRender: function () {
                    },
                    floorPosition: false,
                    draw: true
                },

                lights: [{
                    // How many light sources belong to this light.
                    count: 2,

                    xyScalar: 1,

                    // Position of light source.
                    zOffset: 100,

                    ambient: 'rgba(98, 162, 174, 1)',
                    diffuse: 'rgba(255, 120, 89, 1)',
                    speed: 0.010,
                    gravity: 1200,

                    // Dampening of light's movements.
                    dampening: 0.95,

                    minLimit: 3,
                    maxLimit: null,
                    minDistance: 20,
                    maxDistance: 400,
                    autopilot: false,
                    draw: false, //show circle
                    bounds: FSS.Vector3.create(),
                    step: FSS.Vector3.create(
                        Math.randomInRange(0.2, 1.0),
                        Math.randomInRange(0.2, 1.0),
                        Math.randomInRange(0.2, 1.0)
                    )
                }],

                line: {},

                vertex: {}
            });
        });

    });


