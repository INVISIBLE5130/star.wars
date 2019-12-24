$('.owl-carousel').owlCarousel({
    margin:0,
    nav:true,
    navClass: ["slider__nav--left", "slider__nav--right"],
    responsive:{
        0:{
            items:1
        },
        700:{
            items:2
        },
        900:{
            items:3
        },
        1200:{
        	items:4
        }
    }
})

