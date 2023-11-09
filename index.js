document.getElementById("reveSbc").addEventListener("click", function () {
  window.location.href = "reveSbc.html";
});

document.addEventListener("DOMContentLoaded", function () {
  var rotatingBackground = document.getElementById("rotatingBackground");
  var angle = 0;

  function rotateBackground() {
    angle = (angle + 0.5) % 360;
    rotatingBackground.style.transform =
      "translate(-50%, -50%) rotate(" + angle + "deg)";
    requestAnimationFrame(rotateBackground);
  }

  rotateBackground();
});

document.addEventListener("DOMContentLoaded", function () {
  var image = document.querySelector(".foreground-image2");
  var scaleDirection = 1;
  var MIN_SCALE = 0.8;
  var MAX_SCALE = 1.7;
  var currentScale = MIN_SCALE;

  setInterval(function () {
    if (currentScale >= MAX_SCALE) {
      scaleDirection = -1;
    } else if (currentScale <= MIN_SCALE) {
      scaleDirection = 1;
    }

    currentScale += scaleDirection * 0.05;
    image.style.transform = `scale(${currentScale})`;
  }, 50);
});

document.addEventListener("DOMContentLoaded", function () {
  var image = document.querySelector(".foreground-image3");
  var scaleDirection = 1;
  var MIN_SCALE = 0.8;
  var MAX_SCALE = 1.7;
  var currentScale = MIN_SCALE;

  setInterval(function () {
    if (currentScale >= MAX_SCALE) {
      scaleDirection = -1;
    } else if (currentScale <= MIN_SCALE) {
      scaleDirection = 1;
    }

    currentScale += scaleDirection * 0.05;
    image.style.transform = `scale(${currentScale})`;
  }, 50);
});
document.addEventListener("DOMContentLoaded", function () {
  var image = document.querySelector(".foreground-image4");
  var scaleDirection = 1;
  var MIN_SCALE = 0.3;
  var MAX_SCALE = 1.3;
  var currentScale = MIN_SCALE;

  setInterval(function () {
    if (currentScale >= MAX_SCALE) {
      scaleDirection = -1;
    } else if (currentScale <= MIN_SCALE) {
      scaleDirection = 1;
    }

    currentScale += scaleDirection * 0.05;
    image.style.transform = `scale(${currentScale})`;
  }, 50);
});
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".container2 .card");

  if (cards.length > 0) {
    cards[0].classList.add("active");
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      cards.forEach(function (c) {
        c.classList.remove("active");
      });

      card.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".container2 .card");

  function animateCards(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transition =
          "transform 0.5s ease-out, opacity 0.5s ease-out";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.opacity = "1";
      } else {
        entry.target.style.transform = "translateY(100px)";
        entry.target.style.opacity = "0";
      }
    });
  }

  let observer = new IntersectionObserver(animateCards, {
    threshold: 0.1,
    rootMargin: "0px",
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const section = document.querySelector(".partnership-image");

  window.addEventListener("scroll", () => {
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
      section.classList.add("in-view");
    } else {
      section.classList.remove("in-view");
    }
  });
});
document.addEventListener("DOMContentLoaded", (event) => {
  const section = document.querySelector(".partnership-text");

  window.addEventListener("scroll", () => {
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
      section.classList.add("in-view");
    } else {
      section.classList.remove("in-view");
    }
  });
});
document.addEventListener("DOMContentLoaded", (event) => {
  const section1 = document.querySelector(".trusted-card1");
  const section2 = document.querySelector(".trusted-card2");
  const section3 = document.querySelector(".trusted-card3");
  window.addEventListener("scroll", () => {
    const sectionPos = section1.getBoundingClientRect().top;

    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
      section1.classList.add("in-view");
      section2.classList.add("in-view");
      section3.classList.add("in-view");
    } else {
      section1.classList.remove("in-view");
      section2.classList.remove("in-view");
      section3.classList.remove("in-view");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var rotatingBackground = document.getElementById("");
  var angle = 0;

  function rotateBackground() {
    angle = (angle + 0.5) % 360;
    rotatingBackground.style.transform =
      "translate(-50%, -50%) rotate(" + angle + "deg)";
    requestAnimationFrame(rotateBackground);
  }

  rotateBackground();
});
