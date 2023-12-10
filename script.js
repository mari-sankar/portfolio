AOS.init();
$(document).ready(function(){
    $(window).scroll(function(){
                
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
    
});

    // multitext animation script
        
    var typingEffect = new Typed(".multiText", {
        strings: ["Student","Front-end Developer","RPA Developer","Designer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500
    })

    //Blog

    const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0];
    arrowIcons = document.querySelectorAll(".wrapper i");

    let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;
    let firstImgWidth = firstImg.clientWidth + 14;
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth - 0.3;

    const showHideIcons = () => {
        arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = carousel.scrollLeft >= scrollWidth ? "none" : "block";            
    }

    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
            setTimeout(() => showHideIcons(), 60);
        });
    });

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        carousel.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
        showHideIcons();
    }

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove("dragging");
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("touchstart", dragStart);

    document.addEventListener("mousemove", dragging);
    carousel.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("touchend", dragStop);

    //Menu bar

    let menu = document.querySelector(".fa-bars");
    let ul = document.querySelector("nav ul")
    menu.addEventListener("click",function(){
        ul.classList.toggle("showmenu");
    })
    let sun = document.querySelector("li .fa-sun")
    let moon = document.querySelector("li .fa-moon");
    moon.addEventListener("click",function(){
        document.body.classList.toggle("light-theme");
        sun.classList.toggle("show");
        moon.classList.toggle("hide");
    })
    sun.addEventListener("click",function(){
        document.body.classList.toggle("light-theme");
        sun.classList.toggle("show");
        moon.classList.toggle("hide");
    })