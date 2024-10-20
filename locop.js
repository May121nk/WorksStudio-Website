const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.05
});


Shery.mouseFollower();
Shery.makeMagnet("a");
Shery.makeMagnet("i");
Shery.makeMagnet("Svg");
Shery.makeMagnet("#footer #left>h4");
Shery.makeMagnet("#footer #right>h5");

document.querySelector("#s-top").addEventListener("click", function () {
  scroll.scrollTo(0);
});
document.querySelector("#s-bot").addEventListener("click", function () {
  scroll.scrollTo(700);
});
var tl = gsap.timeline();

tl.to("#yellow1", {
  top: "-100%",
  delay: 0.1,
  duration: 0.8,
  ease: "expo.out",
});
tl.from(
  "#yellow2",
  {
    top: "100%",
    delay: 0.6,
    duration: 0.7,
    ease: "expo.out",
  },
  "mayank"
);
tl.to(
  "#loader h1",
  {
    color: "black",
    delay: 0.1,
    duration: 0.5,
  },
  "mayank"
);

tl.to(
  "#loader",
  {
    delay: 0.3,
    opacity: 0.9,
  },
  "mayank"
);

tl.to(
  "#loader",
  {
    delay: 0.3,
    display: "none",
  },
  "mayank"
);

var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");
elems.forEach(function (ele) {
  ele.addEventListener("mouseenter", function () {
    var bgImg = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgImg})`;

    // console.log(page2);
  });
});

