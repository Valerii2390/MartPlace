$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow arrow-prev"><img src="images/slider/chevron-left.png" alt="prev arrow" /></button>',
        nextArrow: '<button class="slick-arrow arrow-next"><img src="images/slider/chevron-right.png" alt="next arrow" /></button>',

        appendArrows: '.arrow-wrap'
    })
    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });
    var mixer = mixitup('.products__inner');

});