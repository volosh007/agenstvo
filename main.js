$('.said-inner').slick({
    slidesToShow: 2,
    dots: true,
    responsive: [{
        breakpoint: 798,
        settings: {
            slidesToShow: 1
        }
    }]
    
})


var burger = $('.burger');
var menu = $('.menu')
var menu_active = $('.menu_active')
var cross = $('.cross')
burger.click(function(){
    menu.toggleClass('menu_active')
});

cross.click(function(){
    menu.removeClass('menu_active')
})