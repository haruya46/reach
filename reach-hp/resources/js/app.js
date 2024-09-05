import $ from 'jquery';
window.$ = $;
window.jQuery = $;

// slick.jsのインポート
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// 他のコード
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        centerMode: true,
        variableWidth: true,
        dots: true,
    });

    // 他のjQueryコード
});

$(function () {

        console.log("きた");
        $('.fadein-top').fadeIn(4000);

        $(window).scroll(function () {
                $('.fadein').each(function () {
                        var position = $(this).offset().top;
                        var scroll = $(window).scrollTop();
                        var windowHeight = $(window).height();
                        if (scroll > position - windowHeight + 200) {
                                $(this).addClass('active');
                        }
                });
        });

        $(window).scroll(function () {
                $('.fadein-right').each(function () {
                        var position = $(this).offset().top;
                        var scroll = $(window).scrollTop();
                        var windowHeight = $(window).height();
                        if (scroll > position - windowHeight + 200) {
                                $(this).addClass('active');
                        }
                });
                $('.fadein-left').each(function () {
                        var position = $(this).offset().top;
                        var scroll = $(window).scrollTop();
                        var windowHeight = $(window).height();
                        if (scroll > position - windowHeight + 200) {
                                $(this).addClass('active');
                        }
                });
        });

        $(window).scroll(function () {
                $('.fadein-1').each(function () {
                        var position = $(this).offset().top;
                        var scroll = $(window).scrollTop();
                        var windowHeight = $(window).height();
                        if (scroll > position - windowHeight + 200) {
                                $(this).addClass('active');
                        }
                });
                $('.fadein-2').each(function () {
                        var position = $(this).offset().top;
                        var scroll = $(window).scrollTop();
                        var windowHeight = $(window).height();
                        if (scroll > position - windowHeight + 200) {
                                $(this).addClass('active');
                        }
                });
                $('.fadein-3').each(function () {
                        var position = $(this).offset().top;
                        var scroll = $(window).scrollTop();
                        var windowHeight = $(window).height();
                        if (scroll > position - windowHeight + 200) {
                                $(this).addClass('active');
                        }
                });
                $('.fadein-4').each(function () {
                        var position = $(this).offset().top;
                        var scroll = $(window).scrollTop();
                        var windowHeight = $(window).height();
                        if (scroll > position - windowHeight + 200) {
                                $(this).addClass('active');
                        }
                });
        });

});

