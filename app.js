gsap.registerPlugin(ScrollTrigger);

// function Toast(message) {
//   Toastify({
//     text: message,
//     duration: 6000,
//     newWindow: true,
//     close: true,
//     gravity: "bottom",
//     position: "right",
//     stopOnFocus: true,
//     style: {
//       background: "red",
//       color: "#ffffff",
//       textAlign: "center",
//       fontSize: "1 rem",
//       padding: "1rem",
//       paddingLeft: "2rem",
//       paddingRight: "2rem",
//       // lineHeight: "2.5rem",
//       padding: "1rem",
//       display: "block",
//       textTransform: "capitalize",
//       maxWidth: "50%",
//       borderRadius: "0.5rem",
//       zIndex: 99999,
//       transform: "translateX(-50%) translateY(-50%)",
//     },
//     onClick: function () {},
//   }).showToast();
// }

// $(".submit-form").submit((e) => {
//   alert("hello");
//   e.preventDefault();
//   var name = $("#form_name").val();
//   console.log(name);
//   var email = $("#form_email").val();
//   var message = $("#form_message").val();
//   var noError = true;
//   if (name[0] == " ") {
//     Toast("Name cannot start with space");
//     $("#name_error").text("Name cannot start with space");
//     setTimeout(() => {
//       $("#name_error").text("");
//     }, 4000);
//     noError = false;
//   }
//   if (name.length < 6) {
//     $("#name_error").text("Name must be atleast 6 characters. ");
//     Toast("Name must be atleast 6 characters. ");
//     setTimeout(() => {
//       $("#name_error").text("");
//     }, 4000);
//     noError = false;
//   }
//   if (email[0] == " ") {
//     Toast("Email cannot start with space");
//     $("#email_error").text("Email cannot start with space");
//     setTimeout(() => {
//       $("#email_error").text("");
//     }, 4000);

//     noError = false;
//   }
//   if (message[0] == " ") {
//     Toast("Message cannot start with space");
//     $("#message_error").text("Message cannot start with space");
//     setTimeout(() => {
//       $("#message_error").text("");
//     }, 4000);
//     noError = false;
//   }
//   if (message.length < 10) {
//     Toast("Message must be atleast 10 characters. ");
//     $("#message_error").text("Message must be atleast 10 characters. ");
//     setTimeout(() => {
//       $("#message_error").text("");
//     }, 4000);
//     noError = false;
//   }
//   if (noError) {
//     $.ajax({
//       url: "https://script.google.com/macros/s/AKfycbyVk1PFsIhusRGGPvZOjzGDeIQofReSwQqyFfG6_SZA2CjQNLK0UdQ5CGQE7SFTQXyB2w/exec",
//       data: $("#submit-form").serialize(),
//       method: "post",
//       success: function (response) {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Successfully Submitted!",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         setTimeout(() => {
//           window.location.reload();
//         }, 2000);
//       },
//       error: function (err) {
//         alert("Something Error");
//       },
//     });
//   }
// });

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

var a1= gsap.timeline({
  defaults: {
    duration: 2,
    ease: "Back.easeOut.config(2)",
    opacity: 0,
  },
  scrollTrigger: {
    trigger: ".aaa",
    start: "+=400",
    end: "+=100",
    scrub: 2,
    // markers: true,
  },
});



a1.from(".aa1", {
  delay: 0.2,
  // scale: 0,
  x: -50,
  transformOrigin: "left",
},
"-=.5"

);

a1.from(
  ".aa2",
  {
    delay: 0.2,
    // scale: 0,
    x: -50,
    transformOrigin: "left",
  },
  "-=.5"
);

a1.from(
  ".aa3",
  {
    delay: 0.2,
    // scale: 0,
    x: -50,
    transformOrigin: "left",
  },
  "-=.5"
);

a1.from(
  ".aa4",
  {
    delay: 0.2,
    // scale: 0,
    x: -50,
    transformOrigin: "left",
  },
  "-=.5"
);

var b1= gsap.timeline({
  defaults: {
    duration: 3,
    ease: "Back.easeOut.config(2)",
    opacity: 0,
  },
  scrollTrigger: {
    trigger: ".bbb",
    start: "+=400",
    end: "+=100",
    scrub: 3,
    // markers: true,
  },
});

b1.from(".b1", {
  delay: 0.9,
  // scale: 0,
  x: -50,
  transformOrigin: "left",
},
"-=.9"
);

b1.from(".b2", {
  delay: 0.9,
  // scale: 0,
  x: -50,
  transformOrigin: "left",
},
"-=.9"
);

b1.from(".b3", {
  delay: 0.9,
  // scale: 0,
  x: -50,
  transformOrigin: "left",
},
"-=.9"
);

b1.from(".b4", {
  delay: 0.9,
  // scale: 0,
  x: -50,
  transformOrigin: "left",
},
"-=.9"
);

b1.from(".b5", {
  delay: 0.9,
  // scale: 0,
  x: -50,
  transformOrigin: "left",
},
"-=.9"
);

b1.from(".b6", {
  delay: 0.9,
  // scale: 0,
  x: -50,
  transformOrigin: "left",
},
"-=.9"
);

b1.from(".b7", {
  delay: 0.9,
  // scale: 0,
  x: -50,
  transformOrigin: "left",
},
"-=.9"
);

b1.from(".b8", {
  delay: 0.9,
  // scale: 0,
  x: -50,
  transformOrigin: "left",
},
"-=.9"
);

b1.from(".b9", {
  delay: 0.9,
  // scale: 0,
  x: -50,
  transformOrigin: "left",
},
"-=.9"
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
    toggleActions: "play none none reverse",
  },
});

// gsap.from(".aa", {
//   opacity: 0,
//   x: -50,
//   scrollTrigger: {
//     trigger: ".aaa",
//     start: "+=400",
//     end: "+=100",
//     scrub: true,
//     markers: true,
//   },
// });


// gsap.to(".aa", {
//   duration: 1,
//   ease: "power4.out",
//   opacity: 1,
//   scrollTrigger: {
//     trigger: ".aaa",
//     start: "+=800",
//     end: "+=100",
//     toggleActions: "play none none reverse",
//     markers: true,
//   },
// });

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
