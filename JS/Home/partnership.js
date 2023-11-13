document.addEventListener("DOMContentLoaded", function () {
  const herosection = `
      <section class="partnership-container">
        <div class="partnership-image">
          <img id="businessMeetingImage" alt="Business Meeting" />
        </div>
        <div class="partnership-text">
          <h1>18+ Years</h1>
          <p>of Partnership with Telcos & Service Providers from</p>
          <h1>80+ Countries</h1>
        </div>
      </section>`;

  const herocontainer = document.getElementById("parnership-container-box");
  if (herocontainer) {
    herocontainer.innerHTML = herosection;
  }

  const imageSources = {
    businessMeeting: "../Images/young-businessman-giving-presentation.png",
  };

  document.getElementById("businessMeetingImage").src =
    imageSources.businessMeeting;

  // Call the function to add scroll event listener
  addScrollAnimation1();
});

function addScrollAnimation1() {
  const imageSection = document.querySelector(".partnership-image");
  const textSection = document.querySelector(".partnership-text");

  window.addEventListener("scroll", () => {
    const imagePos = imageSection.getBoundingClientRect().top;
    const textPos = textSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (imagePos < screenPos) {
      imageSection.classList.add("in-view");
    } else {
      imageSection.classList.remove("in-view");
    }

    if (textPos < screenPos) {
      textSection.classList.add("in-view");
    } else {
      textSection.classList.remove("in-view");
    }
  });
}
