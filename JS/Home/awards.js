document.addEventListener("DOMContentLoaded", function () {
  const herosection = `
  <section class="award-main">
  <h2>Awards</h2>
  <div class="awards-container">
    <div class="award award1">
      <img id="award1Image" alt="Red Herring Logo" class="award-logo" />
    </div>
    <div class="award award2">
      <img
        id="award2Image"
        alt="Unified Communications Logo"
        class="award-logo"
      />
    </div>
    <div class="award award3">
      <img
        id="award3Image"
        alt="Technology Awards Logo"
        class="award-logo"
      />
    </div>
  </div>
</section>`;

  const herocontainer = document.getElementById("award-section");
  if (herocontainer) {
    herocontainer.innerHTML = herosection;
    addScrollAnimation();
  }

  const imageSources = {
    image1: "../Images/award-1.png",

    image2: "../Images/award-2.png",

    image3: "../Images/award-3.png",
  };

  document.getElementById("award1Image").src = imageSources.image1;
  document.getElementById("award2Image").src = imageSources.image2;
  document.getElementById("award3Image").src = imageSources.image3;
});

function addScrollAnimation() {
  const awardSections = document.querySelectorAll(".award, .award1");
  function checkSectionsInView() {
    awardSections.forEach((section) => {
      const sectionPos = section.getBoundingClientRect().top;
      const screenPos = window.innerHeight;

      if (sectionPos < screenPos) {
        section.classList.add("in-view");
      } else {
        section.classList.remove("in-view");
      }
    });
  }

  checkSectionsInView();

  window.addEventListener("scroll", checkSectionsInView);
}
