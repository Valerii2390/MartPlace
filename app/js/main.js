$(document).ready(function() {
    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
        appendArrows: '.arrows-wrap'
    })
    $('.slider__items').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
        appendArrows: '.arrows-wrap'

    })
    $('.slider1').slick({

        prevArrow: '<button type="button" class="slick-arrow slick-arrow--prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-arrow--next"><span class="lnr lnr-chevron-right"></span></button>',
        appendArrows: '.arrows-wrap'

    })
});