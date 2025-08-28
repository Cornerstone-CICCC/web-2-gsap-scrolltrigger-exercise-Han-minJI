gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

const lineOneTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    //markers: true,
    scrub: true,
    start: "top top",
    pin: true,
  },
});

lineOneTl
  .from(".line-one span", { y: "50vh", stagger: 1 })
  .to(".line-one", { backgroundColor: "yellow" })
  .from(".sun", { x: "100vw" })
  .to(".line-one", { backgroundColor: "white" })
  .to(".sun", { x: "-100vw" }, "<")
  .to(".line-one span", { x: "100vw" }, "<");

const lineTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "top top",
    //markers: true,
    scrub: true,
    pin: true,
  },
});

lineTwoTl
  .from(".line-two span:first-child", { scale: 5, x: "-70vw" })
  .from(".line-two span:last-child", { scale: 5, x: "70vw" }, "<")
  .to(".line-two span:first-child", { y: "-50%" })
  .from(".line-two span:first-child", { y: "0" })
  .to(".line-two span:last-child", { y: "-50%" }, "<")
  .from(".line-two span:last-child", { y: "0" });

const lineThreeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    scrub: true,
    pin: true,
    markers: true,
    start: "top top",
  },
});

lineThreeTl
  .from(".line-three span", { y: "50vh", stagger: 1 })
  .to(".line-three", { backgroundPositionX: "0" })
  .to(".line-three span", { color: "gray" }, "<")
  .from(".moon", { x: "110vw" }, "<");
