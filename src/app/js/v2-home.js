$(document).ready(function () {

/****************************************************/
/********************** HEADER **********************/
/****************************************************/

    // BLOCK SCROLL
    $(document).scroll(function (event) {
        var scrollTop = $(document).scrollTop();
        if (scrollTop <= 10) {
            $('.header-abad').removeClass('scroll-active');
        } else {
            $('.header-abad').addClass('scroll-active');
        }
    });

    // BLOCK HEADER
    $('.content-navicon i').click(function() {
        openMenu();
    });
    $('.cajita-close > i').click(function() {
        closeMenu();
    });
    $(".fm-fondo-general").click(function() {
        closeMenu();
    });

    // BLOCK SLIDER
    jQuery('.container-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });

    // BLOCK VERTICAL SLIDER
    jQuery('.slider-central').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-vertical'
    });
    jQuery('.slider-vertical').slick({
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '100px',
        dots: false,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        asNavFor: '.slider-central'
    });
    jQuery('.item-imagen').click(function() {
        jQuery('.item-imagen').removeClass('slick-select');
        jQuery('.item-imagen').removeClass('slick-adyacentes');
        jQuery(this).addClass('slick-select');
        jQuery(this).prev().addClass('slick-adyacentes');
        jQuery(this).next().addClass('slick-adyacentes');
    });

    // BLOCK INFORMADO SLIDER
    jQuery('.caja-informado').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode:false,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            }
        ]
    });


    // BLOCK INFORMADO SLIDER
    jQuery('.caja-actividades').slick({
        infinite: false,
        rows:2,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        arrows: false,
        dots: true,
        responsive: [{
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode:false,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            }
        ]
    });


});

function openMenu() {
    $('.content-nav').addClass("active-mobile");
    $('.fm-fondo-general').addClass("active-mobile");
    $('body').addClass("oveflow-hidden");
}
function closeMenu() {
    $('.content-nav').removeClass("active-mobile");
    $('.fm-fondo-general').removeClass("active-mobile");
    $('body').removeClass("oveflow-hidden");
}