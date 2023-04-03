/* toggle burger menu ikonku */

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

/* active navbar nápis */

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height  =sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset+height) {
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            })
        };
    })
    /* Sticky navbar */

    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    /* zrusenie navbaru pri mobilnom zobrazeni a knknuti */

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

// Scroll reveal

ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.domov-content, .heading', { origin: "top" });
ScrollReveal().reveal('.domov-img, .sluzby-container, .galeria-box, .kontakt form', { origin: "bottom" });
ScrollReveal().reveal('.domov-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.domov-content p, .onas-content', { origin: "right" });

// typed javascript / meniaci sa text
const typed = new Typed(".multiple-text", {
    strings: ["Bratislava", "Pezinok", "Senec"],
    typeSpeed: 110,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

function sendMail() {
    var par = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobil: document.getElementById("mobil").value,
        sluzba: document.getElementById("sluzba").value,
        dopln_sluzba: document.getElementById("dopln_sluzba").value,
        adresa: document.getElementById("adresa").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_pzqfh5n";
    const templateID = "template_h6mrtry";

    emailjs.send(serviceID, templateID, par).then((res) => {
        document.getElementById("name").value = "",
        document.getElementById("email").value = "",
        document.getElementById("mobil").value = "",
        document.getElementById("sluzba").value = "",
        document.getElementById("dopln_sluzba").value = "",
        document.getElementById("adresa").value = "",
        document.getElementById("message").value = "",
        console.log(res);
        alert("Vaša objednávka bola úspešne odoslaná");
    });
}

// particles JS - JSON

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
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
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
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
  });