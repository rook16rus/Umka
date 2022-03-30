import gsap from 'gsap';
import {Swiper} from "swiper";

const slider = new Swiper('.intro-slider', {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    slideActiveClass: 'intro-slide-active',
    breakpoints: {
        690: {
            spaceBetween: 40
        }
    }
});

export default function intro() {
    const intro = document.querySelector('.intro');
    if (!intro) return;

    /* Задаю внутренний отступ сверху для раздела intro, в зависимости от высоты header */

    const header = document.querySelector('.header');
    const headerHeight = header.clientHeight;
    let paddingTop = 0;

    if (window.screen.width < 992) {
        paddingTop = 35;
    } else {
        paddingTop = 130;
    }
    const introPaddingTop = headerHeight + paddingTop + 'px';

    intro.style.setProperty('--intro-padding-top', introPaddingTop);

    /* Задаю автоматическое переключение слайдера через прогрессбар */

    /*let tl = gsap.timeline();

    slider.on('slideChangeTransitionStart', () => {
        initLineAnimation(tl);
    })

    initLineAnimation(tl);*/
}
/*

function initLineAnimation(tl) {
    const progress = document.querySelector('.intro-slide-active .intro-slider__progressbar-progress');
    tl.to(progress, {width: '100%', duration: 3, onComplete: slideChange, clearProps: "all"})
}

function slideChange() {
    slider.slideNext()
}*/
