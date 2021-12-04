const particlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: false,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "image",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/krinnxb23kgp75s0jyhp",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5050784055306087,
      random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 51.29702556170245,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 157.83700172831522,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 4,
      direction: "left",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 1420.5330155548368,
        rotateY: 7260.5020795025
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 120,
        line_linked: {
          opacity: 0.5
        }
      },
      bubble: {
        distance: 131.86813186813188,
        size: 35.964035964035965,
        duration: 9.59040959040959,
        opacity: 1,
        speed: 3
      },
      repulse: {
        distance: 335.6643356643357,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

export default particlesConfig;