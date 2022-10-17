gsap.registerPlugin(ScrollTrigger);

gsap.from(".headerlogo", {
    scrollTrigger: {
        trigger: ".headerlogo",
        start: "+=500",
        end: "+=350",
        scrub: true,
        // markers: true,
    },
  opacity: 0,
  y: 200,
});

gsap.to(".headerlogo", {
  scrollTrigger: {
    trigger: ".second",
    start: "top 50%",
    end: "+=100",
    markers: true,
  },
  opacity: 1,
  duration: 0,
  x: 0,
});

gsap.from(".logo", {
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".logodiv",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".logo", {
  scrollTrigger: {
    trigger: ".logodiv",
    // start: "top 80%",
    // end: "bottom 20%",
    scrub: true,
    pin: true,
    pinSpacing: true,
  },
  y: -300,
  x: -500,
  scale: 0.1,
});

gsap.from(".box5", {
  scrollTrigger: {
    trigger: ".box5",
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
  duration: 1,
  ease: "none",
  opacity: 0,
});

gsap.to(".box5", {
  scrollTrigger: {
    trigger: ".box5",
    start: "top center",
    end: "bottom center",
    toggleActions: "restart none none none",
    scrub: true,
    // markers: true,
  },
  x: -500,
  duration: 5,
  ease: "none",
  opacity: 1,
  scale: 1.5,
});

gsap.from(".box6", {
  scrollTrigger: {
    trigger: ".box6",
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
  duration: 1,
  ease: "none",
  opacity: 0,
});

gsap.to(".box6", {
  scrollTrigger: {
    trigger: ".box6",
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
  x: -500,
  duration: 5,
  ease: "none",
  opacity: 1,
  scale: 1.5,
});

gsap.from(".box7", {
  scrollTrigger: {
    trigger: ".box7",
    start: "top+=100 center",
    end: "bottom bottom",
    // scrub: true,
    // markers: true,
  },
  duration: 1,
  ease: "none",
  opacity: 0,
});

gsap.to(".box7", {
  scrollTrigger: {
    trigger: ".box7",
    start: "top center",
    end: "+=300",
    scrub: true,
    // markers: true,
  },
  x: -500,
  duration: 3,
  ease: "none",
  rotation: 360,
  opacity: 1,
  scale: 1.5,
});

gsap.from(".box8", {
  scrollTrigger: {
    trigger: ".box8",
    start: "top center",
    end: "bottom center",
    scrub: true,
    // markers: true,
  },
  duration: 1,
  ease: "none",
  opacity: 0,
});

gsap.to(".box8", {
  scrollTrigger: {
    trigger: ".box8",
    start: "top",
    end: "bottom",
    scrub: true,
    // markers: true,
  },
  x: -500,
  duration: 3,
  ease: "none",
  rotation: 360,
  opacity: 1,
  scale: 1.5,
});
