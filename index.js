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
  var scaleDirection = 1; // Start with zoom in
  var MIN_SCALE = 0.8; // No zoom (original size)
  var MAX_SCALE = 1.7; // Zoom in 10%
  var currentScale = MIN_SCALE;

  setInterval(function () {
    // Switch direction if max or min scale is reached
    if (currentScale >= MAX_SCALE) {
      scaleDirection = -1;
    } else if (currentScale <= MIN_SCALE) {
      scaleDirection = 1;
    }

    // Update the scale value
    currentScale += scaleDirection * 0.05; // Adjust zoom speed if necessary
    image.style.transform = `scale(${currentScale})`;
  }, 50); // Adjust interval speed if necessary
});

document.addEventListener("DOMContentLoaded", function () {
  var image = document.querySelector(".foreground-image3");
  var scaleDirection = 1; // Start with zoom in
  var MIN_SCALE = 0.8; // No zoom (original size)
  var MAX_SCALE = 1.7; // Zoom in 10%
  var currentScale = MIN_SCALE;

  setInterval(function () {
    // Switch direction if max or min scale is reached
    if (currentScale >= MAX_SCALE) {
      scaleDirection = -1;
    } else if (currentScale <= MIN_SCALE) {
      scaleDirection = 1;
    }

    // Update the scale value
    currentScale += scaleDirection * 0.05; // Adjust zoom speed if necessary
    image.style.transform = `scale(${currentScale})`;
  }, 50); // Adjust interval speed if necessary
});
document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".container2 .card");

  // Initially set the first card as active
  if (cards.length > 0) {
    cards[0].classList.add("active");
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      // Remove 'active' class from all cards
      cards.forEach(function (c) {
        c.classList.remove("active");
      });

      // Add 'active' class to the clicked card
      card.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var cards = document.querySelectorAll(".container2 .card");

  // Function that will run when the observed elements enter the viewport
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

  // Create a new IntersectionObserver instance
  let observer = new IntersectionObserver(animateCards, {
    threshold: 0.1, // Triggers when 10% of the target is visible
    rootMargin: "0px", // Adjust this if you want to trigger the animation before the target is in view
  });

  // Observe each card
  cards.forEach((card) => {
    observer.observe(card);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(entry.target.dataset.direction);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // Trigger when half of the element is in view
    }
  );

  // Observe the image and text to trigger the animations
  document.querySelector(".partnership-image").dataset.direction =
    "slide-in-left";
  observer.observe(document.querySelector(".partnership-image"));

  document.querySelector(".partnership-text").dataset.direction =
    "slide-in-right";
  observer.observe(document.querySelector(".partnership-text"));
});

function showContent(id) {
  var contents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  document.getElementById(id).style.display = "block";

  var activeTab = document.querySelector(
    ".tab[onclick=\"showContent('" + id + "')\"]"
  );
  activeTab.classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
  showContent("exclusive");
});
