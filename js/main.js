$(function(){
    $(".fa-bars").click(function(){
        $(".list").slideToggle()
    });
});
//Owl carousel for blog

const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 1
    },
    960: {
        items: 1
    }
}
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive: responsive
});

//move up
$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
    }, 1000);
});

//AOS INSTANCE
AOS.init();