/* ======================================================
   LANDING PAGE RUMAH
   script.js
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =============================
       SCROLL ANIMATION
    ============================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(
        ".section, .item, .feature-item, .gallery-item, .spec-card div, .video-box, .map, .cta"
    ).forEach(el => {

        el.classList.add("hidden");
        observer.observe(el);

    });


    /* =============================
       NAVBAR SHADOW
    ============================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (!header) return;

        header.style.boxShadow =
            window.scrollY > 15
                ? "0 10px 25px rgba(0,0,0,.12)"
                : "0 2px 10px rgba(0,0,0,.05)";

    });


    /* =============================
       SMOOTH SCROLL
    ============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =============================
       LAZY LOAD YOUTUBE
    ============================== */

    const iframe = document.querySelector(".video-box iframe");

    if (iframe) {

        const src = iframe.getAttribute("src");

        iframe.removeAttribute("src");

        const videoObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    iframe.src = src;
                    videoObserver.disconnect();

                }

            });

        });

        videoObserver.observe(iframe);

    }


    /* =============================
       ACTIVE MENU
    ============================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {
                current = section.id;
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }

        });

    });

});


/* =============================
   LIGHTBOX GALERI
============================= */

function openImage(src) {

    const modal = document.getElementById("imageModal");
    const img = document.getElementById("modalImg");

    if (!modal || !img) return;

    img.src = src;
    modal.style.display = "flex";

}

function closeImage() {

    const modal = document.getElementById("imageModal");

    if (modal) {
        modal.style.display = "none";
    }

}


/* =============================
   TUTUP LIGHTBOX
============================= */

document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("imageModal");

    if (!modal) return;

    modal.addEventListener("click", function (e) {

        if (e.target === modal) {
            closeImage();
        }

    });

});


/* =============================
   TOMBOL ESC
============================= */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeImage();
    }

});

/* =============================
   SHARE WEBSITE
============================= */

const pageURL = window.location.href;

const pageTitle =
"Rumah Dijual Cinere Residence | SHM | 3 KT | Rp850 Juta";

const shareText =
"Cek rumah dijual siap huni di Cinere Residence.\n\n";

const wa = document.getElementById("shareWhatsapp");

if(wa){

    wa.href =
    "https://wa.me/?text=" +
    encodeURIComponent(
        shareText + pageTitle + "\n" + pageURL
    );

}

const fb = document.getElementById("shareFacebook");

if(fb){

    fb.href =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    encodeURIComponent(pageURL);

    fb.target = "_blank";

}

const copy = document.getElementById("copyLink");

if(copy){

    copy.addEventListener("click", async ()=>{

        try{

            await navigator.clipboard.writeText(pageURL);

            alert("Link berhasil disalin.");

        }catch{

            prompt("Salin link berikut:", pageURL);

        }

    });

}
