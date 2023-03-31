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