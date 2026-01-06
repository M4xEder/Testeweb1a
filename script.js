gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

/* Locomotive Scroll */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

/* Sincronização */
scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

/* Horizontal scroll */
window.addEventListener("load", () => {
  const pinWrap = document.querySelector(".pin-wrap");
  const pinWrapWidth = pinWrap.scrollWidth;
  const horizontalScrollLength = pinWrapWidth - window.innerWidth;

  gsap.to(pinWrap, {
    x: -horizontalScrollLength,
    ease: "none",
    scrollTrigger: {
      trigger: "#sectionPin",
      scroller: pageContainer,
      start: "top top",
      end: pinWrapWidth,
      scrub: true,
      pin: true
    }
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();
});
