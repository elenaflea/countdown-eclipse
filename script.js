
function eclipseCountdown () {
    let eclipseDate = new Date ("August 17, 2026 19:31:43");
    const now = new Date();
    const diff = eclipseDate-now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor (diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor ((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor ((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor ((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;

        clearInterval (timerID);
        eclipseTotal ();
    }
}

let timerID = setInterval (eclipseCountdown, 1000);

function eclipseTotal() {
    const heading = document.querySelector(".totale");

    heading.textContent = "Attention : l’observation d’une éclipse de Soleil requiert des précautions, il faut porter des lunettes spéciales de protection."
    heading.classList.add("totale-eclipse");
}

    const button = document.querySelector("#myButton");
    button.addEventListener ("click", function(){
        document.querySelector("#myAudio").play();
    })
    

    particlesJS("particles-js", {
        "particles":{
            "number":{
                "value":120,
                "density":{
                    "enable":true,
                    "value_area":800
                }
            },"color":{
                "value":"#ffffff"
            },
            "shape":{
                "type":"circle",
                "stroke":{
                    "width":0,
                    "color":"#000000"
                },"polygon":{
                    "nb_sides":5
                },"image":{
                    "src":"img/github.svg",
                    "width":100,
                    "height":100
                }
            },
                "opacity":{
                    "value":0.9,
                    "random":false,
                    "anim":{
                        "enable":false,
                        "speed":1,
                        "opacity_min":0.1,
                        "sync":false
                    }
                },
                    "size":{
                        "value":4,
                        "random":true,
                        "anim":{
                            "enable":false,
                            "speed":80,
                            "size_min":0.1,
                            "sync":false
                        }
                    },
                    "line_linked":{
                        "enable":true,
                        "distance":150,
                        "color":"#ffffff",
                        "opacity":0.6,
                        "width":1
                    },
                        "move":{
                            "enable":true,
                            "speed":1,
                            "direction":"none",
                            "random":false,
                            "straight":false,
                            "out_mode":"out",
                            "bounce":false,
                            "attract":{
                                "enable":false,
                                "rotateX":1200,
                                "rotateY":1200
                            }
                        }
                    },
                    "interactivity":{
                        "detect_on":"canvas",
                        "events":{
                            "onhover":{
                                "enable":true,
                                "mode":"repulse"
                            },"onclick":{
                                "enable":true,
                                "mode":"push"
                            },
                            "resize":true
                        },
                        "modes":{
                            "grab":{
                                "distance":200,
                                "line_linked":{
                                    "opacity":1
                                }
                            },
                            "bubble":{
                                "distance":400,
                                "size":40,
                                "duration":2,
                                "opacity":8,
                                "speed":3
                            },
                            "repulse":{
                                "distance":100,
                                "duration":0.4
                            },
                            "push":{
                                "particles_nb":8
                            },
                            "remove":{"particles_nb":2}
                        }},
                        "retina_detect":true
                    });
                    