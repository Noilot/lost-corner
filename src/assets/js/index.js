const isMobile = window.matchMedia("(max-width: 768px)").matches;

const initLenis = () => {
  const lenis = new Lenis({
    content: document.querySelector(".main_wrapper"),
    lerp: 0.05,
    smoothWheel: true,
    orientation: isMobile ? "vertical" : "horizontal",
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};

initLenis();
