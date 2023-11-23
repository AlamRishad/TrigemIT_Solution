document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation();
          // Optional: Stop observing the element after animation has started
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value based on when you want the animation to start
    }
  );

  const footballSection = document.querySelector(".event-football");
  observer.observe(footballSection);
});
function startAnimation() {
  let footballImage = document.querySelector(".football-image img");

  let playerImage = document.querySelector(".football-player img");
  let playerImage2 = document.querySelector(".football-player2 img");
  let playerImage3 = document.querySelector(".football-player3 img");

  let margin_right = 57;
  let margin_left = 80;
  let increment = 50;
  let angle = 0;
  let angle2 = 0;
  let angle3 = 0;
  let flag = 0;
  let top1 = 53.5;
  let bottom = 0;
  let t = 0;
  let interval = setInterval(function () {
    if (angle2 < 50 && flag === 0) {
      angle2 = angle2 + increment;
      playerImage.style.transform = `translate(-50%, -50%) rotate(${angle2}deg)`;
    } else if (margin_left > 57) {
      margin_left -= 1;
      footballImage.style.left = margin_left + "vw";

      angle = (angle + increment) % 360;
      footballImage.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

      if (angle2 < 51 && angle2 > 0) {
        flag = 1;
        angle2 = angle2 - increment;
        playerImage.style.transform = `translate(-50%, -50%) rotate(${angle2}deg)`;
      }
    } else if (angle3 === 0) {
      console.log(angle3);
      angle3 = angle3 - increment;
      playerImage2.style.transform = `translate(-50%, -50%) rotate(${angle3}deg)`;
    } else if (margin_right >= 56 && margin_right < 72) {
      margin_right += 1.2;
      top1 -= 2.5;
      footballImage.style.left = margin_right + "vw";
      footballImage.style.marginTop = top1 + "vh";
      angle = (angle - increment) % 360;
      footballImage.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      if (angle3 === -50) {
        angle3 = angle3 + increment;
        playerImage2.style.transform = `translate(-50%, -50%) rotate(${angle3}deg)`;
        angle3 = 100;
      }
    } else if (margin_right >= 72 && margin_right <= 90) {
      margin_right += 1.2;
      top1 += 1.1;
      footballImage.style.left = margin_right + "vw";
      footballImage.style.marginTop = top1 + "vh";
      angle = (angle - increment) % 360;
      footballImage.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      if (angle3 === 100) {
        angle3 = angle3 + increment;
        playerImage3.style.transform = `translate(-50%, -50%) rotate(${
          angle3 - 50
        }deg)`;
        angle3 = 100;
      }
    } else if (angle3 === 100) {
      angle3 = angle3 + increment;
      playerImage3.style.transform = `translate(-50%, -50%) rotate(${
        angle3 + 210
      }deg)`;
    } else if (t === 0) {
      t = 1;
      top1 = 14;
      playerImage3.style.marginTop = top1 + "vh";

      top1 = 50;
      playerImage2.style.marginTop = top1 + "vh";
    } else if (t === 1) {
      t = 0;

      top1 = 13;
      playerImage3.style.marginTop = top1 + "vh";
      top1 = 49;
      playerImage2.style.marginTop = top1 + "vh";
    } else {
      clearInterval(interval);
    }
  }, 50);
}
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Check if the element is intersecting
        if (entry.isIntersecting) {
          // Add the 'in-view' class to start the animation
          entry.target.classList.add("in-view");
        } else {
          // Optionally: remove the class when the element is not visible
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 0.1, // This can be set to 0 if you want the animation to start right when the element enters the screen
    }
  );

  // Observe the .event-details div
  const eventDetails = document.querySelector(".event-details");
  observer.observe(eventDetails);
});
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Check if the element is intersecting
        if (entry.isIntersecting) {
          // Add the 'in-view' class to start the animation
          entry.target.classList.add("in-view");
        } else {
          // Optionally: remove the class when the element is not visible
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 0.1, // This can be set to 0 if you want the animation to start right when the element enters the screen
    }
  );

  // Observe the .event-details div
  const eventDetails = document.querySelector(".event-details2");
  observer.observe(eventDetails);
});
