import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function statsScrolling() {
    const statsSection = document.querySelector('.stats__inner');
    const statFirst = document.querySelector('.stats__item-wrapper:nth-child(1)')
    const statSecond = document.querySelector('.stats__item-wrapper:nth-child(2)');
    const statThird = document.querySelector('.stats__item-wrapper:nth-child(3)');

    const tl = gsap.timeline();
    tl.to(statFirst,{opacity:0, duration: 0.3});
    tl.to(statSecond, {top: '50%', y: '-50%', opacity: 1}, '-=0.3');
    tl.to(statSecond,{opacity:0, duration: 0.3});
    tl.to(statThird, {top: '50%', y: '-50%', opacity: 1}, '-=0.3');

    ScrollTrigger.create({
        animation: tl,
        trigger: statsSection,
        start: '40% 40%',
        end: () => statsSection.offsetWidth * 3,
        scrub: true,
        pin: true
    })
}