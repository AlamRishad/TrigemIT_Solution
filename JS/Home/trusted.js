document.addEventListener("DOMContentLoaded", function () {
  const herosection = `
    <div class="trusted-section">
    <h2>We are Trusted by Industry Leaders</h2>
    <div class="trusted-card trusted-card1">
      <img id="airtelLogo" alt="Airtel" />
    </div>
    <div class="trusted-card trusted-card2">
      <img id="bubbletoneLogo" alt="Bubbletone" />
    </div>
    <div class="trusted-card trusted-card3">
      <img id="btclLogo" alt="BTCL" />
    </div>
  </div>`;

  const herocontainer = document.getElementById("trusted-container");
  if (herocontainer) {
    herocontainer.innerHTML = herosection;
  }

  const imageSources = {
    image1: "../Images/airtel.png",

    image2: "../Images/btcl.png",

    image3: "../Images/bubbletone.png",
  };

  document.getElementById("airtelLogo").src = imageSources.image1;
  document.getElementById("bubbletoneLogo").src = imageSources.image2;
  document.getElementById("btclLogo").src = imageSources.image3;
  // Call the function to add scroll event listener
  addScrollAnimation2();
});

function addScrollAnimation2() {
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
}
