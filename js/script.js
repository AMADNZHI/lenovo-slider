(function () {
    var tab1 = document.querySelector(".tab_item__vibe");
    var tab2 = document.querySelector(".tab_item__yoga");
    var tab3 = document.querySelector(".tab_item__ideapad");
    var tab4 = document.querySelector(".tab_item__a-series");
    var slide1 = document.querySelector(".slideshow_item__vibe");
    var slide2 = document.querySelector(".slideshow_item__yoga");
    var slide3 = document.querySelector(".slideshow_item__ideapad");
    var slide4 = document.querySelector(".slideshow_item__a-series");

    tab1.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("1");
        tab2.classList.remove('tab_item__active');
        tab3.classList.remove('tab_item__active');
        tab4.classList.remove('tab_item__active');  
        tab1.classList.add('tab_item__active'); 
        slide2.classList.remove('slideshow_item__active');
        slide3.classList.remove('slideshow_item__active');
        slide4.classList.remove('slideshow_item__active');  
        slide1.classList.add('slideshow_item__active');  
    });

    tab2.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("2");
        tab1.classList.remove('tab_item__active');
        tab3.classList.remove('tab_item__active');
        tab4.classList.remove('tab_item__active');  
        tab2.classList.add('tab_item__active');
        slide1.classList.remove('slideshow_item__active');
        slide3.classList.remove('slideshow_item__active');
        slide4.classList.remove('slideshow_item__active');  
        slide2.classList.add('slideshow_item__active');        
    });

    tab3.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("3");
        tab2.classList.remove('tab_item__active');
        tab1.classList.remove('tab_item__active');
        tab4.classList.remove('tab_item__active');  
        tab3.classList.add('tab_item__active');
        slide2.classList.remove('slideshow_item__active');
        slide1.classList.remove('slideshow_item__active');
        slide4.classList.remove('slideshow_item__active');  
        slide3.classList.add('slideshow_item__active');                                
    });

    tab4.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("4");
        tab2.classList.remove('tab_item__active');
        tab3.classList.remove('tab_item__active');
        tab1.classList.remove('tab_item__active');  
        tab4.classList.add('tab_item__active');
        slide2.classList.remove('slideshow_item__active');
        slide3.classList.remove('slideshow_item__active');
        slide1.classList.remove('slideshow_item__active');  
        slide4.classList.add('slideshow_item__active');                                
    });
})();