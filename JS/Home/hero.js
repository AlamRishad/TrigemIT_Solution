document.addEventListener("DOMContentLoaded", function () {
  const herosection = `
    <section class="hero">
    <div class="content">
      <h1>
        Scalable and Secured Platform for Retail & Wholesale SMS Business
      </h1>
      <ul class="features1">
        <li>Client Management</li>
        <li>Web Based Interface</li>
        <li>Campaign Management</li>
      </ul>
      <button class="demo-button">Get started</button>
    </div>
    <div class="image-container">
      <div class="fling-plane-image">
        <img
          id="image1"
          alt="Person with laptop"
          class="foreground-image"
        />
      </div>
      <div class="happy-girl-images">
        <img
          id="image2"
          alt="Person with laptop"
          class="foreground-image2"
        />
      </div>
      <div class="yellow-man">
        <img
          id="image3"
          alt="Person with laptop"
          class="foreground-image3"
        />
      </div>
      <div class="girl">
        <img id="image4" alt="girl" class="foreground-image4" />
      </div>
      <div class="dotteted-circle-image">
        <img
          id="image5"
          alt="Person with laptop"
          class="foreground-image"
        />
      </div>
      <div id="rotatingBackground" class="rotating-background"></div>
      <img id="image6" alt="Person with laptop" class="foreground-image" />
    </div>
  </section>
        `;

  const herocontainer = document.getElementById("hero-container");
  if (herocontainer) {
    herocontainer.innerHTML = herosection;
  }

  const imageSources = {
    image1: "../Images/fling-plane.png",
    image2: "../Images/happy-girl.png",

    image3: "../Images/man-in-yellow.png",
    image4: "../Images/girl.png",
    image5: "../Images/dotteted-circle.png",

    image6:
      "../Images/happy-young-man-using-laptop-while-sitting-armchair-against-white-wall-copy-space-millennial-male-communicating-online-working-studying-remotely-portable-pc 1.png",
  };

  document.getElementById("image1").src = imageSources.image1;

  document.getElementById("image2").src = imageSources.image2;

  document.getElementById("image3").src = imageSources.image3;

  document.getElementById("image4").src = imageSources.image4;

  document.getElementById("image5").src = imageSources.image5;

  document.getElementById("image6").src = imageSources.image6;

  const rotatingElement = document.getElementById("rotatingBackground");
  rotateBackground(rotatingElement, 0.5);

  scaleAnimation(document.querySelector(".foreground-image2"), 0.5, 1.8);
  scaleAnimation(document.querySelector(".foreground-image3"), 0.5, 1.8);
  scaleAnimation(document.querySelector(".foreground-image4"), 0.4, 1.8);
});
function scaleAnimation(imageElement, minScale, maxScale) {
  let scaleDirection = 1;
  let currentScale = minScale;

  function animate() {
    if (currentScale >= maxScale) {
      scaleDirection = -1;
    } else if (currentScale <= minScale) {
      scaleDirection = 1;
    }
    currentScale += scaleDirection * 0.05;
    imageElement.style.transform = `scale(${currentScale})`;
    requestAnimationFrame(animate);
  }

  animate();
}

function rotateBackground(element, increment) {
  let angle = 0;

  function rotate() {
    angle = (angle + increment) % 360;
    element.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    requestAnimationFrame(rotate);
  }

  rotate();
}
