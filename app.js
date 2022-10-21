gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "Back.easeOut.config(2)",
    opacity: 0,
  },
});

t1.from(
  ".b",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

t1.from(
  ".a",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

t1.from(
  ".s",
  {
    delay: 0.2,

    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

t1.from(
  ".k",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

t1.from(
  ".st0",
  {
    delay: 0.2,
    scale: 0,
    x: -100,
    transformOrigin: "left",
  },
  "-=.5"
);

var t2 = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "Back.easeOut.config(2)",
    opacity: 0,
  },
});

t2.from(
  ".socialicons",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
    // markers: true,
  },
  "-=.5"
);

t2.from(
  ".boywedo",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

t2.from(
  ".girlwedo",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

t2.from(
  ".bubbles",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

t2.from(
  ".another",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

t2.from(
  ".ation",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

t2.from(
  ".anim",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

t2.from(
  ".floors",
  {
    delay: 0.2,
    scale: 0,
    transformOrigin: "center",
  },
  "-=.5"
);

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
    // end: "+=500",
    // markers: true,
  },
  opacity: 1,
  duration: 0,
  x: 20,
});

gsap.from(".headerlogo2", {
  scrollTrigger: {
    trigger: ".headerlogo2",
    start: "+=500",
    end: "+=350",
    scrub: true,
    // markers: true,
  },
  opacity: 0,
  y: 200,
});

gsap.to(".headerlogo2", {
  scrollTrigger: {
    trigger: ".second",
    start: "+=500",
    end: "+=350",
    // markers: true,
  },
  opacity: 1,
  duration: 0,
  x: 20,
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
    scrub: true,
    pin: true,
    pinSpacing: true,
  },
  y: -300,
  x: -100,
  scale: 0.2,
});

gsap.from(".logo2", {
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".logodiv",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".logo2", {
  scrollTrigger: {
    trigger: ".logodiv",
    scrub: true,
    pin: true,
    pinSpacing: true,
  },
  y: -300,
  x: -225,
  scale: 0.2,
});

gsap.from(".firstt", {
  scrollTrigger: {
    trigger: ".w1",
    start: "top top",

    scrub: true,
    // markers: true,
  },
});

gsap.to(".firstt", {
  scrollTrigger: {
    trigger: ".w1",
    start: "top top+=100",
    end: "bottom center",
    scrub: true,
    // markers: true,
    pin: true,
  },
});

gsap.from(".firstt2", {
  scrollTrigger: {
    trigger: ".w2",
    start: "top top",

    scrub: true,
    // markers: true,
  },
});

gsap.to(".firstt2", {
  scrollTrigger: {
    trigger: ".w2",
    start: "top top+=100",
    end: "bottom center",
    scrub: true,
    // markers: true,
    pin: true,
  },
});

gsap.from(".firstt3", {
  scrollTrigger: {
    trigger: ".w3",
    start: "top top",

    scrub: true,
    // markers: true,
  },
});

gsap.to(".firstt3", {
  scrollTrigger: {
    trigger: ".w3",
    start: "top top+=100",
    end: "bottom center",
    scrub: true,
    // markers: true,
    pin: true,
  },
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
  //   opacity: 0,
});

gsap.to(".box7", {
  scrollTrigger: {
    trigger: ".box7",
    start: "top center",
    end: "+=2000",
    scrub: true,
    pin: true,
    pinSpacing: true,
    // markers: true,
  },
  //   x: -500,
  duration: 3,
  ease: "none",
  rotation: 360,
  opacity: 1,
  //   scale: 1.5,
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

// gsap.from(".fade", {
//   scrollTrigger: {
//     trigger: ".fade",
//     // scrub: true,
//     markers: true,
//     start: "-=300",
//     end: "-=300",
//   },
//   x: -100,
//   duration: 1,
//   ease: "none",
//   opacity: 0,
// });

// gsap.to(".fade", {
//   scrollTrigger: {
//     trigger: ".fade",
//     scrub: true,
//     start: "+=200",
//     end: "+=200",
//   },
//   duration: 1,
//   ease: "none",
//   opacity: 1,
// });




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

const hamburger = document.querySelector(".open");
const navs = document.querySelector(".navs");
const header = document.querySelector(".headertag");
const close = document.querySelector(".close");

hamburger.addEventListener("click", () => {
  navs.classList.toggle("d-none");
  header.classList.toggle("bgg");
  hamburger.classList.toggle("d-none");
  close.classList.toggle("d-none");
});

close.addEventListener("click", () => {
  navs.classList.toggle("d-none");
  header.classList.toggle("bgg");
  hamburger.classList.toggle("d-none");
  close.classList.toggle("d-none");
});



// gsap.to ('.sun', {
//     scrollTrigger: {
//         trigger: '.sun',
//         start: 'top center',
//         end: 'bottom center',
//         scrub: true,
//         pin: true,
//     },

//     duration: 1,
//     opacity: 1,
// })
