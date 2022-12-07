import $ from 'jquery'
import gsap from 'gsap'

import { ScrollTrigger, Tween } from "react-gsap"

// import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

function Home() {
    // $(function (_Home) {
    // export default function _Home() {
    $(window).trigger('scroll');

    const w = 124;
    const h = 124;

    $(window).mousemove(function (e) {
        const xVal = e.clientX;
        const yVal = e.clientY;

        gsap.to('.cursor', {
            x: xVal,
            y: yVal,
        });
    });

    $('a').mousemove(function (e) {
        gsap.to('.cursor', {
            width: w,
            height: h,
            xPercent: -50,
            yPercent: -50,
        });

        if ($(e.target).parents('.visual-left').length) {
            $('.cursor').html('<span>discover</span>');
        } else if ($(e.target).parents('.visual-right').length) {
            $('.cursor').html('<span>event</span>');
        } else if ($(e.target).parents('.sc-product').length) {
            $('.cursor').html('<span>click</span>');
        } else if ($(e.target).parents('.sc-story').length) {
            $('.cursor').html('<span>story</span>');
        } else if ($(e.target).parents('.sc-video').length) {
            $('.cursor').html('<span>view</span>');
        } else {
            $('.cursor').html('');
        }
    });

    $('a').mouseout(function (e) {
        gsap.to('.cursor', {
            width: 0,
            height: 0,
        });
    });

    $('event-item').each(function (idx, el) {
        const child = $(this).find('a');

        gsap.from(child, {
            opacity: 0,
            yPercent: 20,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'bottom top',
            },
        });
    });

    var swiper = new Swiper('.visual-left .swiper', {
        effect: 'fade',
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: '.count',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.btn-set.next',
            prevEl: '.btn-set.prev',
        },
        loop: true,
        on: {
            init: function () {
                $('.swiper-progress-bar').removeClass('animate');
                $('.swiper-progress-bar').removeClass('active');
                $('.swiper-progress-bar').addClass('animate');
                $('.swiper-progress-bar').addClass('active');
            },
            slideChangeTransitionStart: function () {
                $('.swiper-progress-bar').removeClass('animate');
                $('.swiper-progress-bar').removeClass('active');
                $('.swiper-progress-bar').addClass('active');
            },
            slideChangeTransitionEnd: function () {
                $('.swiper-progress-bar').addClass('animate');
            },
        },
    });

    gsap.set('.rolling-text p', {
        yPercent: -100,
    });

    gsap.set('.turn', {
        yPercent: 0,
    });

    const rollingText = gsap
        .timeline({
            defaults: {
                ease: 'none',
                delay: 3,
            },
        })
        .addLabel('m1')
        .to('.rolling-text .tone', { yPercent: 0 }, 'm1')
        .to('.rolling-text .turn', { yPercent: 100 }, 'm1')
        .set('.rolling-text .turn', { yPercent: -100 })
        .addLabel('m2')
        .to('.rolling-text .turn', { yPercent: 0 }, 'm2')
        .to('.rolling-text .tone', { yPercent: 100 }, 'm2')
        .set('.rolling-text .tone', { yPercent: -100 });
    rollingText.repeat(-1);

    var swiper = new Swiper('.best-slide', {
        slidesPerView: 4,
    });

    gsap.to('.bg', {
        autoAlpha: 1,
        ease: 'power1.in',
        scrollTrigger: {
            trigger: '.sc-visual',
            start: 'bottom center',
            end: 'bottom 100px',
            scrub: 1,
        },
    });

    gsap.to('.visual-type', {
        autoAlpha: 0,
        ease: 'power1.in',
        scrollTrigger: {
            trigger: '.sc-visual',
            start: 'bottom bottom',
            end: 'bottom 800px',
            scrub: 1,
        },
    });

    gsap.to('.visual-figure', {
        autoAlpha: 0,
        ease: 'power1.in',
        scrollTrigger: {
            trigger: '.sc-visual',
            start: 'bottom bottom',
            end: 'bottom 800px',
            scrub: 1,
        },
    });

    // 버블 움직임

    const bubble = gsap.from('.sc-story .bubble', {
        scale: 0,
        opacity: 0,
        paused: true,
        stagger: 0.1,
    });

    ScrollTrigger.create({
        trigger: '.sc-story',
        start: 'top 40%',
        end: 'bottom top',
        onEnter: () => {
            bubble.play();
        },
    });

    $('.sc-story').mousemove(function (e) {
        $('.bubble').each(function (idx, el) {
            const speed = $(this).data('speed');
            const x = ($(window).outerWidth() - e.offsetX * speed) / 200;
            const y = ($(window).outerHeight() - e.offsetY * speed) / 200;

            gsap.to(el, {
                x: x,
                y: y,
            });
        });
    });
}

export default Home