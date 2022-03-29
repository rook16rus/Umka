import gsap from 'gsap';
import {Swiper, Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid} from "swiper";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid]);

export default function intro() {


    const intro = document.querySelector('.intro');
    if (!intro) return;

    /* Задаю внутренний отступ сверху для раздела intro, в зависимости от высоты header */

    const header = document.querySelector('.header');
    const headerHeight = header.clientHeight;
    const paddingTop = headerHeight + 130 + 'px';

    intro.style.setProperty('--intro-padding-top', paddingTop);

    /* Задаю автоматическое переключение слайдера через прогрессбар */

    const progress = document.querySelector('.swiper-slide-active .intro-slider__progressbar-progress');

    const tl = gsap.timeline();

    tl.to(progress, {width: '100%', duration: 3,})
}

function slideChange () {
    const slider = new Swiper('.intro-slider');
    slider.slideNext();
}