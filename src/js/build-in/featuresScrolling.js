import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function featuresScrolling() {
    const featuresSection = document.querySelector('.features__inner');
    const featureFirst = document.querySelector('.features__item-wrapper:nth-child(1)')
    const featureSecond = document.querySelector('.features__item-wrapper:nth-child(2)');
    const featureThird = document.querySelector('.features__item-wrapper:nth-child(3)');

    console.log(featuresSection.offsetWidth * 2);

    const tl = gsap.timeline();
    tl.to(featureFirst,{opacity:0,duration: 0.3});
    tl.to(featureSecond, {top: 0, opacity: 1}, '-=0.3');
    tl.to(featureSecond,{top: 0, opacity:0,duration: 0.3});
    tl.to(featureThird, {top: 0, opacity: 1}, '-=0.3');

    ScrollTrigger.create({
        animation: tl,
        trigger: featuresSection,
        start: 'center 40%',
        end: () => featuresSection.offsetWidth * 2,
        scrub: true,
        pin: true
    })
}