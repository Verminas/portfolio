"use client"

import {useCallback} from "react";
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
// import {theme} from "../../styles/Theme";

export const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);
  return (
    // <Particles
    //   id="tsparticles"
    //   init={particlesInit}
    //   loaded={particlesLoaded}
    //   options={{
    //     fpsLimit: 120,
    //     interactivity: {
    //       events: {
    //         onHover: {
    //           enable: true,
    //           mode: "repulse",
    //         },
    //         resize: true,
    //       },
    //       modes: {
    //         push: {
    //           quantity: 4,
    //         },
    //         repulse: {
    //           distance: 120,
    //           duration: 0.4,
    //         },
    //       },
    //     },
    //     particles: {
    //       color: {
    //         value: 'rgb(231, 15, 170)',
    //       },
    //       links: {
    //         color: 'rgb(231, 15, 170)',
    //         distance: 200,
    //         enable: true,
    //         opacity: 0.5,
    //         width: 1,
    //       },
    //       move: {
    //         direction: "none",
    //         enable: true,
    //         outModes: {
    //           default: "bounce",
    //         },
    //         random: false,
    //         speed: 2,
    //         straight: false,
    //       },
    //       number: {
    //         density: {
    //           enable: true,
    //           area: 1000,
    //         },
    //         value: 70,
    //       },
    //       opacity: {
    //         value: 0.5,
    //       },
    //       shape: {
    //         type: "circle",
    //       },
    //       size: {
    //         value: {min: 0.5, max: 2},
    //       },
    //     },
    //     detectRetina: true,
    //   }}
    // />

    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "particles": {
          "number": {
            "value": 109,
            "density": {
              "enable": true,
              "value_area": 868.0624057955
            }
          },
          "color": {
            "value": "rgb(120,122,198)"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 15,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 500,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 0.5
              }
            },
            "bubble": {
              "distance": 400,
              "size": 4,
              "duration": 0.3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}
       />
  );
};