gsap.registerPlugin(ScrollTrigger);

const pinWrap = document.querySelector(".pin-wrap");

const scrollLength = pinWrap.scrollWidth - window.innerWidth;

gsap.to(pinWrap, {
  x: -scrollLength,
  ease: "none",
  scrollTrigger: {
    trigger: "#sectionPin",
    start: "top top",
    end: () => `+=${pinWrap.scrollWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});
