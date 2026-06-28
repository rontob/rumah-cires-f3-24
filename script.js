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
       GALLERY LIGHTBOX
    ============================== */

    const images=document.querySelectorAll(".gallery img");

    const lightbox=document.createElement("div");

    lightbox.id="lightbox";

    lightbox.innerHTML="<img>";

    document.body.appendChild(lightbox);

    const lightboxImage=lightbox.querySelector("img");

    images.forEach(image=>{

        image.addEventListener("click",()=>{

            lightbox.classList.add("active");

            lightboxImage.src=image.src;

        });

    });

    lightbox.addEventListener("click",()=>{

        lightbox.classList.remove("active");

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



    /* =============================
       ACTIVE MENU
    ============================== */

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".navbar a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-100;

            const height=section.clientHeight;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

});
