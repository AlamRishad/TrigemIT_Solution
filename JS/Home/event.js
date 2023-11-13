document.addEventListener("DOMContentLoaded", function () {
  const herosection = `
    <h2>Events Participations</h2>
    <div class="events-container">
      <div class="event-card">
        <img
          id="softExpoImage"
          alt="Basis SoftExpo2023"
          class="event-image"
        />
        <p class="event-caption">Basis SoftExpo2023</p>
      </div>
      <div class="event-card">
        <img id="communicAsiaImage" alt="CommunicAsia" class="event-image" />
        <p class="event-caption">CommunicAsia</p>
      </div>
      <div class="event-card">
        <img id="itwChicagoImage" alt="ITW Chicago" class="event-image" />
        <p class="event-caption">ITW Chicago</p>
      </div>
      <div class="event-card">
        <img
          id="capacityEuropeImage"
          alt="Capacity Europe"
          class="event-image"
        />
        <p class="event-caption">Capacity Europe</p>
      </div>
    </div>
    <button class="view-more">View More</button>`;

  const herocontainer = document.getElementById("event-container");
  if (herocontainer) {
    herocontainer.innerHTML = herosection;
  }

  const imageSources = {
    image1: "../Images/capacity-europe.png",

    image2: "../Images/communic-asia.png",

    image3: "../Images/itw-chicago.png",

    image4: "../Images/basis-softexpo.png",
  };

  document.getElementById("softExpoImage").src = imageSources.image1;
  document.getElementById("communicAsiaImage").src = imageSources.image2;
  document.getElementById("capacityEuropeImage").src = imageSources.image3;

  document.getElementById("itwChicagoImage").src = imageSources.image4;
  // Call the function to add scroll event listener
  addScrollAnimation2();
});
