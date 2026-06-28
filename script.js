/* ======================================================
   LANDING PAGE RUMAH
   script.js
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =============================
       FADE UP ANIMATION
    ============================== */

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    document.querySelectorAll(".section,.item,.feature-item,.gallery img,.spec-card div,.video-box,.map,.cta")
    .forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

const header=document.querySelector(".header");

if(header){

    window.addEventListener("scroll",()=>{

        ...

    });

}

    /* =============================
       NAVBAR SHADOW
    ============================== */

    const header=document.querySelector(".header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>15){

            header.style.boxShadow="0 10px 25px rgba(0,0,0,.12)";

        }

        else{

            header.style.boxShadow="none";

        }

    });



    /* =============================
       SMOOTH SCROLL
    ============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });



    /* =============================
       LAZY YOUTUBE
    ============================== */

    const iframe=document.querySelector(".video-box iframe");

    if(iframe){

        const src=iframe.getAttribute("src");

        iframe.removeAttribute("src");

        const io=new IntersectionObserver(entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    iframe.src=src;

                    io.disconnect();

                }

            });

        });

        io.observe(iframe);

    }



// ==========================
// LIGHTBOX GALERI
// ==========================

function openImage(src){

    document.getElementById("modalImg").src = src;

}

function closeImage(){

    document.getElementById("imageModal").style.display = "none";

}

document.getElementById("imageModal").addEventListener("click", function(e){

    if(e.target.id==="imageModal"){

        closeImage();

    }

});
const modal=document.getElementById("imageModal");

if(modal){

    modal.addEventListener("click",function(e){

        if(e.target===modal){

            closeImage();

        }

    });

}
