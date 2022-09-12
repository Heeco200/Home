const h1 = document.getElementsByTagName('h1')
const line = document.querySelector('.line')

window.addEventListener('load', loadanim)

function loadanim() {
    const TL = gsap.timeline();

    TL.from(h1, {autoAlpha: 0, y: -100, delay: 0.8})
    .to(line, {height: 160}, '-=0.2')
    .from('.img3', {autoAlpha: 0, y: -30}, '-=0.3')
    .from('.btn', {autoAlpha: 0, y: -50}, '-=0.8')
    .from('.ul li', {autoAlpha: 0, y: -30, stagger: .1}, '-=0.2')
    .from('.img2', {autoAlpha: 0, y: -30}, '-=0.1')
    .from('.img1', {autoAlpha: 0, y: -30}, '-=0.2')
}